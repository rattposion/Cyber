"use client";
import { useAuth } from '@/components/AuthProvider';
import { useEffect, useState, useRef } from 'react';
import { FaUsers, FaShoppingCart, FaMoneyBillWave, FaBox, FaEnvelope, FaChartLine, FaPlus } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import ApiService from "@/lib/api";
import ProtectedRoute from "@/components/ProtectedRoute";

interface Statistics {
  totalUsers: number;
  totalProducts: number;
  totalOrders: number;
  totalRevenue: number;
  produtosAtivos: number;
  pedidosPendentes: number;
}

interface User {
  id: number;
  username: string;
  email: string;
  isAdmin: boolean;
  createdAt: string;
}

interface Product {
  id: number;
  nome: string;
  preco: number;
  status: string;
  createdAt: string;
  destaque?: boolean;
  entregaAutomatica: boolean;
}

interface Categoria {
  id: number;
  nome: string;
  createdAt: string;
  updatedAt: string;
}

interface CreateFormData {
  nome: string;
  descricao: string;
  preco: number;
  preco1d: number;
  preco7d: number;
  preco30d: number;
  precoLifetime: number;
  tipoUso: string;
  status: string;
  imagem: File | null;
  categoriaId: string;
}

export default function AdminPage() {
  const { user, token, isAuthenticated, isLoading } = useAuth();
  const [statistics, setStatistics] = useState<Statistics | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [emailMsg, setEmailMsg] = useState('');
  const nomeRef = useRef<HTMLInputElement>(null);
  const quantidadeRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLSelectElement>(null);
  const bioRef = useRef<HTMLTextAreaElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const [emailForm, setEmailForm] = useState({ to: '', subject: '', text: '' });
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [createForm, setCreateForm] = useState<CreateFormData>({
    nome: '',
    descricao: '',
    preco: 0,
    preco1d: 0,
    preco7d: 0,
    preco30d: 0,
    precoLifetime: 0,
    tipoUso: 'lifetime',
    status: 'ativo',
    imagem: null,
    categoriaId: ''
  });
  const [showCreateCategoryModal, setShowCreateCategoryModal] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [categoryMsg, setCategoryMsg] = useState('');
  const [categoryLoading, setCategoryLoading] = useState(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isLoading, isAuthenticated, router]);

  useEffect(() => {
    if (isAuthenticated && token) {
      fetchData();
    }
  }, [isAuthenticated, token]);

  const fetchData = async () => {
    if (!token) {
      setError("Token não disponível");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const [statsResponse, usersResponse, productsResponse] = await Promise.all([
        ApiService.getAdminStats(token),
        ApiService.getAdminUsers(token),
        ApiService.getAdminProducts(token),
      ]);

      if (statsResponse.error) {
        setError(statsResponse.error);
        return;
      }

      if (usersResponse.error) {
        setError(usersResponse.error);
        return;
      }

      if (productsResponse.error) {
        setError(productsResponse.error);
        return;
      }

      // Função auxiliar para garantir que um valor seja um número válido
      const ensureNumber = (value: any): number => {
        const num = Number(value);
        return isNaN(num) ? 0 : num;
      };

      // Limpa e valida os dados
      const cleanedStats = {
        totalUsers: ensureNumber(statsResponse.data?.totalUsers),
        totalProducts: ensureNumber(statsResponse.data?.totalProducts),
        totalOrders: ensureNumber(statsResponse.data?.totalOrders),
        totalRevenue: ensureNumber(statsResponse.data?.totalRevenue),
        produtosAtivos: ensureNumber(statsResponse.data?.produtosAtivos),
        pedidosPendentes: ensureNumber(statsResponse.data?.pedidosPendentes)
      };

      const cleanedProducts = (productsResponse.data || []).map((product: any) => ({
        ...product,
        preco: ensureNumber(product?.preco),
        preco1d: ensureNumber(product?.preco1d),
        preco7d: ensureNumber(product?.preco7d),
        preco30d: ensureNumber(product?.preco30d),
        precoLifetime: ensureNumber(product?.precoLifetime),
        entregaAutomatica: Boolean(product?.entregaAutomatica),
        status: product?.status || 'inativo'
      }));

      setStatistics(cleanedStats);
      setUsers(usersResponse.data || []);
      setProducts(cleanedProducts);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      setError("Erro ao carregar dados. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const fetchCategorias = async () => {
    if (!token) {
      setError("Token não disponível");
      return;
    }

    try {
      const response = await ApiService.getAdminCategories(token);
      
      if (response.error) {
        setError(response.error);
        return;
      }

      setCategorias(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao buscar categorias');
    }
  };

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Carregando...</div>;
  }

  if (!isAuthenticated) {
    return null;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-red-500 p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl mb-4">Erro</h1>
          <p>{error}</p>
          <button
            onClick={fetchData}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Tentar Novamente
          </button>
        </div>
      </div>
    );
  }

  // Envio de e-mail
  const handleEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      setEmailMsg("Token não disponível");
      return;
    }

    try {
      const response = await ApiService.sendEmail(token, emailForm);

      if (response.error) {
        setEmailMsg(response.error);
        return;
      }

      setEmailMsg('E-mail enviado com sucesso!');
      setEmailForm({ to: '', subject: '', text: '' });
    } catch (error) {
      console.error('Erro:', error);
      setEmailMsg(error instanceof Error ? error.message : 'Erro ao enviar e-mail');
    }
  };

  // Toggle admin status
  const toggleAdmin = async (userId: number) => {
    if (!token) {
      setError("Token não disponível");
      return;
    }

    try {
      const userToUpdate = users.find(u => u.id === userId);
      if (!userToUpdate) return;

      const response = await ApiService.toggleUserAdmin(token, userId);

      if (response.error) {
        setError(response.error);
        return;
      }

      // Atualizar lista de usuários
      setUsers(users.map(u => 
        u.id === userId ? { ...u, isAdmin: !u.isAdmin } : u
      ));
    } catch (error) {
      console.error('Erro:', error);
      setError(error instanceof Error ? error.message : 'Erro ao atualizar usuário');
    }
  };

  const handleCreateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!token || !user) {
      setError('Token ou usuário não disponível');
      return;
    }

    try {
      // Validar campos obrigatórios
      const camposObrigatorios = ['nome', 'preco', 'tipoUso', 'categoriaId'] as const;
      const camposFaltando = camposObrigatorios.filter(campo => !createForm[campo]);
      
      if (camposFaltando.length > 0) {
        throw new Error(`Campos obrigatórios faltando: ${camposFaltando.join(', ')}`);
      }

      // Validar imagem
      if (!createForm.imagem) {
        throw new Error('Por favor, selecione uma imagem para o produto');
      }

      const formData = new FormData();
      formData.append('nome', createForm.nome);
      formData.append('descricao', createForm.descricao);
      formData.append('preco', createForm.preco.toString());
      formData.append('tipoUso', createForm.tipoUso);
      formData.append('categoriaId', createForm.categoriaId);
      formData.append('status', createForm.status);
      formData.append('file', createForm.imagem);
      formData.append('userId', user.id.toString());

      // Adicionar todos os campos de preço
      formData.append('preco1d', createForm.preco1d.toString());
      formData.append('preco7d', createForm.preco7d.toString());
      formData.append('preco30d', createForm.preco30d.toString());
      formData.append('precoLifetime', createForm.precoLifetime.toString());

      const response = await ApiService.createProduct(token, formData);

      if (response.error) {
        throw new Error(response.error);
      }

      // Limpar formulário
      setCreateForm({
        nome: '',
        descricao: '',
        preco: 0,
        preco1d: 0,
        preco7d: 0,
        preco30d: 0,
        precoLifetime: 0,
        tipoUso: 'lifetime',
        status: 'ativo',
        imagem: null,
        categoriaId: ''
      });

      // Fechar modal
      setShowCreateModal(false);

      // Atualizar lista de produtos
      fetchData();
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Erro ao criar produto');
      }
    }
  };

  // Adicionar useEffect para carregar categorias quando o modal é aberto
  useEffect(() => {
    if (showCreateModal) {
      fetchCategorias();
    }
  }, [showCreateModal]);

  // Atualizar os handlers de input para converter strings em números
  const handlePrecoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCreateForm(prev => ({
      ...prev,
      preco: value ? parseFloat(value) : 0
    }));
  };

  const handlePreco1dChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCreateForm(prev => ({
      ...prev,
      preco1d: value ? parseFloat(value) : 0
    }));
  };

  const handlePreco7dChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCreateForm(prev => ({
      ...prev,
      preco7d: value ? parseFloat(value) : 0
    }));
  };

  const handlePreco30dChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCreateForm(prev => ({
      ...prev,
      preco30d: value ? parseFloat(value) : 0
    }));
  };

  const handlePrecoLifetimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCreateForm(prev => ({
      ...prev,
      precoLifetime: value ? parseFloat(value) : 0
    }));
  };

  // Função para excluir produto
  async function handleDeleteProduct(productId: number) {
    if (!window.confirm('Tem certeza que deseja excluir este produto?')) return;
    
    if (!token) {
      setError('Token não disponível');
      return;
    }

    try {
      const response = await ApiService.deleteProduct(token, productId);

      if (response.error) {
        throw new Error(response.error);
      }

      setProducts(products.filter(p => p.id !== productId));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao excluir produto');
    }
  }

  const handleCreateCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    setCategoryMsg('');
    setCategoryLoading(true);
    
    if (!token) {
      setCategoryMsg('Token não disponível');
      setCategoryLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/admin/categorias', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ nome: categoryName })
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Erro ao criar categoria');
      }

      setCategoryMsg('Categoria criada com sucesso!');
      setCategoryName('');
      fetchCategorias();
    } catch (err) {
      setCategoryMsg(err instanceof Error ? err.message : 'Erro ao criar categoria');
    } finally {
      setCategoryLoading(false);
    }
  };

  const handleToggleEntrega = async (productId: number) => {
    if (!token) {
      setError("Token não disponível");
      return;
    }

    try {
      const response = await ApiService.toggleProductEntrega(token, productId);

      if (response.error) {
        setError(response.error);
        return;
      }

      // Atualizar lista de produtos
      setProducts(products.map(p => 
        p.id === productId ? { ...p, entregaAutomatica: !p.entregaAutomatica } : p
      ));
    } catch (error) {
      console.error('Erro:', error);
      setError(error instanceof Error ? error.message : 'Erro ao atualizar entrega');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white p-8">
      <ProtectedRoute requireAdmin>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl cyber-glow mb-8 text-center">Painel de Administração</h1>
          
          {/* Tabs */}
          <div className="flex gap-4 mb-8 justify-center">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                activeTab === 'dashboard' ? 'bg-[#39ff14] text-black' : 'bg-[#181828]'
              }`}
            >
              <FaChartLine /> Dashboard
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                activeTab === 'users' ? 'bg-[#39ff14] text-black' : 'bg-[#181828]'
              }`}
            >
              <FaUsers /> Usuários
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                activeTab === 'products' ? 'bg-[#39ff14] text-black' : 'bg-[#181828]'
              }`}
            >
              <FaBox /> Produtos
            </button>
            <button
              onClick={() => setActiveTab('email')}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                activeTab === 'email' ? 'bg-[#39ff14] text-black' : 'bg-[#181828]'
              }`}
            >
              <FaEnvelope /> E-mail
            </button>
          </div>

          {/* Conteúdo */}
          <div className="space-y-8">
            {/* Dashboard */}
            {activeTab === 'dashboard' && statistics && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-[#181828] p-6 rounded-lg shadow-lg">
                  <div className="flex items-center gap-4">
                    <FaUsers className="text-3xl text-[#39ff14]" />
                    <div>
                      <h3 className="text-lg font-semibold">Total de Usuários</h3>
                      <p className="text-2xl">{statistics.totalUsers}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#181828] p-6 rounded-lg shadow-lg">
                  <div className="flex items-center gap-4">
                    <FaShoppingCart className="text-3xl text-[#39ff14]" />
                    <div>
                      <h3 className="text-lg font-semibold">Total de Pedidos</h3>
                      <p className="text-2xl">{statistics.totalOrders}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#181828] p-6 rounded-lg shadow-lg">
                  <div className="flex items-center gap-4">
                    <FaMoneyBillWave className="text-3xl text-[#39ff14]" />
                    <div>
                      <h3 className="text-lg font-semibold">Receita Total</h3>
                      <p className="text-2xl">R$ {ensureNumber(statistics?.totalRevenue).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#181828] p-6 rounded-lg shadow-lg">
                  <div className="flex items-center gap-4">
                    <FaBox className="text-3xl text-[#39ff14]" />
                    <div>
                      <h3 className="text-lg font-semibold">Total de Produtos</h3>
                      <p className="text-2xl">{statistics.totalProducts}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Usuários */}
            {activeTab === 'users' && (
              <div className="bg-[#181828] rounded-lg shadow-lg p-6">
                <h2 className="text-2xl mb-4">Gerenciar Usuários</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#39ff14]/30">
                        <th className="text-left p-4">ID</th>
                        <th className="text-left p-4">Username</th>
                        <th className="text-left p-4">Email</th>
                        <th className="text-left p-4">Admin</th>
                        <th className="text-left p-4">Data de Registro</th>
                        <th className="text-left p-4">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((u) => (
                        <tr key={u.id} className="border-b border-[#39ff14]/10">
                          <td className="p-4">{u.id}</td>
                          <td className="p-4">{u.username}</td>
                          <td className="p-4">{u.email}</td>
                          <td className="p-4">
                            <span className={`px-2 py-1 rounded ${
                              u.isAdmin ? 'bg-[#39ff14] text-black' : 'bg-gray-600'
                            }`}>
                              {u.isAdmin ? 'Sim' : 'Não'}
                            </span>
                          </td>
                          <td className="p-4">{new Date(u.createdAt).toLocaleDateString()}</td>
                          <td className="p-4">
                            <button
                              onClick={() => toggleAdmin(u.id)}
                              className="bg-[#39ff14] text-black px-3 py-1 rounded hover:bg-[#39ff14]/80"
                            >
                              {u.isAdmin ? 'Remover Admin' : 'Tornar Admin'}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Produtos */}
            {activeTab === 'products' && (
              <div className="bg-[#181828] rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl">Gerenciar Produtos</h2>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setShowCreateModal(true)}
                      className="bg-[#39ff14] text-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#39ff14]/80"
                    >
                      <FaPlus /> Novo Produto
                    </button>
                    <button
                      onClick={() => setShowCreateCategoryModal(true)}
                      className="bg-[#8f00ff] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#8f00ff]/80"
                    >
                      <FaPlus /> Nova Categoria
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#39ff14]/30">
                        <th className="text-left p-4">ID</th>
                        <th className="text-left p-4">Nome</th>
                        <th className="text-left p-4">Preço</th>
                        <th className="text-left p-4">Status</th>
                        <th className="text-left p-4">Entrega Auto</th>
                        <th className="text-left p-4">Data de Criação</th>
                        <th className="text-left p-4">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((p) => (
                        <tr key={p.id} className="border-b border-[#39ff14]/10">
                          <td className="p-4">{p.id}</td>
                          <td className="p-4">{p.nome}</td>
                          <td className="p-4">R$ {ensureNumber(p.preco).toFixed(2)}</td>
                          <td className="p-4">
                            <span className={`px-2 py-1 rounded ${
                              p.status === 'ativo' ? 'bg-[#39ff14] text-black' : 'bg-red-500'
                            }`}>
                              {p.status}
                            </span>
                          </td>
                          <td className="p-4">
                            <button
                              onClick={() => handleToggleEntrega(p.id)}
                              className={`px-2 py-1 rounded ${
                                p.entregaAutomatica ? 'bg-[#39ff14] text-black' : 'bg-gray-600'
                              }`}
                            >
                              {p.entregaAutomatica ? 'Sim' : 'Não'}
                            </button>
                          </td>
                          <td className="p-4">{new Date(p.createdAt).toLocaleDateString()}</td>
                          <td className="p-4">
                            <button
                              onClick={() => handleDeleteProduct(p.id)}
                              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                              Excluir
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Email */}
            {activeTab === 'email' && (
              <div className="bg-[#181828] rounded-lg shadow-lg p-6">
                <h2 className="text-2xl mb-4">Enviar E-mail</h2>
                <form onSubmit={handleEmail} className="space-y-4">
                  <div>
                    <label className="block mb-2">Para:</label>
                    <input
                      type="email"
                      value={emailForm.to}
                      onChange={(e) => setEmailForm(prev => ({ ...prev, to: e.target.value }))}
                      className="w-full bg-[#0a0a1a] border border-[#39ff14]/30 rounded-lg p-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Assunto:</label>
                    <input
                      type="text"
                      value={emailForm.subject}
                      onChange={(e) => setEmailForm(prev => ({ ...prev, subject: e.target.value }))}
                      className="w-full bg-[#0a0a1a] border border-[#39ff14]/30 rounded-lg p-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Mensagem:</label>
                    <textarea
                      value={emailForm.text}
                      onChange={(e) => setEmailForm(prev => ({ ...prev, text: e.target.value }))}
                      className="w-full bg-[#0a0a1a] border border-[#39ff14]/30 rounded-lg p-2 h-32"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#39ff14] text-black px-4 py-2 rounded-lg hover:bg-[#39ff14]/80"
                  >
                    Enviar E-mail
                  </button>
                  {emailMsg && (
                    <p className={`mt-2 ${emailMsg.includes('sucesso') ? 'text-[#39ff14]' : 'text-red-500'}`}>
                      {emailMsg}
                    </p>
                  )}
                </form>
              </div>
            )}

            {/* Modal de Criação de Produto */}
            {showCreateModal && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-[#181828] p-6 rounded-lg w-full max-w-2xl">
                  <h2 className="text-2xl mb-4">Novo Produto</h2>
                  <form onSubmit={handleCreateProduct} className="space-y-4">
                    <div>
                      <label className="block mb-2">Nome</label>
                      <input
                        type="text"
                        value={createForm.nome}
                        onChange={(e) => setCreateForm(prev => ({ ...prev, nome: e.target.value }))}
                        className="w-full bg-[#0a0a1a] border border-[#39ff14]/30 rounded-lg p-2"
                        required
                      />
                    </div>

                    <div>
                      <label className="block mb-2">Descrição</label>
                      <textarea
                        value={createForm.descricao}
                        onChange={(e) => setCreateForm(prev => ({ ...prev, descricao: e.target.value }))}
                        className="w-full bg-[#0a0a1a] border border-[#39ff14]/30 rounded-lg p-2 h-32"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-2">Preço Base</label>
                        <input
                          type="number"
                          value={createForm.preco}
                          onChange={handlePrecoChange}
                          className="w-full bg-[#0a0a1a] border border-[#39ff14]/30 rounded-lg p-2"
                          required
                        />
                      </div>

                      <div>
                        <label className="block mb-2">Categoria</label>
                        <select
                          value={createForm.categoriaId}
                          onChange={(e) => setCreateForm(prev => ({ ...prev, categoriaId: e.target.value }))}
                          className="w-full bg-[#0a0a1a] border border-[#39ff14]/30 rounded-lg p-2"
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

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-2">Preço 1 Dia</label>
                        <input
                          type="number"
                          value={createForm.preco1d}
                          onChange={handlePreco1dChange}
                          className="w-full bg-[#0a0a1a] border border-[#39ff14]/30 rounded-lg p-2"
                        />
                      </div>

                      <div>
                        <label className="block mb-2">Preço 7 Dias</label>
                        <input
                          type="number"
                          value={createForm.preco7d}
                          onChange={handlePreco7dChange}
                          className="w-full bg-[#0a0a1a] border border-[#39ff14]/30 rounded-lg p-2"
                        />
                      </div>

                      <div>
                        <label className="block mb-2">Preço 30 Dias</label>
                        <input
                          type="number"
                          value={createForm.preco30d}
                          onChange={handlePreco30dChange}
                          className="w-full bg-[#0a0a1a] border border-[#39ff14]/30 rounded-lg p-2"
                        />
                      </div>

                      <div>
                        <label className="block mb-2">Preço Lifetime</label>
                        <input
                          type="number"
                          value={createForm.precoLifetime}
                          onChange={handlePrecoLifetimeChange}
                          className="w-full bg-[#0a0a1a] border border-[#39ff14]/30 rounded-lg p-2"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-2">Tipo de Uso</label>
                        <select
                          value={createForm.tipoUso}
                          onChange={(e) => setCreateForm(prev => ({ ...prev, tipoUso: e.target.value }))}
                          className="w-full bg-[#0a0a1a] border border-[#39ff14]/30 rounded-lg p-2"
                          required
                        >
                          <option value="1d">1 Dia</option>
                          <option value="7d">7 Dias</option>
                          <option value="30d">30 Dias</option>
                          <option value="lifetime">Lifetime</option>
                        </select>
                      </div>

                      <div>
                        <label className="block mb-2">Status</label>
                        <select
                          value={createForm.status}
                          onChange={(e) => setCreateForm(prev => ({ ...prev, status: e.target.value }))}
                          className="w-full bg-[#0a0a1a] border border-[#39ff14]/30 rounded-lg p-2"
                          required
                        >
                          <option value="ativo">Ativo</option>
                          <option value="inativo">Inativo</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block mb-2">Imagem</label>
                      <input
                        type="file"
                        onChange={(e) => setCreateForm(prev => ({ ...prev, imagem: e.target.files?.[0] || null }))}
                        className="w-full bg-[#0a0a1a] border border-[#39ff14]/30 rounded-lg p-2"
                        accept="image/*"
                        required
                      />
                    </div>

                    <div className="flex justify-end gap-4 mt-6">
                      <button
                        type="button"
                        onClick={() => setShowCreateModal(false)}
                        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-[#39ff14] text-black rounded-lg hover:bg-[#39ff14]/80"
                      >
                        Criar Produto
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Modal de Criação de Categoria */}
            {showCreateCategoryModal && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-[#181828] p-6 rounded-lg w-full max-w-md">
                  <h2 className="text-2xl mb-4">Nova Categoria</h2>
                  <form onSubmit={handleCreateCategory} className="space-y-4">
                    <div>
                      <label className="block mb-2">Nome da Categoria</label>
                      <input
                        type="text"
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        className="w-full bg-[#0a0a1a] border border-[#39ff14]/30 rounded-lg p-2"
                        required
                      />
                    </div>

                    {categoryMsg && (
                      <p className={`text-sm ${categoryMsg.includes('sucesso') ? 'text-[#39ff14]' : 'text-red-500'}`}>
                        {categoryMsg}
                      </p>
                    )}

                    <div className="flex justify-end gap-4 mt-6">
                      <button
                        type="button"
                        onClick={() => {
                          setShowCreateCategoryModal(false);
                          setCategoryName('');
                          setCategoryMsg('');
                        }}
                        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        disabled={categoryLoading}
                        className="px-4 py-2 bg-[#8f00ff] text-white rounded-lg hover:bg-[#8f00ff]/80 disabled:opacity-50"
                      >
                        {categoryLoading ? 'Criando...' : 'Criar Categoria'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </ProtectedRoute>
    </div>
  );
}