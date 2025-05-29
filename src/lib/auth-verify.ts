interface User {
  id: number;
  username: string;
  isAdmin: boolean;
}

export async function verifyToken(token: string): Promise<User | null> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      return null;
    }

    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Erro ao verificar token:', error);
    return null;
  }
} 