'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';

export default function CheckoutPage() {
  const { items, getCartTotal, clearCart } = useCartStore();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Pedido finalizado com sucesso!");
    clearCart();
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-surface border-b border-border py-6 flex justify-center items-center">
        <Link href="/" className="font-serif text-2xl font-bold tracking-widest text-primary uppercase">Talyta Amaral</Link>
      </header>
      <div className="flex-1 container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
          <div className="xl:col-span-7">
            <form onSubmit={handleCheckoutSubmit} className="flex flex-col gap-6">
              <div className="border border-primary shadow-sm bg-surface">
                <div className="p-6 border-b border-border bg-muted/20"><h2 className="font-serif text-xl uppercase">1. Endereço e Pagamento</h2></div>
                <div className="p-6 grid grid-cols-1 gap-4">
                  <input type="text" placeholder="CEP" required className="w-full border-b border-border py-3 bg-transparent text-sm focus:outline-none focus:border-primary" />
                  <input type="text" placeholder="Número do Cartão" required className="w-full border-b border-border py-3 bg-transparent text-sm focus:outline-none focus:border-primary" />
                  <button type="submit" className="mt-4 bg-primary text-surface py-5 uppercase tracking-widest text-sm font-semibold">Finalizar Pedido</button>
                </div>
              </div>
            </form>
          </div>
          <div className="xl:col-span-5">
            <div className="sticky top-8 bg-surface border border-border p-6 shadow-xl">
              <h2 className="font-serif text-2xl uppercase tracking-widest border-b pb-4 mb-6">Resumo</h2>
              <div className="flex flex-col gap-4 mb-6">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between text-sm"><span>{item.name} (x{item.quantity})</span><span>R$ {(item.price * item.quantity).toFixed(2)}</span></div>
                ))}
              </div>
              <div className="border-t pt-4 flex justify-between items-center"><span className="uppercase font-semibold">Total</span><span className="font-serif text-2xl">R$ {getCartTotal().toFixed(2)}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
