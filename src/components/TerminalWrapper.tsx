'use client';

import dynamic from 'next/dynamic';

const CyberTerminal = dynamic(() => import('./CyberTerminal'), {
  ssr: false,
  loading: () => (
    <div className="terminal-fake w-full max-w-4xl mx-auto">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <button className="terminal-button close"></button>
          <button className="terminal-button minimize"></button>
          <button className="terminal-button maximize"></button>
        </div>
        <div className="terminal-title">Carregando Terminal...</div>
      </div>
      <div className="terminal-content">
        <p className="typing normal">Iniciando terminal...</p>
      </div>
    </div>
  )
});

export default function TerminalWrapper() {
  return <CyberTerminal />;
} 