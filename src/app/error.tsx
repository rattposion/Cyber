'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Erro do lado do cliente:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center p-8 bg-[#181828] rounded-lg border border-[#39ff14]/40 shadow-[0_0_20px_#39ff14]">
        <h2 className="text-2xl font-bold text-[#39ff14] mb-4">Ops! Algo deu errado</h2>
        <p className="text-[#ededed] mb-6">
          {error.message || 'Ocorreu um erro inesperado. Por favor, tente novamente.'}
        </p>
        <button
          onClick={reset}
          className="bg-[#39ff14] text-black px-6 py-2 rounded-lg hover:bg-[#39ff14]/80 transition-colors"
        >
          Tentar Novamente
        </button>
      </div>
    </div>
  );
} 