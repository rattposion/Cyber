import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const auth = req.headers.get('authorization') || '';
  
  if (!auth) {
    return NextResponse.json(
      { error: 'Token não fornecido' },
      { status: 401 }
    );
  }

  try {
    console.log('Fazendo requisição para:', `${process.env.NEXT_PUBLIC_API_URL}/api/pedidos`);
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/pedidos`, {
      headers: {
        'Authorization': auth,
        'Content-Type': 'application/json',
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Erro na resposta do backend:', {
        status: response.status,
        statusText: response.statusText,
        errorData,
        headers: Object.fromEntries(response.headers.entries())
      });
      return NextResponse.json(
        { error: 'Erro ao buscar pedidos', details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Erro ao buscar pedidos:', {
      error,
      message: error instanceof Error ? error.message : 'Erro desconhecido',
      stack: error instanceof Error ? error.stack : undefined
    });
    return NextResponse.json(
      { error: 'Erro interno ao buscar pedidos', details: error instanceof Error ? error.message : 'Erro desconhecido' },
      { status: 500 }
    );
  }
} 