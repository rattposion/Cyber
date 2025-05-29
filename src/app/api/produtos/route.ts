import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    console.log('Iniciando busca de produtos...');
    
    const produtos = await prisma.produto.findMany({
      include: {
        categoria: true,
      },
    });

    console.log('Produtos encontrados:', produtos.length);
    return NextResponse.json(produtos);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return NextResponse.json(
      { error: 'Erro interno ao buscar produtos' },
      { status: 500 }
    );
  }
} 