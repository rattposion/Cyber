import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 6,
    });

    return NextResponse.json(testimonials);
  } catch (error) {
    console.error('Erro na API de depoimentos:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar depoimentos' },
      { status: 500 }
    );
  }
} 