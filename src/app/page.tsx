import Link from "next/link";
import ProductCarousel from "@/components/ProductCarousel";
import BackgroundEffects from "@/components/BackgroundEffects";
import ThemeToggle from "@/components/ThemeToggle";
import StatsSection from "@/components/StatsSection";
import FAQSection from "@/components/FAQSection";
import CyberTerminal from "@/components/CyberTerminal";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black/90">
      <BackgroundEffects />
      <ThemeToggle />

      {/* Hero Section */}
      <header className="w-full flex flex-col items-center py-32 mt-16">
        <div className="cyber-grid"></div>
        <h1 className="text-5xl md:text-7xl cyber-glow font-bold mb-2 text-center select-none glitch" data-text="CYBERSHOP">
          <span className="text-[#39ff14]">CYBER</span>
          <span className="text-[#8f00ff]">SHOP</span>
        </h1>
        <p className="text-lg md:text-2xl text-[#00eaff] font-mono mt-2 mb-6 text-center max-w-2xl">
          Sua loja digital com integração total ao Discord. Produtos digitais, automação e estilo hacker.
        </p>
        <div className="flex gap-4">
          <Link href="/produtos" className="cyber-btn">Ver Produtos</Link>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="cyber-btn bg-[#5865F2] hover:bg-[#4752C4]">Discord</a>
        </div>
      </header>

      {/* Terminal Interativo */}
      <section className="w-full py-20 bg-gradient-to-b from-black/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl cyber-glow mb-12 text-center">Terminal Interativo</h2>
          <CyberTerminal />
        </div>
      </section>

      {/* Carrossel de Produtos */}
      <section id="produtos" className="w-full py-20 bg-gradient-to-b from-black/50 to-transparent relative">
        <div className="cyber-grid absolute inset-0 opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl cyber-glow mb-12 text-center glitch" data-text="Produtos em Destaque">
            Produtos em Destaque
          </h2>
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-[#39ff14]/20 shadow-[0_0_15px_rgba(57,255,20,0.3)]">
            <ProductCarousel />
          </div>
        </div>
      </section>

      {/* Seção de Estatísticas */}
      <StatsSection />

      {/* Seção de Recursos */}
      <section id="recursos" className="w-full py-20 bg-gradient-to-b from-black/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl cyber-glow mb-12 text-center">Recursos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card">
              <div className="cyber-card-icon">🤖</div>
              <h3 className="text-xl cyber-glow mb-2">Bot Discord</h3>
              <p className="text-[#ededed]">Integração total com Discord para automação e vendas.</p>
            </div>
            <div className="cyber-card">
              <div className="cyber-card-icon">🔒</div>
              <h3 className="text-xl cyber-glow mb-2">Segurança</h3>
              <p className="text-[#ededed]">Sistema seguro com criptografia e proteção contra fraudes.</p>
            </div>
            <div className="cyber-card">
              <div className="cyber-card-icon">⚡</div>
              <h3 className="text-xl cyber-glow mb-2">Performance</h3>
              <p className="text-[#ededed]">Sistema otimizado para máxima velocidade e confiabilidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section id="sobre" className="w-full py-20 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl cyber-glow mb-12 text-center">Sobre Nós</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="cyber-card">
              <h3 className="text-2xl cyber-glow mb-4">Nossa Missão</h3>
              <p className="text-[#ededed] mb-4">
                Fornecer as melhores ferramentas e recursos para a comunidade de desenvolvedores e entusiastas de tecnologia.
              </p>
              <p className="text-[#ededed]">
                Com foco em segurança, automação e inovação, buscamos constantemente melhorar e expandir nossos serviços.
              </p>
            </div>
            <div className="relative h-[300px] cyber-card">
              <div className="absolute inset-0 cyber-grid"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-2xl cyber-glow">Inovação Constante</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section id="depoimentos" className="w-full py-20 bg-gradient-to-b from-black/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl cyber-glow mb-12 text-center">Depoimentos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card">
              <div className="text-4xl mb-4">⭐</div>
              <p className="text-[#ededed] mb-4">
                "O melhor bot de vendas que já usei. Integração perfeita com Discord e suporte incrível!"
              </p>
              <p className="text-[#39ff14] font-bold">- João Silva</p>
            </div>
            <div className="cyber-card">
              <div className="text-4xl mb-4">⭐</div>
              <p className="text-[#ededed] mb-4">
                "Ferramentas essenciais para quem trabalha com automação. Recomendo muito!"
              </p>
              <p className="text-[#39ff14] font-bold">- Maria Santos</p>
            </div>
            <div className="cyber-card">
              <div className="text-4xl mb-4">⭐</div>
              <p className="text-[#ededed] mb-4">
                "Suporte técnico excepcional e produtos de alta qualidade. Vale cada centavo!"
              </p>
              <p className="text-[#39ff14] font-bold">- Pedro Costa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de FAQ */}
      <FAQSection />

      {/* Footer Melhorado */}
      <footer className="w-full py-12 mt-12 border-t border-[#222] bg-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl cyber-glow mb-4">CyberShop</h3>
              <p className="text-[#666]">Sua loja digital com estilo hacker.</p>
            </div>
            <div>
              <h4 className="text-lg cyber-glow mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><Link href="/produtos" className="text-[#666] hover:text-[#39ff14]">Produtos</Link></li>
                <li><Link href="#recursos" className="text-[#666] hover:text-[#39ff14]">Recursos</Link></li>
                <li><Link href="#sobre" className="text-[#666] hover:text-[#39ff14]">Sobre</Link></li>
                <li><Link href="#depoimentos" className="text-[#666] hover:text-[#39ff14]">Depoimentos</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg cyber-glow mb-4">Contato</h4>
              <ul className="space-y-2">
                <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-[#666] hover:text-[#39ff14]">Discord</a></li>
                <li><a href="mailto:contato@cybershop.com" className="text-[#666] hover:text-[#39ff14]">Email</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg cyber-glow mb-4">Newsletter</h4>
              <div className="flex gap-2">
                <input type="email" placeholder="Seu email" className="bg-[#181828] border border-[#39ff14] rounded px-4 py-2 text-[#39ff14] placeholder-[#39ff14]/50" />
                <button className="cyber-btn">OK</button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#222] text-center">
            <p className="text-[#444] text-sm">&copy; {new Date().getFullYear()} CyberShop. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
