import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/users`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar usuários do backend');
    }

    const users = await response.json();
    return NextResponse.json(users);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    return NextResponse.json(
      { error: 'Erro interno ao buscar usuários' },
      { status: 500 }
    );
  }
} 