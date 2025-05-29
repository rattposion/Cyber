'use client';

import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'Como funciona a integração com o Discord?',
    answer: 'Nosso bot se integra perfeitamente ao seu servidor Discord, permitindo gerenciar vendas, autenticar usuários e automatizar processos de forma segura e eficiente.'
  },
  {
    question: 'Quais métodos de pagamento são aceitos?',
    answer: 'Aceitamos diversos métodos de pagamento, incluindo cartões de crédito, PIX, boleto bancário e criptomoedas. Todos os pagamentos são processados de forma segura.'
  },
  {
    question: 'Como funciona o suporte técnico?',
    answer: 'Oferecemos suporte técnico 24/7 através do Discord, email e chat em tempo real. Nossa equipe está sempre pronta para ajudar com qualquer dúvida ou problema.'
  },
  {
    question: 'Os produtos são digitais ou físicos?',
    answer: 'Trabalhamos exclusivamente com produtos digitais, como licenças de software, cursos, e-books e outros recursos digitais que podem ser entregues instantaneamente.'
  },
  {
    question: 'Como garantir a segurança das transações?',
    answer: 'Utilizamos criptografia de ponta a ponta, autenticação em duas etapas e sistemas anti-fraude para garantir a segurança de todas as transações em nossa plataforma.'
  },
  {
    question: 'Posso personalizar o bot para minhas necessidades?',
    answer: 'Sim! Oferecemos opções de personalização para adaptar o bot às suas necessidades específicas, incluindo comandos personalizados e integrações com outros serviços.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-black/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl cyber-glow mb-12 text-center">Perguntas Frequentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="cyber-card cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl cyber-glow">{faq.question}</h3>
                <span className="text-2xl transition-transform duration-300">
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>
              <div
                className={`mt-4 text-[#ededed] overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 