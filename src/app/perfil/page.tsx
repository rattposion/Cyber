"use client";
import { useAuth } from '@/components/AuthProvider';
import { useRouter } from 'next/navigation';
import CyberProfileTerminal from '@/components/CyberProfileTerminal';
import BackgroundEffects from '@/components/BackgroundEffects';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import '../login/styles.css';

interface Pedido {
  id: number;
  data: string;
  status: string;
  total: number;
  items: {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }[];
}

export default function Perfil() {
  const { user, logout, token, isAuthenticated } = useAuth();
  const router = useRouter();
  const [loginTime, setLoginTime] = useState('');
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPedidos = useCallback(async () => {
    if (!token) return;
    
    try {
      const res = await fetch("/api/pedidos", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) {
        if (res.status === 401) {
          router.push("/login");
          return;
        }
        throw new Error("Erro ao carregar pedidos");
      }
      const data = await res.json();
      setPedidos(data);
    } catch (err) {
      setError("Erro ao carregar pedidos");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [token, router]);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
      return;
    }

    let mounted = true;

    const loadPedidos = async () => {
      await fetchPedidos();
    };

    loadPedidos();

    return () => {
      mounted = false;
    };
  }, [isAuthenticated, router, fetchPedidos]);

  useEffect(() => {
    setLoginTime(new Date().toLocaleString('pt-BR'));
  }, []);

  const [terminalLines, setTerminalLines] = useState([
    'Iniciando sistema...',
    `Seja bem-vindo, ${user?.username || 'usuário'}!`
  ]);

  const addTerminalOutput = (text: string, type: 'normal' | 'success' | 'error' | 'warning' = 'normal') => {
    setTerminalLines(prev => [...prev, text]);
  };

  const handleTerminalCommand = async (command: string) => {
    switch (command) {
      case 'logout':
        addTerminalOutput('Saindo da conta...', 'warning');
        setTimeout(() => {
          logout();
          router.push('/');
        }, 1000);
        break;
      case 'info':
      case 'perfil':
        addTerminalOutput('--- INFORMAÇÕES DO PERFIL ---', 'warning');
        addTerminalOutput(`Usuário: ${user?.username || 'desconhecido'}`, 'normal');
        addTerminalOutput('Status: autenticado', 'success');
        addTerminalOutput(`Login em: ${loginTime}`, 'normal');
        addTerminalOutput('Bem-vindo ao seu painel cyberpunk!', 'success');
        break;
      case 'clear':
        setTerminalLines([
          'Iniciando sistema...',
          `Seja bem-vindo, ${user?.username || 'usuário'}!`
        ]);
        break;
      case 'edit':
        addTerminalOutput('Funcionalidade de edição em breve!', 'warning');
        break;
      case 'pedidos':
        await buscarPedidos();
        break;
      case 'pagamentos':
        await buscarPagamentos();
        break;
      case 'produtos':
        await buscarProdutos();
        break;
      default:
        addTerminalOutput(`Comando não reconhecido: ${command}`, 'error');
        addTerminalOutput('Comandos disponíveis: info, perfil, logout, edit, clear, pedidos, pagamentos, produtos, help', 'warning');
    }
  };

  // Funções para buscar dados reais do backend
  const buscarPedidos = async () => {
    setTerminalLines([
      'Últimas transações:',
      '----------------------------------------'
    ]);
    try {
      await fetchPedidos();
      
      if (!pedidos.length) {
        setTerminalLines([
          'Últimas transações:',
          '----------------------------------------',
          'Nenhuma transação encontrada.'
        ]);
        return;
      }

      setTerminalLines([
        'Últimas transações:',
        '----------------------------------------',
        ...pedidos.map((p: any) => {
          let hora = '-';
          if (p.data || p.createdAt) {
            const d = new Date(p.data || p.createdAt);
            hora = `[${d.toLocaleTimeString('pt-BR', { hour12: false })}]`;
          }
          const nickname = p.nickname || user?.username || 'Usuário';
          const produto = p.produto || p.product || p.nome || p.name || '-';
          const valor = p.total || p.valor || p.preco || p.price || '-';
          return `${hora} ${nickname} comprou ${produto} por R$ ${valor}`;
        })
      ]);
    } catch (err: any) {
      setTerminalLines([
        'Últimas transações:',
        '----------------------------------------',
        `Erro ao buscar pedidos! ${err.message || ''}`
      ]);
    }
  };
  const buscarPagamentos = async () => {
    setTerminalLines([
      'Últimas transações:',
      '----------------------------------------'
    ]);
    try {
      const res = await fetch('/api/pagamentos', {
        headers: { Authorization: token ? `Bearer ${token}` : '' }
      });
      if (!res.ok) {
        if (res.status === 401) {
          setTerminalLines(['Sessão expirada. Faça login novamente para visualizar seus pagamentos.']);
          return;
        }
        const errorText = await res.text();
        throw new Error(errorText || 'Erro desconhecido');
      }
      const data = await res.json();
      const pagamentos = Array.isArray(data) ? data : data.pagamentos || [];
      if (!pagamentos.length) {
        setTerminalLines([
          'Últimas transações:',
          '----------------------------------------',
          'Nenhuma transação encontrada.'
        ]);
        return;
      }
      setTerminalLines([
        'Últimas transações:',
        '----------------------------------------',
        ...pagamentos.map((p: any) => {
          let hora = '-';
          if (p.data || p.createdAt) {
            const d = new Date(p.data || p.createdAt);
            hora = `[${d.toLocaleTimeString('pt-BR', { hour12: false })}]`;
          }
          const nickname = p.nickname || user?.username || 'Usuário';
          const valor = p.valor || p.total || '-';
          return `${hora} ${nickname} realizou pagamento de R$ ${valor}`;
        })
      ]);
    } catch (err: any) {
      setTerminalLines([
        'Últimas transações:',
        '----------------------------------------',
        `Erro ao buscar pagamentos! ${err.message || ''}`
      ]);
    }
  };
  const buscarProdutos = async () => {
    setTerminalLines([
      'Últimas transações:',
      '----------------------------------------'
    ]);
    try {
      const res = await fetch('/api/produtos', {
        headers: { Authorization: token ? `Bearer ${token}` : '' }
      });
      if (!res.ok) {
        if (res.status === 401) {
          setTerminalLines(['Sessão expirada. Faça login novamente para visualizar seus produtos.']);
          return;
        }
        const errorText = await res.text();
        throw new Error(errorText || 'Erro desconhecido');
      }
      const data = await res.json();
      const produtos = Array.isArray(data) ? data : data.produtos || [];
      if (!produtos.length) {
        setTerminalLines([
          'Últimas transações:',
          '----------------------------------------',
          'Nenhuma transação encontrada.'
        ]);
        return;
      }
      setTerminalLines([
        'Últimas transações:',
        '----------------------------------------',
        ...produtos.map((p: any) => {
          let hora = '-';
          if (p.data || p.createdAt) {
            const d = new Date(p.data || p.createdAt);
            hora = `[${d.toLocaleTimeString('pt-BR', { hour12: false })}]`;
          }
          const nickname = p.nickname || user?.username || 'Usuário';
          const produto = p.nome || p.name || '-';
          const valor = p.preco || p.price || '-';
          return `${hora} ${nickname} adquiriu ${produto} por R$ ${valor}`;
        })
      ]);
    } catch (err: any) {
      setTerminalLines([
        'Últimas transações:',
        '----------------------------------------',
        `Erro ao buscar produtos! ${err.message || ''}`
      ]);
    }
  };

  // Avatar simples: primeira letra do username, cor neon
  const avatar = user?.username ? user.username[0].toUpperCase() : '?';

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/90 relative overflow-hidden">
      <BackgroundEffects />
      <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fade-in">
          {/* Terminal Interativo */}
          <div className="w-full flex flex-col justify-center animate-slide-left">
            <CyberProfileTerminal
              onCommand={handleTerminalCommand}
              outputs={terminalLines}
              className="h-full shadow-xl rounded-lg border border-[#39ff14]/30 bg-[#0a0a1a]/80 backdrop-blur-md"
            />
            <div className="mt-4 text-xs text-[#666] font-mono text-center">
              Comandos: <span className="text-[#39ff14]">info</span>, <span className="text-[#39ff14]">perfil</span>, <span className="text-[#39ff14]">logout</span>, <span className="text-[#39ff14]">edit</span>, <span className="text-[#39ff14]">clear</span>, <span className="text-[#39ff14]">pedidos</span>, <span className="text-[#39ff14]">pagamentos</span>, <span className="text-[#39ff14]">produtos</span>, <span className="text-[#39ff14]">help</span>
            </div>
          </div>
          {/* Cartão de Perfil Visual */}
          <div className="w-full flex flex-col items-center animate-slide-right">
            <div className="terminal-fake w-full glitch shadow-xl rounded-lg border border-[#8f00ff]/30 bg-[#181828]/80 backdrop-blur-md p-8 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full flex items-center justify-center bg-[#0a0a1a] border-4 border-[#39ff14] shadow-lg mb-4 text-4xl font-bold cyber-glow select-none">
                {avatar}
              </div>
              <h1 className="text-3xl cyber-glow font-bold mb-2 text-center tracking-widest">
                <span className="text-[#39ff14]">{user?.username}</span>
              </h1>
              <p className="text-[#00eaff] text-center font-mono mb-2">Status: <span className="text-[#39ff14]">Autenticado</span></p>
              <p className="text-[#666] text-center font-mono mb-2">Login em: <span className="text-[#39ff14]">{loginTime}</span></p>
              <div className="flex gap-4 mt-4 flex-wrap justify-center">
                <button
                  className="cyber-btn py-2 px-6 text-base font-mono tracking-widest shadow-md hover:shadow-neon-green transition-all duration-200"
                  onClick={() => handleTerminalCommand('logout')}
                >
                  Sair
                </button>
                <button
                  className="cyber-btn py-2 px-6 text-base font-mono tracking-widest shadow-md bg-[#8f00ff] text-white hover:bg-[#39ff14] hover:text-black transition-all duration-200"
                  onClick={() => handleTerminalCommand('edit')}
                >
                  Editar Perfil
                </button>
                <button
                  className="cyber-btn py-2 px-6 text-base font-mono tracking-widest shadow-md bg-[#39ff14] text-black hover:bg-[#8f00ff] hover:text-white transition-all duration-200"
                  onClick={() => handleTerminalCommand('pedidos')}
                >
                  Visualizar Pedidos
                </button>
                <button
                  className="cyber-btn py-2 px-6 text-base font-mono tracking-widest shadow-md bg-[#00eaff] text-black hover:bg-[#8f00ff] hover:text-white transition-all duration-200"
                  onClick={() => handleTerminalCommand('pagamentos')}
                >
                  Ver Pagamentos
                </button>
                <button
                  className="cyber-btn py-2 px-6 text-base font-mono tracking-widest shadow-md bg-[#8f00ff] text-white hover:bg-[#39ff14] hover:text-black transition-all duration-200"
                  onClick={() => handleTerminalCommand('produtos')}
                >
                  Meus Produtos
                </button>
              </div>
              <Link href="/" className="block mt-6 text-[#39ff14] hover:text-[#8f00ff] underline underline-offset-2 text-center">Voltar para Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 