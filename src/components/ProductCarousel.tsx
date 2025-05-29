'use client';

import { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export default function ProductCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [imgSrcs, setImgSrcs] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [terminalText, setTerminalText] = useState<string[]>([]);

  useEffect(() => {
    // Dados mockados temporários
    const mockProducts = [
      {
        id: 1,
        name: "Bot Discord Premium",
        description: "Bot completo para automação de vendas no Discord",
        price: 99.90,
        image: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=800&auto=format&fit=crop&q=60",
        category: "bots"
      },
      {
        id: 2,
        name: "Script de Automação",
        description: "Script para automação de tarefas repetitivas",
        price: 49.90,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60",
        category: "scripts"
      },
      {
        id: 3,
        name: "Template Loja Digital",
        description: "Template completo para sua loja digital",
        price: 79.90,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
        category: "templates"
      }
    ];
    
    setProducts(mockProducts);
    setImgSrcs(mockProducts.map(p => p.image));
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % products.length);
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [products]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleImgError = (idx: number) => {
    setImgSrcs((prev) => {
      const arr = [...prev];
      arr[idx] = '/images/placeholder.svg';
      return arr;
    });
  };

  const handlePurchase = async (product: Product) => {
    try {
      setIsProcessing(true);
      setTerminalText([]);
      
      // Simular comandos do terminal
      const commands = [
        'Iniciando processo de compra...',
        'Verificando disponibilidade do produto...',
        'Conectando ao servidor de pagamentos...',
        'Gerando link de acesso...'
      ];

      for (const cmd of commands) {
        setTerminalText(prev => [...prev, cmd]);
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      const response = await fetch('/api/purchase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: product.id,
          productName: product.name,
          price: product.price,
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao processar compra');
      }

      const data = await response.json();
      
      setTerminalText(prev => [...prev, 'Link gerado com sucesso!']);
      await new Promise(resolve => setTimeout(resolve, 500));
      
      if (data.discordUrl) {
        window.open(data.discordUrl, '_blank');
      }
    } catch (error) {
      console.error('Erro ao processar compra:', error);
      setTerminalText(prev => [...prev, 'ERRO: Falha ao processar compra']);
      alert('Erro ao processar sua compra. Por favor, tente novamente.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (isLoading) {
    return (
      <div className="terminal-fake w-full h-[400px] md:h-[500px]">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <button className="terminal-button close"></button>
            <button className="terminal-button minimize"></button>
            <button className="terminal-button maximize"></button>
          </div>
          <div className="terminal-title">Carregando Produtos...</div>
        </div>
        <div className="terminal-content">
          <p className="typing">Iniciando sistema...</p>
          <p className="typing">Carregando produtos...</p>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="terminal-fake w-full h-[400px] md:h-[500px]">
        <div className="terminal-header">
          <div className="terminal-buttons">
            <button className="terminal-button close"></button>
            <button className="terminal-button minimize"></button>
            <button className="terminal-button maximize"></button>
          </div>
          <div className="terminal-title">Erro</div>
        </div>
        <div className="terminal-content">
          <p className="text-red-500">ERRO: Nenhum produto disponível</p>
        </div>
      </div>
    );
  }

  return (
    <div className="terminal-fake w-full min-h-[400px] md:min-h-[500px]">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <button className="terminal-button close"></button>
          <button className="terminal-button minimize"></button>
          <button className="terminal-button maximize"></button>
        </div>
        <div className="terminal-title">CyberShop Terminal v1.0.0</div>
      </div>
      <div className="terminal-content relative overflow-visible">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`absolute w-full left-0 top-0 transition-all duration-500 transform ${
              index === currentSlide ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-8 pointer-events-none z-0'
            }`}
            style={{ position: index === currentSlide ? 'relative' : 'absolute' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              <div className="relative h-[200px] md:h-[300px] group">
                <img
                  src={imgSrcs[index]}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  onError={() => handleImgError(index)}
                />
                <div className="absolute inset-0 cyber-grid opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg"></div>
              </div>
              <div className="flex flex-col justify-between p-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#39ff14] mb-2 glitch" data-text={product.name}>
                    {product.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-lg">{product.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#39ff14] text-2xl font-bold">R$ {product.price.toFixed(2)}</span>
                    <span className="text-[#00eaff] text-sm">ou em até 12x</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#39ff14]/10 text-[#39ff14] rounded-full text-sm">Entrega Imediata</span>
                    <span className="px-3 py-1 bg-[#00eaff]/10 text-[#00eaff] rounded-full text-sm">Suporte 24/7</span>
                    <span className="px-3 py-1 bg-[#8f00ff]/10 text-[#8f00ff] rounded-full text-sm">Garantia Vitalícia</span>
                  </div>
                </div>
                <button 
                  onClick={() => handlePurchase(product)}
                  disabled={isProcessing}
                  className={`cyber-btn text-lg py-3 ${isProcessing ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 transition-transform'}`}
                >
                  {isProcessing ? 'Processando...' : 'Iniciar Compra'}
                </button>
              </div>
            </div>
            {terminalText.length > 0 && (
              <div className="mt-4 p-4 bg-black/50 rounded-lg backdrop-blur-sm">
                {terminalText.map((text, idx) => (
                  <p key={idx} className="text-[#39ff14] font-mono mb-1">
                    <span className="text-[#00eaff]">$</span> {text}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-[#39ff14] w-6' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 