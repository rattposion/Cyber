import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/testimonials`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar depoimentos do backend');
    }

    const testimonials = await response.json();
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error('Erro ao buscar depoimentos:', error);
    return NextResponse.json(
      { error: 'Erro interno ao buscar depoimentos' },
      { status: 500 }
    );
  }
} 