import React, { useState } from 'react';

interface CyberProfileTerminalProps {
  outputs: string[];
  onCommand?: (command: string) => void;
  className?: string;
}

export default function CyberProfileTerminal({ outputs, onCommand, className = '' }: CyberProfileTerminalProps) {
  const [input, setInput] = useState('');

  const handleInput = (e: React.FormEvent) => {
    e.preventDefault();
    if (onCommand && input.trim()) {
      onCommand(input.trim());
      setInput('');
    }
  };

  return (
    <div className={`terminal-fake w-full max-w-4xl mx-auto ${className}`}>
      <div className="terminal-header">
        <div className="terminal-buttons">
          <button className="terminal-button close"></button>
          <button className="terminal-button minimize"></button>
          <button className="terminal-button maximize"></button>
        </div>
        <div className="terminal-title">CyberShop Terminal v1.0.0</div>
      </div>
      <div className="terminal-content p-4 h-80 overflow-y-auto font-mono text-[#39ff14] text-sm bg-black/95">
        {outputs.map((line, idx) => (
          <div key={idx} className="whitespace-pre-line">{line}</div>
        ))}
      </div>
      {onCommand && (
        <form onSubmit={handleInput} className="terminal-input mt-2 flex gap-2">
          <span className="text-[#39ff14] font-mono">&gt;</span>
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            className="bg-transparent border-none outline-none text-[#39ff14] font-mono flex-1"
            autoFocus
            autoComplete="off"
            placeholder="Digite um comando..."
          />
        </form>
      )}
    </div>
  );
} 