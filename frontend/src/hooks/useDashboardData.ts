import { useEffect, useState } from 'react';
import { getOrders } from '../api/orders';
import { getProducts } from '../api/products';
import type { Orders } from '../types/Orders';
import type { Product } from '../types/Product';

export const useDashboardData = () => {
  const [orders, setOrders] = useState<Orders[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getOrders(), getProducts()])
      .then(([ordersRes, productsRes]) => {
        setOrders(ordersRes);
        setProducts(productsRes);
      })
      .catch(() => alert('Error al cargar datos del dashboard'))
      .finally(() => setLoading(false));
  }, []);

  return { orders, products, loading };
};
