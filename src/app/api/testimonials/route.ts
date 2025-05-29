// Removendo a importação do Prisma
// import { prisma } from '@/lib/prisma';

// Importando a classe ApiService para fazer a chamada HTTP
import { ApiService } from '@/lib/api';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Chamando o endpoint do backend para buscar os testimonials
    const response = await ApiService.getTestimonials();
    if (!response.success) {
      return new Response(JSON.stringify({ error: response.error }), { status: 500 });
    }
    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Erro ao buscar depoimentos' }), { status: 500 });
  }
} 