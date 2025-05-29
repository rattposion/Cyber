import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/estatisticas`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar estatísticas do backend');
    }

    const estatisticas = await response.json();
    return NextResponse.json(estatisticas);
  } catch (error) {
    console.error('Erro ao buscar estatísticas:', error);
    return NextResponse.json(
      { error: 'Erro interno ao buscar estatísticas' },
      { status: 500 }
    );
  }
} 