"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/components/AuthProvider";
import ApiService from "@/lib/api";
import "./styles.css";

const BackgroundEffects = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black/90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
    </div>
  );
};

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const router = useRouter();
  const { login, isAuthenticated, user } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.push(user?.isAdmin ? "/admin" : "/");
    }
  }, [isAuthenticated, user?.isAdmin, router]);

  const handleLogin = async () => {
    if (!username || !password) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    setIsLoading(true);
    setError("");
    setOutput(prev => [...prev, "> Tentando conectar ao servidor..."]);

    try {
      const response = await ApiService.login(username, password);

      if (!response.success) {
        setError(response.error || "Erro ao fazer login");
        setOutput(prev => [...prev, `> Erro: ${response.error}`]);
        return;
      }

      if (response.data) {
        login(response.data);
        setOutput(prev => [
          ...prev,
          "> Login realizado com sucesso!",
          "> Redirecionando...",
        ]);
        
        // Pequeno delay para mostrar as mensagens
        setTimeout(() => {
          router.push(response.data.isAdmin ? "/admin" : "/");
        }, 1000);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Erro ao conectar com o servidor";
      setError(errorMessage);
      setOutput(prev => [...prev, `> Erro: ${errorMessage}`]);
      console.error("Erro no login:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const cmd = command.toLowerCase().trim();
      setOutput(prev => [...prev, `> ${command}`]);

      if (cmd === "login") {
        handleLogin();
      } else if (cmd === "clear") {
        setOutput([]);
      } else if (cmd === "help") {
        setOutput(prev => [
          ...prev,
          "Comandos disponíveis:",
          "login - Fazer login",
          "clear - Limpar terminal",
          "help - Mostrar ajuda",
        ]);
      } else {
        setOutput(prev => [...prev, "Comando não reconhecido. Digite 'help' para ver os comandos disponíveis."]);
      }

      setCommand("");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black/90">
        <div className="text-[#39ff14] font-mono">
          <div className="typing">Inicializando sistema...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/90 relative overflow-hidden p-2">
      <BackgroundEffects />
      <div className="cyber-grid absolute inset-0 opacity-20 pointer-events-none z-0"></div>
      <div className="w-full max-w-md z-10 flex flex-col items-center justify-center">
        <div className="terminal-fake shadow-neon-green backdrop-blur-md border-2 border-[#39ff14]" style={{boxShadow: '0 0 40px #39ff14, 0 0 80px #8f00ff44'}}>
          <div className="terminal-header">
            <div className="terminal-buttons">
              <button className="terminal-button close" />
              <button className="terminal-button minimize" />
              <button className="terminal-button maximize" />
            </div>
            <span className="terminal-title cyber-glow text-lg md:text-xl glitch" data-text="Cyber Terminal v1.0">Cyber Terminal v1.0</span>
            <div />
          </div>
          
          <div className="p-6">
            <p className="text-sm mb-2 text-[#ededed] text-center">Digite 'help' para ver os comandos disponíveis</p>
            <div className="terminal-content bg-[#181828]/90 p-4 rounded mb-4 h-56 md:h-48 overflow-y-auto font-mono text-base md:text-lg" style={{minHeight: '180px'}}>
              {output.map((line, i) => (
                <div key={i} className={`mb-1 typing normal ${line.includes('Erro') ? 'error' : line.includes('sucesso') ? 'success' : ''}`}>{line}</div>
              ))}
              {error && <div className="typing error font-bold text-red-400 animate-pulse">{error}</div>}
            </div>
            <div className="flex items-center mb-4">
              <span className="text-green-400 mr-2 font-bold text-lg">{">"}</span>
              <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyDown={handleCommand}
                className="bg-transparent border-none outline-none text-green-400 flex-1 text-lg"
                placeholder="Digite um comando..."
                disabled={isLoading}
              />
            </div>
            
            <form
              onSubmit={e => {
                e.preventDefault();
                handleLogin();
              }}
              className="space-y-4"
            >
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-[#181828]/90 border-2 border-[#39ff14] rounded-lg px-4 py-3 text-[#39ff14] placeholder-[#39ff14]/50 focus:outline-none focus:ring-2 focus:ring-[#39ff14] transition-all duration-200 shadow focus:shadow-neon-green text-lg"
                placeholder="Username ou E-mail"
                disabled={isLoading}
                autoFocus
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#181828]/90 border-2 border-[#39ff14] rounded-lg px-4 py-3 text-[#39ff14] placeholder-[#39ff14]/50 focus:outline-none focus:ring-2 focus:ring-[#39ff14] transition-all duration-200 shadow focus:shadow-neon-green text-lg"
                placeholder="Password"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="cyber-btn w-full mt-2 text-lg py-3 font-bold tracking-widest shadow-neon-green hover:scale-105 hover:shadow-[0_0_32px_#39ff14,0_0_64px_#8f00ff] transition-all duration-300"
                disabled={isLoading}
              >
                {isLoading ? "ENTRANDO..." : "ENTRAR"}
              </button>
            </form>
            
            <p className="text-sm text-[#ededed] mt-4">
              Não tem uma conta?{" "}
              <Link href="/registro" className="text-green-400 hover:text-green-300 font-bold underline underline-offset-2">
                Registre-se
              </Link>
            </p>
          </div>
        </div>
        <footer className="mt-6 text-xs text-[#666] text-center w-full opacity-70 select-none">
          CyberShop &copy; {new Date().getFullYear()} — Suporte: <a href="mailto:suporte@cybershop.com" className="text-[#39ff14] hover:text-[#8f00ff] underline">suporte@cybershop.com</a>
        </footer>
      </div>
    </div>
  );
} 