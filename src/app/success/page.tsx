'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import BackgroundEffects from '@/components/BackgroundEffects';

function SuccessContent() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    if (!sessionId) {
      setError('Sessão de pagamento não encontrada');
      setLoading(false);
      return;
    }

    // Aqui você pode adicionar uma chamada à API para verificar o status do pagamento
    // e atualizar o banco de dados com as informações da compra

    setLoading(false);
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-cyber-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="text-red-500 text-xl">{error}</div>
        <Link href="/carrinho" className="cyber-btn">
          Voltar ao Carrinho
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full relative bg-black overflow-x-hidden">
      <BackgroundEffects />
      <div className="cyber-grid absolute inset-0 opacity-20 pointer-events-none z-0"></div>
      <div className="container mx-auto px-4 py-8 relative z-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-[#39ff14] text-6xl mb-4">✓</div>
            <h1 className="text-4xl font-bold text-[#39ff14] mb-4 glitch font-mono">
              Pagamento Concluído!
            </h1>
            <p className="text-[#ededed] mb-6 font-mono">
              Obrigado por sua compra! Você receberá um email com os detalhes da sua licença.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="/produtos" className="cyber-btn">
              Continuar Comprando
            </Link>
            <Link href="/" className="cyber-btn bg-[#00eaff] text-black hover:bg-[#39ff14] hover:text-black">
              Voltar ao Início
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-cyber-primary"></div></div>}>
      <SuccessContent />
    </Suspense>
  );
} 