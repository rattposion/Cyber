'use client';

import { useState, useEffect, useRef } from 'react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/components/AuthProvider';
import Link from 'next/link';
import BackgroundEffects from '@/components/BackgroundEffects';
import CyberTerminal from '@/components/CyberTerminal';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface Product {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  preco1d: number;
  preco7d: number;
  preco30d: number;
  precoLifetime: number;
  imagem?: string;
  categoria?: {
    id: number;
    nome: string;
  } | null;
}

export default function Produtos() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const { addItem } = useCart();
  const { user } = useAuth();
  const router = useRouter();
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalProduct, setTerminalProduct] = useState<Product | null>(null);
  const [terminalLines, setTerminalLines] = useState([
    'root@cybershop:~$ echo "Bem-vindo ao sistema hacker de produtos!"',
    'Bem-vindo ao sistema hacker de produtos!',
    'root@cybershop:~$ echo "Aguardando produto..."',
    'Aguardando produto...'
  ]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const productsCache = useRef<{ data: Product[], timestamp: number } | null>(null);
  const [isRetrying, setIsRetrying] = useState(false);
  const requestQueue = useRef<(() => Promise<void>)[]>([]);
  const isProcessingQueue = useRef(false);

  // Dados de fallback para quando a API estiver indisponível
  const fallbackProducts: Product[] = [
    {
      id: 1,
      nome: "Produto de Demonstração",
      descricao: "Este é um produto de demonstração que aparece quando a API está indisponível.",
      preco: 99.99,
      preco1d: 99.99,
      preco7d: 99.99,
      preco30d: 99.99,
      precoLifetime: 99.99,
      categoria: { id: 1, nome: "Demonstração" }
    }
  ];

  // Função para processar a fila de requisições
  const processQueue = async () => {
    if (isProcessingQueue.current || requestQueue.current.length === 0) return;
    
    isProcessingQueue.current = true;
    
    while (requestQueue.current.length > 0) {
      const request = requestQueue.current.shift();
      if (request) {
        try {
          await request();
          // Aguarda 2 segundos entre as requisições
          await new Promise(resolve => setTimeout(resolve, 2000));
        } catch (error) {
          console.error('Erro ao processar requisição:', error);
        }
      }
    }
    
    isProcessingQueue.current = false;
  };

  // Função para adicionar uma requisição à fila
  const addToQueue = (request: () => Promise<void>) => {
    requestQueue.current.push(request);
    processQueue();
  };

  // Função para implementar retry com backoff exponencial
  const fetchWithRetry = async (url: string, options: RequestInit, maxRetries = 5) => {
    let retries = 0;
    let lastError: Error | null = null;
    
    while (retries < maxRetries) {
      try {
        setIsRetrying(true);
        // Garante que a URL é sempre '/api/produtos' para chamadas internas
        const response = await fetch('/api/produtos', options);
        
        if (response.status === 429) {
          const retryAfter = response.headers.get('Retry-After');
          const waitTime = retryAfter ? parseInt(retryAfter) * 1000 : Math.pow(2, retries) * 3000;
          
          console.log(`Rate limit atingido. Tentativa ${retries + 1}/${maxRetries}. Aguardando ${waitTime}ms...`);
          await new Promise(resolve => setTimeout(resolve, waitTime));
          retries++;
          continue;
        }
        
        setIsRetrying(false);
        return response;
      } catch (error) {
        lastError = error as Error;
        if (retries === maxRetries - 1) break;
        
        const waitTime = Math.pow(2, retries) * 3000;
        console.log(`Erro na requisição. Tentativa ${retries + 1}/${maxRetries}. Aguardando ${waitTime}ms...`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
        retries++;
      }
    }
    
    setIsRetrying(false);
    throw lastError || new Error('Número máximo de tentativas excedido');
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      console.log('Iniciando busca de produtos...');
      
      // Verifica se há cache válido (menos de 5 minutos)
      if (productsCache.current && Date.now() - productsCache.current.timestamp < 5 * 60 * 1000) {
        console.log('Usando dados do cache');
        setProducts(productsCache.current.data);
        setLoading(false);
        return;
      }
      
      // Adiciona um delay inicial de 1 segundo antes da primeira requisição
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const response = await fetchWithRetry('/api/produtos', {
        headers: {
          'Cache-Control': 'no-cache'
        }
      });
      
      console.log('Status da resposta:', response.status);
      
      if (!response.ok) {
        const errorData = await response.text();
        console.error('Erro na resposta:', response.status, errorData);
        throw new Error(`Erro ao carregar produtos: ${response.status}`);
      }

      const data = await response.json();
      console.log('Dados recebidos:', JSON.stringify(data, null, 2));

      if (!Array.isArray(data)) {
        console.error('Dados recebidos não são um array:', data);
        throw new Error('Formato de dados inválido');
      }

      // Limpa e valida os dados
      const cleanedData = data.map(product => ({
        ...product,
        preco: Number(product.preco) || 0,
        preco1d: Number(product.preco1d) || 0,
        preco7d: Number(product.preco7d) || 0,
        preco30d: Number(product.preco30d) || 0,
        precoLifetime: Number(product.precoLifetime) || 0,
        categoria: product.categoria && typeof product.categoria === 'object' && 'nome' in product.categoria
          ? { id: product.categoria.id, nome: product.categoria.nome }
          : null
      }));

      // Atualiza o cache
      productsCache.current = {
        data: cleanedData,
        timestamp: Date.now()
      };

      console.log('Dados limpos:', JSON.stringify(cleanedData, null, 2));
      setProducts(cleanedData);
      console.log('Produtos atualizados:', cleanedData.length);
    } catch (err) {
      console.error('Erro ao buscar produtos:', err);
      setError(err instanceof Error ? err.message : 'Erro ao carregar produtos');
      
      // Se todas as tentativas falharem, usa os dados de fallback
      if (products.length === 0) {
        console.log('Usando dados de fallback');
        setProducts(fallbackProducts);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Adiciona a requisição inicial à fila
    addToQueue(fetchProducts);
  }, []);

  const handleImageError = (productId: number) => {
    setImageErrors(prev => ({
      ...prev,
      [productId]: true
    }));
  };

  // Função auxiliar para obter o nome da categoria
  const getCategoryName = (product: Product): string => {
    if (!product.categoria) return 'Sem categoria';
    if (typeof product.categoria === 'string') return product.categoria;
    if (typeof product.categoria === 'object' && product.categoria !== null && 'nome' in product.categoria) {
      return product.categoria.nome;
    }
    return 'Sem categoria';
  };

  // Função auxiliar para extrair categorias únicas
  const extractUniqueCategories = (products: Product[]): string[] => {
    const categorySet = new Set<string>();
    products.forEach(product => {
      const categoryName = getCategoryName(product);
      if (categoryName) categorySet.add(categoryName);
    });
    return ['todos', ...Array.from(categorySet)];
  };

  const categories = extractUniqueCategories(products);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.descricao.toLowerCase().includes(searchTerm.toLowerCase());
    const productCategory = getCategoryName(product);
    const matchesCategory = selectedCategory === 'todos' || productCategory === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product: Product) => {
    const item = {
      id: product.id,
      name: product.nome,
      price: product.preco,
      quantity: 1,
      licenseType: 'Mensal' as const,
      image: product.imagem || '/placeholder.png'
    };

    addItem(item);
    router.push("/carrinho");
  };

  const handleBuy = (product: Product) => {
    setTerminalProduct(product);
    setShowTerminal(true);
  };

  const handleDetails = (product: Product) => {
    router.push(`/produtos/${product.id}`);
  };

  // Atualiza terminal ao adicionar ao carrinho
  const handleAddToCartTerminal = (product: Product) => {
    handleAddToCart(product);
    setTerminalLines(prev => [
      ...prev,
      `root@cybershop:~$ echo "${product.nome} adicionado ao carrinho!"`,
      `${product.nome} adicionado ao carrinho!`
    ]);
    setTimeout(() => {
      setTerminalLines(prev => [
        ...prev,
        'root@cybershop:~$ echo "Aguardando produto..."',
        'Aguardando produto...'
      ]);
    }, 2000);
  };

  // Atualiza terminal ao clicar em detalhes
  const handleDetailsTerminal = (product: Product) => {
    setTerminalLines(prev => [
      ...prev,
      `root@cybershop:~$ echo "Visualizando detalhes de ${product.nome}"`,
      `Visualizando detalhes de ${product.nome}`
    ]);
    handleDetails(product);
  };

  // Atualiza terminal ao clicar em comprar
  const handleBuyTerminal = (product: Product) => {
    setTerminalLines(prev => [
      ...prev,
      `root@cybershop:~$ echo "Iniciando compra de ${product.nome}"`,
      `Iniciando compra de ${product.nome}`
    ]);
    handleAddToCart(product);
    router.push('/carrinho');
  };

  // Scroll automático para o final do terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalLines]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-cyber-primary"></div>
          {isRetrying && (
            <div className="text-[#39ff14] font-mono">
              Tentando novamente... Por favor, aguarde.
            </div>
          )}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full relative bg-black overflow-x-hidden">
      <BackgroundEffects />
      <div className="cyber-grid absolute inset-0 opacity-20 pointer-events-none z-0"></div>
      <div className="absolute inset-0 pointer-events-none z-10"></div>
      {/* Terminal hacking fixo no topo */}
      <div className="max-w-4xl mx-auto pt-8 pb-4">
        <div className="terminal-fake w-full glitch">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <button className="terminal-button close"></button>
              <button className="terminal-button minimize"></button>
              <button className="terminal-button maximize"></button>
            </div>
            <div className="terminal-title">Sistema Hacker v1.0.0</div>
          </div>
          <div className="terminal-content p-4 h-24 md:h-28 overflow-y-auto font-mono text-[#39ff14] text-sm bg-black/95" ref={terminalRef}>
            {terminalLines.map((line, idx) => (
              <div key={idx} className="whitespace-pre-line">{line}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 relative z-20">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-4xl md:text-5xl font-bold cyber-glow glitch text-[#39ff14] font-mono" data-text="Produtos">Produtos</h1>
          </div>
          {/* Barra de pesquisa */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full p-2 rounded bg-black/80 border border-[#39ff14] text-[#39ff14] placeholder-[#39ff14]/60 font-mono focus:ring-2 focus:ring-[#00eaff]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {/* Filtro de categorias */}
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded font-mono border border-[#39ff14]/40 shadow-[0_0_8px_#39ff14] transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-[#39ff14] text-black' : 'bg-black/80 text-[#39ff14] hover:bg-[#00eaff] hover:text-black'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        {/* Grid de produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-black/80 border border-[#39ff14]/40 rounded-xl overflow-hidden shadow-[0_0_20px_#39ff14] hover:shadow-[0_0_40px_#00eaff] transition-all duration-300 group backdrop-blur-md relative flex flex-col"
            >
              {product.imagem && !imageErrors[product.id] && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.imagem}
                    alt={product.nome}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={() => handleImageError(product.id)}
                  />
                  <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
              )}
              <div className="p-4 flex flex-col justify-between h-full flex-1">
                <h2 className="text-xl font-bold mb-2 text-[#39ff14] glitch font-mono" data-text={product.nome}>{product.nome}</h2>
                <p className="text-[#ededed] mb-4 line-clamp-2 font-mono">{product.descricao}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-[#00eaff] font-mono">
                    R$ {(Number(product.preco) || 0).toFixed(2)}
                  </span>
                </div>
                <div className="flex gap-1 mb-3">
                  <button
                    onClick={() => handleBuyTerminal(product)}
                    className="cyber-btn flex-1 text-sm font-mono px-2 py-1 min-w-[80px] border border-[#39ff14] shadow-[0_0_8px_#39ff14] hover:shadow-[0_0_16px_#00eaff] transition-all duration-200 flex items-center justify-center gap-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" /></svg>
                    Comprar
                  </button>
                  <button
                    onClick={() => handleDetailsTerminal(product)}
                    className="cyber-btn flex-1 text-sm font-mono bg-[#00eaff] text-black hover:bg-[#39ff14] hover:text-black px-2 py-1 min-w-[80px] border border-[#00eaff] shadow-[0_0_8px_#00eaff] hover:shadow-[0_0_16px_#39ff14] transition-all duration-200 flex items-center justify-center gap-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m6 0a6 6 0 11-12 0 6 6 0 0112 0z" /></svg>
                    Detalhes
                  </button>
                  <button
                    onClick={() => handleAddToCartTerminal(product)}
                    className="cyber-btn flex-1 text-sm font-mono bg-[#8f00ff] text-white hover:bg-[#39ff14] hover:text-black px-2 py-1 min-w-[80px] border border-[#8f00ff] shadow-[0_0_8px_#8f00ff] hover:shadow-[0_0_16px_#39ff14] transition-all duration-200 flex items-center justify-center gap-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007 17h10a1 1 0 00.95-.68L19 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7" /></svg>
                    Carrinho
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  <span className="px-3 py-1 bg-[#39ff14]/10 text-[#39ff14] rounded-full text-xs font-mono">
                    {getCategoryName(product)}
                  </span>
                  <span className="px-3 py-1 bg-[#00eaff]/10 text-[#00eaff] rounded-full text-xs font-mono">Suporte 24/7</span>
                  <span className="px-3 py-1 bg-[#8f00ff]/10 text-[#8f00ff] rounded-full text-xs font-mono">Garantia Vitalícia</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <div className="text-center py-8">
            <p className="text-[#ededed] font-mono">Nenhum produto encontrado.</p>
          </div>
        )}
      </div>
      {/* Modal de terminal de compra */}
      {showTerminal && terminalProduct && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="max-w-lg w-full">
            <div className="bg-black rounded-lg shadow-2xl p-6 border border-[#39ff14]/40 relative">
              <button onClick={() => setShowTerminal(false)} className="absolute top-2 right-2 text-[#39ff14] text-xl">×</button>
              <h2 className="text-2xl cyber-glow font-mono mb-4 text-[#39ff14]">Comprar: {terminalProduct.nome}</h2>
              <CyberTerminal />
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 