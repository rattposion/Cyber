'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="p-2 rounded-lg hover:bg-black/20 transition-colors"
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
      >
        <div className="w-6 h-5 relative">
          <span
            className={`absolute w-6 h-0.5 bg-[#39ff14] transition-all duration-300 ${
              isOpen ? 'rotate-45 top-2' : 'top-0'
            }`}
          />
          <span
            className={`absolute w-6 h-0.5 bg-[#39ff14] top-2 transition-all duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute w-6 h-0.5 bg-[#39ff14] transition-all duration-300 ${
              isOpen ? '-rotate-45 top-2' : 'top-4'
            }`}
          />
        </div>
      </button>

      <div
        className={`fixed inset-0 bg-black/95 z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="flex flex-col gap-6">
            <Link href="/" className="cyber-nav-link text-2xl" onClick={toggleMenu}>Home</Link>
            <Link href="/produtos" className="cyber-nav-link text-2xl" onClick={toggleMenu}>Produtos</Link>
            <Link href="/carrinho" className="cyber-nav-link text-2xl" onClick={toggleMenu}>Carrinho</Link>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="cyber-nav-link text-2xl text-[#00eaff]" onClick={toggleMenu}>Discord</a>
          </div>
          <div className="flex flex-col gap-3 mt-8 w-full px-4">
            <Link href="/login" className="cyber-btn px-4 py-2 text-lg w-full" onClick={toggleMenu}>Login</Link>
            <Link href="/registro" className="cyber-btn px-4 py-2 text-lg w-full bg-[#39ff14] text-black hover:bg-[#8f00ff] hover:text-white" onClick={toggleMenu}>Registrar</Link>
          </div>
          <Link
            href="#recursos"
            className="text-2xl cyber-glow hover:text-[#39ff14] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Recursos
          </Link>
          <Link
            href="#sobre"
            className="text-2xl cyber-glow hover:text-[#39ff14] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Sobre
          </Link>
          <Link
            href="#depoimentos"
            className="text-2xl cyber-glow hover:text-[#39ff14] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Depoimentos
          </Link>
          <button className="cyber-btn mt-4">Entrar</button>
        </div>

        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-black/20 transition-colors"
          aria-label="Fechar menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#39ff14"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
} 