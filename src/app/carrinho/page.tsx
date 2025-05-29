'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useAuth } from "@/components/AuthProvider";
import BackgroundEffects from '@/components/BackgroundEffects';
import Link from 'next/link';
import Image from 'next/image';

export default function Carrinho() {
  const { items, removeItem, updateQuantity } = useCart();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getPreco = (item: any) => {
    switch (item.licenseType) {
      case 'Mensal':
        return item.price;
      case 'Trimestral':
        return item.price * 2.5;
      case 'Anual':
        return item.price * 8;
      default:
        return item.price;
    }
  };

  const total = items.reduce((acc, item) => acc + getPreco(item) * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="min-h-screen w-full relative bg-black overflow-x-hidden">
        <BackgroundEffects />
        <div className="cyber-grid absolute inset-0 opacity-20 pointer-events-none z-0"></div>
        <div className="container mx-auto px-4 py-8 relative z-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#39ff14] mb-4 glitch font-mono">
              Seu Carrinho está Vazio
            </h1>
            <p className="text-[#ededed] mb-6 font-mono">
              Adicione alguns produtos para começar a comprar!
            </p>
            <Link href="/produtos" className="cyber-btn">
              Ver Produtos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full relative bg-black overflow-x-hidden">
      <BackgroundEffects />
      <div className="cyber-grid absolute inset-0 opacity-20 pointer-events-none z-0"></div>
      <div className="container mx-auto px-4 py-8 relative z-20">
        <h1 className="text-4xl font-bold text-[#39ff14] mb-8 glitch font-mono">
          Seu Carrinho
        </h1>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {items.map((item) => (
              <div
                key={`${item.id}-${item.licenseType}`}
                className="bg-black/50 border border-[#39ff14]/20 rounded-lg p-4 mb-4"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#39ff14] font-mono">{item.name}</h3>
                    <p className="text-[#ededed] text-sm font-mono">
                      Licença: {item.licenseType}
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-[#39ff14] hover:text-[#00eaff]"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="text-[#ededed] font-mono">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-[#39ff14] hover:text-[#00eaff]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[#00eaff] font-mono">
                      R$ {(getPreco(item) * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-400 text-sm mt-2"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-black/50 border border-[#39ff14]/20 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-[#39ff14] mb-4 font-mono">
                Resumo do Pedido
              </h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-[#ededed] font-mono">
                  <span>Subtotal</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#ededed] font-mono">
                  <span>Taxas</span>
                  <span>R$ 0.00</span>
                </div>
                <div className="border-t border-[#39ff14]/20 my-4"></div>
                <div className="flex justify-between text-[#39ff14] font-bold font-mono">
                  <span>Total</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500 text-yellow-500 p-4 rounded-lg text-center">
                Sistema de pagamento em manutenção. Em breve estaremos de volta!
              </div>
              {!user && (
                <p className="text-red-500 text-sm mt-2 text-center">
                  Você precisa estar logado para finalizar a compra
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 