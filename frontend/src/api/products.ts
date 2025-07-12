import type { Product } from '../types/Product';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw new Error('Error al obtener productos');
  return res.json();
};

export const createProduct = async (
  product: Omit<Product, 'id'>
): Promise<Product> => {
  const res = await fetch(`${BASE_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });

  if (!res.ok) throw new Error('Error al crear producto');
  return res.json();
};
