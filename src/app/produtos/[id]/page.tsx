"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useAuth } from "@/components/AuthProvider";
import BackgroundEffects from '@/components/BackgroundEffects';
import Link from "next/link";
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
  features: string[];
}

export default function ProdutoDetalhe({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);
  const router = useRouter();
  const { addItem } = useCart();
  const { user } = useAuth();
  const [tipoUso, setTipoUso] = useState<'Mensal' | 'Trimestral' | 'Anual'>('Mensal');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        console.log('Iniciando busca do produto:', params.id);
        
        const response = await fetch(`/api/produtos/${params.id}`, {
          headers: {
            'Cache-Control': 'no-cache'
          }
        });

        console.log('Status da resposta:', response.status);

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Erro na resposta:', response.status, errorText);
          throw new Error(`Erro ao carregar produto: ${response.status}`);
        }

        const data = await response.json();
        console.log('Dados recebidos:', data);

        // Verifica se data é um array e encontra o produto pelo ID
        const produtoEncontrado = Array.isArray(data) 
          ? data.find(p => p.id === Number(params.id))
          : data;

        if (!produtoEncontrado) {
          console.error('Produto não encontrado com ID:', params.id);
          throw new Error('Produto não encontrado');
        }

        // Limpa e valida os dados
        const cleanedProduct = {
          ...produtoEncontrado,
          imagem: produtoEncontrado.imagem || '/placeholder.png',
          categoria: produtoEncontrado.categoria && typeof produtoEncontrado.categoria === 'object' && 'nome' in produtoEncontrado.categoria
            ? { id: produtoEncontrado.categoria.id, nome: produtoEncontrado.categoria.nome }
            : null
        };

        console.log('Produto processado:', cleanedProduct);
        setProduct(cleanedProduct);
      } catch (err) {
        console.error('Erro ao buscar produto:', err);
        setError(err instanceof Error ? err.message : 'Erro ao carregar produto');
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchProduct();
    }
  }, [params.id]);

  const handleAddToCart = () => {
    if (product) {
      const item = {
        id: product.id,
        name: product.nome,
        price: getPreco(),
        quantity: 1,
        licenseType: tipoUso,
        image: product.imagem || '/placeholder.png'
      };

      addItem(item);
      router.push('/carrinho');
    }
  };

  function getPreco() {
    if (!product) return 0;
    
    switch (tipoUso) {
      case 'Mensal':
        return product.preco30d || product.preco || 0;
      case 'Trimestral':
        return (product.preco30d || product.preco) * 2.5;
      case 'Anual':
        return (product.preco30d || product.preco) * 8;
      default:
        return product.preco || 0;
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-cyber-primary"></div>
          <div className="text-[#39ff14] font-mono">Carregando produto...</div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="text-red-500 text-xl">{error || 'Produto não encontrado'}</div>
        <Link href="/produtos" className="cyber-btn">
          Voltar para Produtos
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full relative bg-black overflow-x-hidden">
      <BackgroundEffects />
      <div className="cyber-grid absolute inset-0 opacity-20 pointer-events-none z-0"></div>
      <div className="container mx-auto px-4 py-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-black/80 border border-[#39ff14]/40">
              {product.imagem && !imageError ? (
                <Image
                  src={product.imagem}
                  alt={product.nome}
                  fill
                  className="object-cover"
                  onError={() => setImageError(true)}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[#39ff14] font-mono">Imagem não disponível</span>
                </div>
              )}
              <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none"></div>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-[#39ff14] mb-4 glitch font-mono" data-text={product.nome}>
              {product.nome}
            </h1>
            <p className="text-[#ededed] mb-6 font-mono">{product.descricao}</p>
            <div className="text-3xl font-bold text-[#00eaff] mb-6 font-mono">
              R$ {getPreco().toFixed(2)}
            </div>
            <div className="flex gap-4 mb-6">
              <button
                onClick={handleAddToCart}
                className="cyber-btn flex-1 bg-[#39ff14] text-black hover:bg-[#00eaff] hover:text-black"
                disabled={!user}
              >
                {user ? "Comprar Agora" : "Faça login para comprar"}
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#39ff14]/10 text-[#39ff14] rounded-full text-sm font-mono">
                {product.categoria?.nome || 'Sem categoria'}
              </span>
              <span className="px-3 py-1 bg-[#00eaff]/10 text-[#00eaff] rounded-full text-sm font-mono">
                Entrega Imediata
              </span>
              <span className="px-3 py-1 bg-[#8f00ff]/10 text-[#8f00ff] rounded-full text-sm font-mono">
                Suporte 24/7
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 