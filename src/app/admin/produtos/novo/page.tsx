'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from "@/components/AuthProvider";

export default function NovoProduto() {
  const router = useRouter();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    preco: '',
    categoria: '',
    imagem: '',
    ativo: true
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/admin/produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          ...formData,
          preco: parseFloat(formData.preco)
        })
      });

      if (!response.ok) {
        throw new Error('Erro ao criar produto');
      }

      router.push('/admin/produtos');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao criar produto');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  if (!user?.isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-xl">Acesso negado</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-cyber-primary">Novo Produto</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-300 mb-2">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-800 border border-cyber-primary text-white"
            />
          </div>

          <div>
            <label htmlFor="descricao" className="block text-sm font-medium text-gray-300 mb-2">
              Descrição
            </label>
            <textarea
              id="descricao"
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
              required
              rows={4}
              className="w-full p-2 rounded bg-gray-800 border border-cyber-primary text-white"
            />
          </div>

          <div>
            <label htmlFor="preco" className="block text-sm font-medium text-gray-300 mb-2">
              Preço
            </label>
            <input
              type="number"
              id="preco"
              name="preco"
              value={formData.preco}
              onChange={handleChange}
              required
              step="0.01"
              min="0"
              className="w-full p-2 rounded bg-gray-800 border border-cyber-primary text-white"
            />
          </div>

          <div>
            <label htmlFor="categoria" className="block text-sm font-medium text-gray-300 mb-2">
              Categoria
            </label>
            <input
              type="text"
              id="categoria"
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-800 border border-cyber-primary text-white"
            />
          </div>

          <div>
            <label htmlFor="imagem" className="block text-sm font-medium text-gray-300 mb-2">
              URL da Imagem
            </label>
            <input
              type="url"
              id="imagem"
              name="imagem"
              value={formData.imagem}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-800 border border-cyber-primary text-white"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="ativo"
              name="ativo"
              checked={formData.ativo}
              onChange={handleChange}
              className="h-4 w-4 text-cyber-primary focus:ring-cyber-primary border-gray-300 rounded"
            />
            <label htmlFor="ativo" className="ml-2 block text-sm text-gray-300">
              Produto Ativo
            </label>
          </div>

          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-cyber-primary text-black rounded-lg hover:bg-cyber-primary/90 transition-colors disabled:opacity-50"
            >
              {loading ? 'Criando...' : 'Criar Produto'}
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 