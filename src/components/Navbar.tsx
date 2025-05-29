"use client";
import Link from "next/link";
import { useAuth } from "@/components/AuthProvider";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Fecha o menu mobile ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileOpen(false);
      }
    }
    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b-4 border-transparent shadow-[0_2px_32px_#39ff14,0_4px_64px_#8f00ff66] animate-neon-border overflow-x-clip">
      {/* Scanline efeito */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{background: "linear-gradient(to bottom, transparent 50%, #39ff1422 50%)", backgroundSize: "100% 4px", opacity: 0.15}} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center text-2xl font-bold cyber-glow glitch select-none relative" data-text="CyberShop">
              <span className="text-[#39ff14] drop-shadow-[0_0_8px_#39ff14] animate-glitch">Cyber</span>
              <span className="text-[#8f00ff] drop-shadow-[0_0_8px_#8f00ff] animate-glitch2">Shop</span>
            </Link>
            <div className="hidden md:flex gap-4 ml-8">
              <Link href="/produtos" className="cyber-nav-link text-lg">Produtos</Link>
              <Link href="/carrinho" className="cyber-nav-link text-lg">Carrinho</Link>
              {isAuthenticated && (
                <Link href="/perfil" className="cyber-nav-link text-lg">Perfil</Link>
              )}
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative group">
                <button className="cyber-btn px-4 py-2 text-lg font-bold border-[#39ff14] hover:bg-[#39ff14] hover:text-black transition-all duration-300 shadow-neon-green flex items-center gap-2">
                  {user?.username}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute right-0 mt-2 w-40 bg-black/90 border border-[#39ff14] rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 z-30">
                  <Link href="/perfil" className="block px-4 py-2 hover:bg-[#181828]">Perfil</Link>
                  {user?.isAdmin && <Link href="/admin" className="block px-4 py-2 hover:bg-[#181828]">Admin</Link>}
                  <button onClick={logout} className="block w-full text-left px-4 py-2 hover:bg-[#181828]">Sair</button>
                </div>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="cyber-btn px-4 py-2 text-lg font-bold border-[#39ff14] hover:bg-[#39ff14] hover:text-black transition-all duration-300 shadow-neon-green"
                >
                  Login
                </Link>
                <Link
                  href="/registro"
                  className="cyber-btn px-4 py-2 text-lg font-bold bg-[#39ff14] text-black hover:bg-[#8f00ff] hover:text-white border-[#39ff14] transition-all duration-300 shadow-neon-green"
                >
                  Registrar
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 group relative z-20"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            <span className={`block w-7 h-1 rounded-full bg-[#39ff14] mb-1.5 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-7 h-1 rounded-full bg-[#39ff14] mb-1.5 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-7 h-1 rounded-full bg-[#39ff14] transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div ref={mobileMenuRef} className={`md:hidden fixed top-0 left-0 w-full h-full bg-black/95 z-40 transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Link href="/" className="cyber-nav-link text-2xl" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/produtos" className="cyber-nav-link text-2xl" onClick={() => setMobileOpen(false)}>Produtos</Link>
          <Link href="/carrinho" className="cyber-nav-link text-2xl" onClick={() => setMobileOpen(false)}>Carrinho</Link>
          {isAuthenticated && <Link href="/perfil" className="cyber-nav-link text-2xl" onClick={() => setMobileOpen(false)}>Perfil</Link>}
          {isAuthenticated ? (
            <>
              {user?.isAdmin && (
                <Link href="/admin" className="cyber-nav-link text-2xl" onClick={() => setMobileOpen(false)}>Admin</Link>
              )}
              <button className="cyber-btn px-6 py-2 text-xl mt-4" onClick={() => { logout(); setMobileOpen(false); }}>Sair</button>
            </>
          ) : (
            <>
              <Link href="/login" className="cyber-btn px-6 py-2 text-xl mt-4" onClick={() => setMobileOpen(false)}>Login</Link>
              <Link href="/registro" className="cyber-btn px-6 py-2 text-xl mt-4 bg-[#39ff14] text-black hover:bg-[#8f00ff] hover:text-white" onClick={() => setMobileOpen(false)}>Registrar</Link>
            </>
          )}
        </div>
      </div>
      <style jsx>{`
        .animate-neon-border {
          border-bottom: 4px solid transparent;
          background: linear-gradient(90deg, #39ff14, #8f00ff, #39ff14);
          background-size: 200% 4px;
          background-repeat: no-repeat;
          background-position: 0 100%;
          animation: neon-border-gradient 3s linear infinite;
        }
        @keyframes neon-border-gradient {
          0% { background-position: 0 100%; }
          100% { background-position: 200% 100%; }
        }
        .glitch {
          position: relative;
        }
        .glitch::before, .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0; top: 0; width: 100%; height: 100%;
          opacity: 0.7;
          pointer-events: none;
        }
        .glitch::before {
          color: #39ff14;
          z-index: 1;
          left: 2px; text-shadow: -2px 0 #8f00ff;
          animation: glitch-anim 2s infinite linear alternate-reverse;
        }
        .glitch::after {
          color: #8f00ff;
          z-index: 2;
          left: -2px; text-shadow: 2px 0 #39ff14;
          animation: glitch-anim2 2s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim {
          0% { clip-path: inset(0 0 80% 0); }
          20% { clip-path: inset(10% 0 60% 0); }
          40% { clip-path: inset(20% 0 40% 0); }
          60% { clip-path: inset(30% 0 20% 0); }
          80% { clip-path: inset(40% 0 0 0); }
          100% { clip-path: inset(0 0 80% 0); }
        }
        @keyframes glitch-anim2 {
          0% { clip-path: inset(80% 0 0 0); }
          20% { clip-path: inset(60% 0 10% 0); }
          40% { clip-path: inset(40% 0 20% 0); }
          60% { clip-path: inset(20% 0 30% 0); }
          80% { clip-path: inset(0 0 40% 0); }
          100% { clip-path: inset(80% 0 0 0); }
        }
        .animate-glitch {
          animation: glitch-anim 2s infinite linear alternate-reverse;
        }
        .animate-glitch2 {
          animation: glitch-anim2 2s infinite linear alternate-reverse;
        }
      `}</style>
    </nav>
  );
} 