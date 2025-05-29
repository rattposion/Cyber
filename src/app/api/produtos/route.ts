import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    console.log('Iniciando busca de produtos...');
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/produtos`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar produtos do backend');
    }

    const produtos = await response.json();
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