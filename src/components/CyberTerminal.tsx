'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import { TerminalOutput } from '@/types/terminal';

interface Purchase {
  id: string;
  productName: string;
  nickname: string;
  price: number;
  timestamp: string;
}

interface CyberTerminalProps {
  onCommand?: (command: string) => void;
  initialOutputs?: TerminalOutput[];
  className?: string;
}

const generateUniqueId = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

const generateNickname = () => {
  const prefixes = ['Cyber', 'Hack', 'Ghost', 'Phantom', 'Shadow', 'Neo', 'Matrix', 'Byte', 'Code', 'Crypto'];
  const suffixes = ['Master', 'Hacker', 'Runner', 'Ninja', 'Warrior', 'Agent', 'Knight', 'Wizard', 'Mage', 'Lord'];
  const numbers = Math.floor(Math.random() * 1000);
  
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  
  return `${prefix}${suffix}${numbers}`;
};

const mockProducts = [
  { id: 1, name: "Bot Discord Premium", price: 99.90 },
  { id: 2, name: "Script de Automação", price: 49.90 },
  { id: 3, name: "Template Loja Digital", price: 79.90 }
];

export default function CyberTerminal({ onCommand, initialOutputs, className }: CyberTerminalProps) {
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [outputs, setOutputs] = useState<TerminalOutput[]>(initialOutputs || []);
  const [isLoading, setIsLoading] = useState(true);
  const [command, setCommand] = useState('');
  const purchasesRef = useRef<Purchase[]>([]);

  const generateMockPurchase = () => {
    const product = mockProducts[Math.floor(Math.random() * mockProducts.length)];
    const purchase: Purchase = {
      id: generateUniqueId(),
      productName: product.name,
      nickname: generateNickname(),
      price: product.price,
      timestamp: new Date().toLocaleTimeString()
    };
    return purchase;
  };

  useEffect(() => {
    // Gerar algumas compras iniciais
    const initialPurchases = Array.from({ length: 5 }, () => generateMockPurchase());
    purchasesRef.current = initialPurchases;
    setPurchases(initialPurchases);
    setIsLoading(false);

    // Atualizar a cada minuto
    const interval = setInterval(() => {
      const newPurchase = generateMockPurchase();
      purchasesRef.current = [newPurchase, ...purchasesRef.current].slice(0, 10);
      setPurchases([...purchasesRef.current]);
    }, 60000); // 60000ms = 1 minuto

    return () => clearInterval(interval);
  }, []);

  const handleCommandSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!command.trim()) return;
    setOutputs((prev) => [
      ...prev,
      {
        id: generateUniqueId(),
        message: command,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
    if (onCommand) onCommand(command);
    setCommand('');
  };

  if (isLoading) {
    return (
      <div className={`terminal-fake w-full max-w-4xl mx-auto ${className || ''}`}>
        <div className="terminal-header">
          <div className="terminal-buttons">
            <button className="terminal-button close"></button>
            <button className="terminal-button minimize"></button>
            <button className="terminal-button maximize"></button>
          </div>
          <div className="terminal-title">CyberShop Terminal v1.0.0</div>
        </div>
        <div className="terminal-content">
          <p className="typing">Iniciando sistema...</p>
          <p className="typing">Carregando histórico de compras...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`terminal-fake w-full max-w-4xl mx-auto ${className || ''}`}>
      <div className="terminal-header">
        <div className="terminal-buttons">
          <button className="terminal-button close"></button>
          <button className="terminal-button minimize"></button>
          <button className="terminal-button maximize"></button>
        </div>
        <div className="terminal-title">CyberShop Terminal v1.0.0</div>
      </div>
      <div className="terminal-content">
        <div className="mb-4">
          <p className="text-[#39ff14] font-mono">Últimas transações:</p>
          <p className="text-[#00eaff] font-mono">----------------------------------------</p>
        </div>
        {purchasesRef.current.map((purchase) => (
          <div key={purchase.id} className="mb-2">
            <p className="text-[#39ff14] font-mono">
              <span className="text-[#00eaff]">[{purchase.timestamp}]</span> {purchase.nickname} comprou {purchase.productName} por R$ {purchase.price.toFixed(2)}
            </p>
          </div>
        ))}
        <div className="mt-4">
          <p className="text-[#00eaff] font-mono">----------------------------------------</p>
          <p className="text-[#39ff14] font-mono">Sistema ativo - Aguardando novas transações...</p>
        </div>
        {/* Terminal de comandos */}
        <div className="mt-6">
          <div className="mb-2">
            {outputs.map((output) => (
              <div key={output.id} className="text-[#39ff14] font-mono">
                <span className="text-[#00eaff]">[{output.timestamp}]</span> {output.message}
              </div>
            ))}
          </div>
          <form onSubmit={handleCommandSubmit} className="flex gap-2">
            <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              className="flex-1 bg-black/80 border border-[#39ff14] text-[#39ff14] font-mono px-2 py-1 rounded"
              placeholder="Digite um comando..."
            />
            <button type="submit" className="bg-[#39ff14] text-black px-4 py-1 rounded">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}