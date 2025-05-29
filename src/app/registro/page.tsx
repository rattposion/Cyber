'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import BackgroundEffects from '@/components/BackgroundEffects';
import CyberTerminal from '@/components/CyberTerminal';
import './styles.css';
import { TerminalOutput } from '@/types/terminal';

function generateId() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export default function Registro() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [terminalOutput, setTerminalOutput] = useState<TerminalOutput[]>([
    { id: generateId(), message: 'Bem-vindo ao CyberShop v1.0.0', timestamp: new Date().toISOString() },
    { id: generateId(), message: 'Sistema de registro iniciado', timestamp: new Date().toISOString() },
    { id: generateId(), message: 'Digite "help" para ver os comandos disponíveis', timestamp: new Date().toISOString() }
  ]);
  const router = useRouter();

  const addTerminalOutput = (message: string) => {
    setTerminalOutput(prev => [
      ...prev,
      { id: generateId(), message, timestamp: new Date().toISOString() }
    ]);
  };

  const handleTerminalCommand = (command: string) => {
    switch (command) {
      case 'register':
        if (!username || !email || !password || !confirmPassword) {
          addTerminalOutput('Erro: Preencha todos os campos primeiro');
          return;
        }
        handleRegister();
        break;
      case 'clear':
        setTerminalOutput([]);
        break;
      default:
        addTerminalOutput(`Comando não reconhecido: ${command}`);
        addTerminalOutput('Comandos disponíveis: register, clear, help');
    }
  };

  const handleRegister = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError('');
    setSuccess('');
    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }
    setIsLoading(true);
    try {
      addTerminalOutput('Iniciando processo de registro...');
      
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        addTerminalOutput(`Erro: ${data.error || 'Falha no registro'}`);
        setIsLoading(false);
        setError(data.error || 'Falha no registro');
        return;
      }

      addTerminalOutput('Conta criada com sucesso!');
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/login');
    } catch (err) {
      console.error('Erro no registro:', err);
      addTerminalOutput('Erro inesperado ao tentar registrar');
      setIsLoading(false);
      setError('Erro inesperado ao tentar registrar');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/90 relative overflow-hidden p-2">
      <BackgroundEffects />
      <div className="cyber-grid absolute inset-0 opacity-20 pointer-events-none z-0"></div>
      <div className="w-full max-w-md z-10 flex flex-col items-center justify-center">
        {/* Terminal interativo */}
        <div className="terminal-fake shadow-neon-green backdrop-blur-md border-2 border-[#39ff14] mb-8" style={{boxShadow: '0 0 40px #39ff14, 0 0 80px #8f00ff44'}}>
          <div className="terminal-header">
            <div className="terminal-buttons">
              <button className="terminal-button close" />
              <button className="terminal-button minimize" />
              <button className="terminal-button maximize" />
            </div>
            <span className="terminal-title cyber-glow text-lg md:text-xl glitch" data-text="Terminal Registro v1.0">Terminal Registro v1.0</span>
            <div />
          </div>
          <div className="p-4 flex flex-col gap-2">
            <div className="terminal-content bg-[#181828]/90 p-2 rounded font-mono text-base md:text-lg" style={{minHeight: '100px', maxHeight: '180px', overflowY: 'auto'}}>
              {terminalOutput.map((line) => (
                <div key={line.id} className="mb-1 typing normal">{line.message}</div>
              ))}
            </div>
            <form
              onSubmit={e => {
                e.preventDefault();
                handleTerminalCommand((e.target as any).elements.command.value);
                (e.target as any).elements.command.value = '';
              }}
              className="flex items-center mt-2"
            >
              <span className="text-green-400 mr-2 font-bold text-lg">{">"}</span>
              <input
                name="command"
                type="text"
                className="bg-transparent border-none outline-none text-green-400 flex-1 text-lg"
                placeholder="Digite um comando..."
                autoComplete="off"
              />
              <button type="submit" className="hidden">Enviar</button>
            </form>
          </div>
        </div>
        {/* Formulário de registro */}
        <div className="terminal-fake shadow-neon-green backdrop-blur-md border-2 border-[#39ff14]" style={{boxShadow: '0 0 40px #39ff14, 0 0 80px #8f00ff44'}}>
          <div className="terminal-header">
            <div className="terminal-buttons">
              <button className="terminal-button close" />
              <button className="terminal-button minimize" />
              <button className="terminal-button maximize" />
            </div>
            <span className="terminal-title cyber-glow text-lg md:text-xl glitch" data-text="CyberShop Registro v1.0">CyberShop Registro v1.0</span>
            <div />
          </div>
          <div className="p-6 flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl cyber-glow text-center mb-2 glitch" data-text="Criar Nova Conta">Criar Nova Conta</h2>
            <form onSubmit={handleRegister} className="space-y-4">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-[#181828]/90 border-2 border-[#39ff14] rounded-lg px-4 py-3 text-[#39ff14] placeholder-[#39ff14]/50 focus:outline-none focus:ring-2 focus:ring-[#39ff14] transition-all duration-200 shadow focus:shadow-neon-green text-lg"
                placeholder="Username"
                disabled={isLoading}
                autoFocus
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#181828]/90 border-2 border-[#39ff14] rounded-lg px-4 py-3 text-[#39ff14] placeholder-[#39ff14]/50 focus:outline-none focus:ring-2 focus:ring-[#39ff14] transition-all duration-200 shadow focus:shadow-neon-green text-lg"
                placeholder="Email"
                disabled={isLoading}
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#181828]/90 border-2 border-[#39ff14] rounded-lg px-4 py-3 text-[#39ff14] placeholder-[#39ff14]/50 focus:outline-none focus:ring-2 focus:ring-[#39ff14] transition-all duration-200 shadow focus:shadow-neon-green text-lg"
                placeholder="Senha"
                disabled={isLoading}
              />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-[#181828]/90 border-2 border-[#39ff14] rounded-lg px-4 py-3 text-[#39ff14] placeholder-[#39ff14]/50 focus:outline-none focus:ring-2 focus:ring-[#39ff14] transition-all duration-200 shadow focus:shadow-neon-green text-lg"
                placeholder="Confirmar Senha"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="cyber-btn w-full mt-2 text-lg py-3 font-bold tracking-widest shadow-neon-green hover:scale-105 hover:shadow-[0_0_32px_#39ff14,0_0_64px_#8f00ff] transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? "REGISTRANDO..." : "REGISTRAR"}
              </button>
            </form>
            {error && <div className="text-red-400 font-bold animate-pulse text-center mt-2">{error}</div>}
            {success && <div className="text-green-400 font-bold animate-pulse text-center mt-2">{success}</div>}
            <div className="mt-4 text-center">
              <p className="text-sm text-[#ededed]">
                Já tem uma conta?{' '}
                <Link href="/login" className="text-green-400 hover:text-green-300 font-bold underline underline-offset-2">
                  Faça login
                </Link>
              </p>
            </div>
          </div>
        </div>
        <footer className="mt-6 text-xs text-[#666] text-center w-full opacity-70 select-none">
          CyberShop &copy; {new Date().getFullYear()} — Suporte: <a href="mailto:suporte@cybershop.com" className="text-[#39ff14] hover:text-[#8f00ff] underline">suporte@cybershop.com</a>
        </footer>
      </div>
    </div>
  );
} 