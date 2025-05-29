'use client';

import { useState, useEffect } from 'react';

interface Stat {
  value: number;
  label: string;
  icon: string;
}

const stats: Stat[] = [
  { value: 1000, label: 'Usuários Ativos', icon: '👥' },
  { value: 5000, label: 'Vendas Realizadas', icon: '💰' },
  { value: 99, label: 'Satisfação', icon: '⭐' },
  { value: 24, label: 'Suporte', icon: '🛟' },
];

export default function StatsSection() {
  const [animatedStats, setAnimatedStats] = useState<Stat[]>(
    stats.map(stat => ({ ...stat, value: 0 }))
  );

  useEffect(() => {
    const duration = 2000; // 2 segundos
    const steps = 60; // 60 frames por segundo
    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep > steps) {
        clearInterval(interval);
        return;
      }

      setAnimatedStats(stats.map(stat => ({
        ...stat,
        value: Math.floor((stat.value * currentStep) / steps)
      })));
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-20 bg-gradient-to-b from-black/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl cyber-glow mb-12 text-center">Estatísticas</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {animatedStats.map((stat, index) => (
            <div
              key={index}
              className="cyber-card group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-4 group-hover:animate-bounce">{stat.icon}</div>
              <div className="text-4xl font-bold cyber-glow mb-2">
                {stat.value.toLocaleString()}
                {stat.label === 'Satisfação' && '%'}
                {stat.label === 'Suporte' && '/7'}
              </div>
              <p className="text-[#ededed]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 