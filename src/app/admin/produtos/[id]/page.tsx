"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";
import Image from 'next/image';

interface Product {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  preco1d: number;
  preco7d: number;
  preco30d: number;
  precoLifetime: number;
  tipoUso: '1d' | '7d' | '30d' | 'lifetime';
  status: 'ativo' | 'inativo';
  imagem: string;
  categoriaId: string;
}

interface Categoria {
  id: string;
  nome: string;
}

export default function EditProductPage() {
  const { user, token } = useAuth();
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Product>>({});

  const fetchProduct = async () => {
    if (!token || !id) return;

    try {
      setLoading(true);
      const response = await fetch(`/api/admin/produtos/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (!response.ok) {
        throw new Error('Erro ao carregar produto');
      }

      const data = await response.json();
      setProduct(data);
      setFormData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar produto');
    } finally {
      setLoading(false);
    }
  };

  const fetchCategorias = async () => {
    if (!token) return;

    try {
      const response = await fetch('/api/admin/categorias', {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (!response.ok) {
        throw new Error('Erro ao carregar categorias');
      }

      const data = await response.json();
      setCategorias(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar categorias');
    }
  };

  useEffect(() => {
    if (user?.isAdmin && id) {
      fetchProduct();
      fetchCategorias();
    }
  }, [user, id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token || !id) return;

    try {
      const response = await fetch(`/api/admin/produtos/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar produto');
      }

      router.push('/admin/produtos');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao atualizar produto');
    }
  };

  if (!user) return <p>Faça login como admin para acessar.</p>;
  if (!user.isAdmin) return <p>Acesso negado. Apenas administradores podem acessar esta página.</p>;

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;
  if (!product) return <p>Produto não encontrado.</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Editar Produto</h1>

      <form onSubmit={handleSubmit} className="max-w-2xl">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Nome</label>
          <input
            type="text"
            value={formData.nome || ''}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg bg-gray-800 border-gray-700"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Descrição</label>
          <textarea
            value={formData.descricao || ''}
            onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
            className="w-full px-3 py-2 border rounded-lg bg-gray-800 border-gray-700"
            rows={4}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-2">Preço Base</label>
            <input
              type="number"
              value={formData.preco || 0}
              onChange={(e) => setFormData({ ...formData, preco: Number(e.target.value) })}
              className="w-full px-3 py-2 border rounded-lg bg-gray-800 border-gray-700"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Categoria</label>
            <select
              value={formData.categoriaId || ''}
              onChange={(e) => setFormData({ ...formData, categoriaId: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg bg-gray-800 border-gray-700"
              required
            >
              <option value="">Selecione uma categoria</option>
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.nome}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-2">Preço 1 Dia</label>
            <input
              type="number"
              value={formData.preco1d || 0}
              onChange={(e) => setFormData({ ...formData, preco1d: Number(e.target.value) })}
              className="w-full px-3 py-2 border rounded-lg bg-gray-800 border-gray-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Preço 7 Dias</label>
            <input
              type="number"
              value={formData.preco7d || 0}
              onChange={(e) => setFormData({ ...formData, preco7d: Number(e.target.value) })}
              className="w-full px-3 py-2 border rounded-lg bg-gray-800 border-gray-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Preço 30 Dias</label>
            <input
              type="number"
              value={formData.preco30d || 0}
              onChange={(e) => setFormData({ ...formData, preco30d: Number(e.target.value) })}
              className="w-full px-3 py-2 border rounded-lg bg-gray-800 border-gray-700"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Preço Lifetime</label>
            <input
              type="number"
              value={formData.precoLifetime || 0}
              onChange={(e) => setFormData({ ...formData, precoLifetime: Number(e.target.value) })}
              className="w-full px-3 py-2 border rounded-lg bg-gray-800 border-gray-700"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Tipo de Uso</label>
          <select
            value={formData.tipoUso || 'lifetime'}
            onChange={(e) => setFormData({ ...formData, tipoUso: e.target.value as Product['tipoUso'] })}
            className="w-full px-3 py-2 border rounded-lg bg-gray-800 border-gray-700"
            required
          >
            <option value="1d">1 Dia</option>
            <option value="7d">7 Dias</option>
            <option value="30d">30 Dias</option>
            <option value="lifetime">Lifetime</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Status</label>
          <select
            value={formData.status || 'ativo'}
            onChange={(e) => setFormData({ ...formData, status: e.target.value as Product['status'] })}
            className="w-full px-3 py-2 border rounded-lg bg-gray-800 border-gray-700"
            required
          >
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
          </select>
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => router.push('/admin/produtos')}
            className="px-4 py-2 border rounded-lg hover:bg-gray-700"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
} 