const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://cyber-lovat-psi.vercel.app";

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export class ApiService {
  private static getHeaders(token?: string) {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    return headers;
  }

  static async login(username: string, password: string): Promise<ApiResponse<any>> {
    try {
      console.log('Iniciando requisição de login para:', API_URL);
      console.log('Dados do login:', { username, timestamp: new Date().getTime() });

      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: this.getHeaders(),
        body: JSON.stringify({ 
          username, 
          password,
          timestamp: new Date().getTime()
        }),
        credentials: 'include',
      });

      console.log('Status da resposta:', response.status);
      console.log('Headers da resposta:', Object.fromEntries(response.headers.entries()));

      // Verifica se a resposta é JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const textResponse = await response.text();
        console.error("Resposta não-JSON recebida:", textResponse);
        return {
          success: false,
          error: "Servidor não está respondendo corretamente. Verifique se o servidor está rodando.",
        };
      }

      const data = await response.json();
      console.log('Resposta do servidor:', data);

      if (!response.ok) {
        return {
          success: false,
          error: data.error || "Erro ao fazer login",
        };
      }

      if (!data.token) {
        return {
          success: false,
          error: "Token não recebido do servidor",
        };
      }

      return {
        success: true,
        data: {
          id: data.id,
          username: data.username,
          email: data.email,
          isAdmin: data.isAdmin,
          token: data.token
        },
      };
    } catch (error) {
      console.error("Erro na requisição de login:", error);
      return {
        success: false,
        error: "Erro ao conectar com o servidor. Verifique se o servidor está rodando em " + API_URL,
      };
    }
  }

  static async getAdminStats(token: string): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(`${API_URL}/api/admin/stats`, {
        headers: this.getHeaders(token),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: data.message || "Erro ao buscar estatísticas",
        };
      }

      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error("Erro ao buscar estatísticas:", error);
      return {
        success: false,
        error: "Erro ao conectar com o servidor",
      };
    }
  }

  static async getAdminProducts(token: string): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(`${API_URL}/api/admin/produtos`, {
        headers: this.getHeaders(token),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: data.message || "Erro ao buscar produtos",
        };
      }

      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      return {
        success: false,
        error: "Erro ao conectar com o servidor",
      };
    }
  }

  static async getAdminUsers(token: string): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(`${API_URL}/api/admin/usuarios`, {
        headers: this.getHeaders(token),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: data.message || "Erro ao buscar usuários",
        };
      }

      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      return {
        success: false,
        error: "Erro ao conectar com o servidor",
      };
    }
  }

  static async getAdminCategories(token: string): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(`${API_URL}/api/admin/categorias`, {
        headers: this.getHeaders(token),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: data.message || "Erro ao buscar categorias",
        };
      }

      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
      return {
        success: false,
        error: "Erro ao conectar com o servidor",
      };
    }
  }

  static async createCategory(token: string, name: string): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(`${API_URL}/api/admin/categorias`, {
        method: "POST",
        headers: this.getHeaders(token),
        body: JSON.stringify({ name }),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: data.message || "Erro ao criar categoria",
        };
      }

      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error("Erro ao criar categoria:", error);
      return {
        success: false,
        error: "Erro ao conectar com o servidor",
      };
    }
  }

  static async createProduct(token: string, productData: any): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(`${API_URL}/api/admin/produtos`, {
        method: "POST",
        headers: this.getHeaders(token),
        body: JSON.stringify(productData),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: data.message || "Erro ao criar produto",
        };
      }

      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error("Erro ao criar produto:", error);
      return {
        success: false,
        error: "Erro ao conectar com o servidor",
      };
    }
  }

  static async deleteProduct(token: string, productId: number): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(`${API_URL}/api/admin/produtos/${productId}`, {
        method: "DELETE",
        headers: this.getHeaders(token),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: data.message || "Erro ao deletar produto",
        };
      }

      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
      return {
        success: false,
        error: "Erro ao conectar com o servidor",
      };
    }
  }

  static async toggleUserAdmin(token: string, userId: number): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(`${API_URL}/api/admin/usuarios/${userId}/toggle-admin`, {
        method: "POST",
        headers: this.getHeaders(token),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: data.message || "Erro ao alterar status de admin",
        };
      }

      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error("Erro ao alterar status de admin:", error);
      return {
        success: false,
        error: "Erro ao conectar com o servidor",
      };
    }
  }

  static async sendEmail(token: string, emailData: any): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(`${API_URL}/api/admin/email`, {
        method: "POST",
        headers: this.getHeaders(token),
        body: JSON.stringify(emailData),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: data.message || "Erro ao enviar email",
        };
      }

      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      return {
        success: false,
        error: "Erro ao conectar com o servidor",
      };
    }
  }

  static async getTestimonials(): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(`${API_URL}/api/testimonials`);
      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: data.message || "Erro ao buscar depoimentos",
        };
      }

      return {
        success: true,
        data,
      };
    } catch (error) {
      console.error("Erro ao buscar depoimentos:", error);
      return {
        success: false,
        error: "Erro ao conectar com o servidor",
      };
    }
  }
}

export default ApiService; 