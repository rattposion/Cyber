"use client";
import Link from "next/link";
import { useAuth } from '@/components/AuthProvider';
import { useRouter } from 'next/navigation';

export default function CyberNavbar() {
  const { user, logout } = useAuth();
  const router = useRouter();
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 border-b border-[#39ff14] shadow-lg flex items-center justify-between px-8 py-3 backdrop-blur-md">
      <Link href="/" className="text-2xl md:text-3xl cyber-glow font-bold select-none">
        <span className="text-[#39ff14]">CYBER</span>
        <span className="text-[#8f00ff]">SHOP</span>
      </Link>
      <nav className="hidden md:flex gap-8 items-center">
        <Link href="/" className="cyber-nav-link">Home</Link>
        <Link href="/produtos" className="cyber-nav-link">Produtos</Link>
        <Link href="/carrinho" className="cyber-nav-link">Carrinho</Link>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="cyber-nav-link text-[#00eaff]">Discord</a>
        <div className="flex gap-2 items-center ml-4">
          {!user ? (
            <>
              <Link href="/login" className="cyber-btn px-3 py-1 text-sm min-w-[70px] h-8">Login</Link>
              <Link href="/registro" className="cyber-btn px-3 py-1 text-sm min-w-[90px] h-8 bg-[#39ff14] text-black hover:bg-[#8f00ff] hover:text-white">Registrar</Link>
            </>
          ) : (
            <>
              <button
                className="cyber-btn px-3 py-1 text-sm min-w-[90px] h-8 bg-[#8f00ff] text-white hover:bg-[#39ff14] hover:text-black"
                onClick={() => router.push('/perfil')}
              >
                Perfil
              </button>
              <button
                className="cyber-btn px-3 py-1 text-sm min-w-[70px] h-8 bg-[#222] text-[#39ff14] hover:bg-[#39ff14] hover:text-black"
                onClick={logout}
              >
                Sair
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
} 