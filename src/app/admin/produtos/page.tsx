'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from "@/components/AuthProvider";
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  status: string;
  imagem: string;
}

export default function AdminProdutos() {
  const router = useRouter();
  const { user, token } = useAuth();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    if (!token) return;

    try {
      setLoading(true);
      const response = await fetch('/api/admin/produtos', {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (!response.ok) {
        throw new Error('Erro ao carregar produtos');
      }

      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar produtos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.isAdmin) {
      fetchProducts();
    }
  }, [user, fetchProducts]);

  const handleToggleStatus = async (productId: string, currentStatus: string) => {
    try {
      const token = localStorage.getItem('token');
      
      if (!token) {
        throw new Error('Token não encontrado');
      }

      const response = await fetch(`/api/admin/produtos/${productId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: currentStatus === 'Ativo' ? 'Inativo' : 'Ativo' })
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar status do produto');
      }

      // Atualiza a lista de produtos
      setProducts(products.map(product => 
        product.id === productId 
          ? { ...product, status: currentStatus === 'Ativo' ? 'Inativo' : 'Ativo' }
          : product
      ));
    } catch (err) {
      console.error('Erro ao atualizar status:', err);
      setError(err instanceof Error ? err.message : 'Erro ao atualizar status');
    }
  };

  const handleDeleteProduct = async (productId: string) => {
    if (!confirm('Tem certeza que deseja excluir este produto?')) {
      return;
    }

    try {
      const token = localStorage.getItem('token');
      
      if (!token) {
        throw new Error('Token não encontrado');
      }

      const response = await fetch(`/api/admin/produtos/${productId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Erro ao excluir produto');
      }

      // Atualiza a lista de produtos
      setProducts(products.filter(product => product.id !== productId));
    } catch (err) {
      console.error('Erro ao excluir produto:', err);
      setError(err instanceof Error ? err.message : 'Erro ao excluir produto');
    }
  };

  if (!user) return <p>Faça login como admin para acessar.</p>;
  if (!user.isAdmin) return <p>Acesso negado. Apenas administradores podem acessar esta página.</p>;

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-cyber-primary">Gerenciar Produtos</h1>
        <Link
          href="/admin/produtos/novo"
          className="px-6 py-2 bg-cyber-primary text-black rounded-lg hover:bg-cyber-primary/90 transition-colors flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Novo Produto
        </Link>
      </div>

      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-900">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Produto
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Preço
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {product.imagem && (
                      <Image
                        src={product.imagem}
                        alt={product.nome}
                        className="h-10 w-10 rounded-full object-cover mr-3"
                        width={40}
                        height={40}
                      />
                    )}
                    <div>
                      <div className="text-sm font-medium text-white">{product.nome}</div>
                      <div className="text-sm text-gray-400 line-clamp-1">{product.descricao}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                  R$ {product.preco.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleToggleStatus(product.id, product.status)}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      product.status === 'Ativo'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {product.status === 'Ativo' ? 'Ativo' : 'Inativo'}
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end gap-4">
                    <Link
                      href={`/admin/produtos/${product.id}`}
                      className="text-cyber-primary hover:text-cyber-primary/80"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="text-red-500 hover:text-red-400"
                    >
                      Excluir
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 