import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth-verify';

export async function POST(request: Request) {
  try {
    const token = request.headers.get('Authorization')?.split(' ')[1];
    
    if (!token) {
      return NextResponse.json({ error: 'Token não fornecido' }, { status: 401 });
    }

    const user = await verifyToken(token);
    
    if (!user?.isAdmin) {
      return NextResponse.json({ error: 'Acesso negado' }, { status: 403 });
    }

    const body = await request.json();
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/produtos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Erro na resposta do backend:', response.status, error);
      return NextResponse.json(
        { error: 'Erro ao criar produto' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    console.log('Iniciando requisição GET /api/admin/produtos');
    const token = request.headers.get('Authorization')?.split(' ')[1];
    
    if (!token) {
      console.log('Token não fornecido');
      return NextResponse.json({ error: 'Token não fornecido' }, { status: 401 });
    }

    console.log('Verificando token...');
    const user = await verifyToken(token);
    
    if (!user?.isAdmin) {
      console.log('Usuário não é admin:', user);
      return NextResponse.json({ error: 'Acesso negado' }, { status: 403 });
    }

    console.log('Fazendo requisição para o backend...');
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/produtos`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    console.log('Status da resposta do backend:', response.status);
    if (!response.ok) {
      const error = await response.text();
      console.error('Erro na resposta do backend:', response.status, error);
      return NextResponse.json(
        { error: 'Erro ao buscar produtos' },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log('Dados recebidos do backend:', data);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
} 