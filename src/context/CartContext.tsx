'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  licenseType: 'Mensal' | 'Trimestral' | 'Anual';
  image: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  total: 0,
});

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Carregar do localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('cybershop_cart');
      if (stored) {
        const parsedItems = JSON.parse(stored);
        if (Array.isArray(parsedItems)) {
          setItems(parsedItems);
        } else {
          console.error('Dados do carrinho inválidos');
          localStorage.removeItem('cybershop_cart');
        }
      }
    } catch (error) {
      console.error('Erro ao carregar carrinho:', error);
      localStorage.removeItem('cybershop_cart');
    }
  }, []);

  // Salvar no localStorage
  useEffect(() => {
    try {
      localStorage.setItem('cybershop_cart', JSON.stringify(items));
    } catch (error) {
      console.error('Erro ao salvar carrinho:', error);
    }
  }, [items]);

  const addItem = (item: CartItem) => {
    setItems(prev => {
      const existingItem = prev.find(i => i.id === item.id);
      if (existingItem) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    setItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
} 