import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const auth = req.headers.get('authorization') || '';
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/pedidos`, {
      headers: {
        'Authorization': auth,
        'Content-Type': 'application/json',
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      const errorData = await response.text();
      return NextResponse.json(
        { error: 'Erro ao buscar pedidos', details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro interno ao buscar pedidos' },
      { status: 500 }
    );
  }
} 