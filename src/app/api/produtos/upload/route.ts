import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth-verify';

export async function POST(request: Request) {
  try {
    const token = request.headers.get('Authorization')?.split(' ')[1];
    if (!token) {
      return NextResponse.json({ error: 'Token não fornecido' }, { status: 401 });
    }

    const user = await verifyToken(token);
    if (!user || !user.isAdmin) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 403 });
    }

    const formData = await request.formData();
    const formDataObj = Object.fromEntries(formData);
    console.log('Dados recebidos no frontend:', formDataObj);

    // Validar campos obrigatórios
    const camposObrigatorios = ['nome', 'preco', 'tipoUso'];
    const camposFaltando = camposObrigatorios.filter(campo => !formDataObj[campo]);
    
    if (camposFaltando.length > 0) {
      console.error('Campos obrigatórios faltando:', camposFaltando);
      return NextResponse.json({ 
        error: 'Campos obrigatórios faltando',
        details: camposFaltando
      }, { status: 400 });
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/produtos/upload`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Erro na resposta do backend:', error);
      return NextResponse.json(error, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Erro ao fazer upload do produto:', error);
    return NextResponse.json(
      { error: 'Erro ao fazer upload do produto', details: error.message },
      { status: 500 }
    );
  }
} 