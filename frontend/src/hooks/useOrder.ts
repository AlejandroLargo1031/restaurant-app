import { useEffect, useState } from 'react';
import { getOrders } from '../api/orders';
import type { Orders } from '../types/Orders';

export const useOrder = () => {
  const [orders, setOrders] = useState<Orders[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOrders()
      .then(setOrders)
      .catch(() => alert('Error al cargar las órdenes'))
      .finally(() => setLoading(false));
  }, []);

  return { orders, loading };
};