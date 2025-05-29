import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { productId, productName, price } = body;

    // Aqui você pode adicionar a lógica de integração com o bot do Discord
    // Por exemplo, gerar um link de convite para o servidor do Discord
    const discordUrl = `https://discord.com/api/oauth2/authorize?client_id=SEU_CLIENT_ID&permissions=8&scope=bot`;

    // Simular um delay para processamento
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({
      success: true,
      message: 'Compra processada com sucesso',
      discordUrl,
      product: {
        id: productId,
        name: productName,
        price
      }
    });
  } catch (error) {
    console.error('Erro ao processar compra:', error);
    return NextResponse.json(
      { error: 'Erro ao processar compra' },
      { status: 500 }
    );
  }
} 