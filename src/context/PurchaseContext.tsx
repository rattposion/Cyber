'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { PurchaseNotification } from '../components/PurchaseNotification';

interface Purchase {
  id: string;
  produto: string;
  comprador: string;
  preco: number;
  timestamp: string;
}

interface PurchaseContextType {
  purchases: Purchase[];
  addPurchase: (purchase: Purchase) => void;
  removePurchase: (id: string) => void;
}

const PurchaseContext = createContext<PurchaseContextType | undefined>(undefined);

export function PurchaseProvider({ children }: { children: React.ReactNode }) {
  const [purchases, setPurchases] = useState<Purchase[]>([]);

  const addPurchase = (purchase: Purchase) => {
    setPurchases(prev => [...prev, purchase]);
  };

  const removePurchase = (id: string) => {
    setPurchases(prev => prev.filter(p => p.id !== id));
  };

  // Simular recebimento de compras do servidor
  useEffect(() => {
    const wsUrl = 'wss://backcyber-production.up.railway.app';
    console.log('Tentando conectar ao WebSocket:', wsUrl);
    
    const ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      console.log('Conexão WebSocket estabelecida');
    };

    ws.onmessage = (event) => {
      console.log('Mensagem recebida:', event.data);
      const purchase = JSON.parse(event.data);
      addPurchase(purchase);
    };

    ws.onerror = (error) => {
      console.error('Erro na conexão WebSocket:', error);
    };

    ws.onclose = () => {
      console.log('Conexão WebSocket fechada');
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <PurchaseContext.Provider value={{ purchases, addPurchase, removePurchase }}>
      {children}
      {purchases.map(purchase => (
        <PurchaseNotification
          key={purchase.id}
          purchase={purchase}
          onClose={() => removePurchase(purchase.id)}
        />
      ))}
    </PurchaseContext.Provider>
  );
}

export function usePurchases() {
  const context = useContext(PurchaseContext);
  if (context === undefined) {
    throw new Error('usePurchases must be used within a PurchaseProvider');
  }
  return context;
} 