import type { Orders } from '../types/Orders';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getOrders = async (): Promise<Orders[]> => {
  const res = await fetch(`${BASE_URL}/orders`);
  if (!res.ok) throw new Error('Error al obtener órdenes');
  return res.json();
};

export const createOrder = async (
  productIds: number[]
): Promise<Orders> => {
  const res = await fetch(`${BASE_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ products: productIds }),
  });

  if (!res.ok) throw new Error('Error al crear orden');
  return res.json();
};
