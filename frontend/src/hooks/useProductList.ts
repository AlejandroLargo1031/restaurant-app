import { useEffect, useState } from 'react';
import { getProducts } from '../api/products';
import type { Product } from '../types/Product';

export const useProductList = (refreshTrigger?: number) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = () => {
    setLoading(true);
    getProducts()
      .then(data => setProducts(data))
      .catch(() => alert('Error al cargar productos'))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchProducts();
  }, [refreshTrigger]);

  return {
    products,
    loading,
  };
};
