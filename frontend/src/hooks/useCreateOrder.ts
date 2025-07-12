import { useEffect, useState } from 'react';
import { getProducts } from '../api/products';
import { createOrder } from '../api/orders';
import type { Product } from '../types/Product';
import type { Orders } from '../types/Orders';

export const useCreateOrder = (onOrderCreated?: () => void) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [lastOrder, setLastOrder] = useState<Orders | null>(null);

  useEffect(() => {
    getProducts()
      .then((data) => {
        console.log('Productos obtenidos del backend:', data);
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error al cargar productos:', error);
        alert('Error al cargar productos');
      });
  }, []);

  const handleCheckboxChange = (id: number) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(pid => pid !== id) : [...prev, id]
    );
  };

  const selectedProducts = products.filter(p => selectedIds.includes(p.id));

  const total = selectedProducts.reduce((sum, p) => {
    const price = Number(p.price);
    return sum + (isNaN(price) ? 0 : price);
  }, 0);

  const handleSubmit = async () => {
    if (selectedIds.length === 0) return alert('Selecciona al menos un producto');
    setLoading(true);
    try {
      const newOrder = await createOrder(selectedIds);
      console.log('Orden creada:', newOrder);
      setLastOrder(newOrder);
      alert('Orden creada');
      setSelectedIds([]);
      if (onOrderCreated) onOrderCreated();
    } catch (error) {
      console.error('Error al crear orden:', error);
      alert('Error al crear orden');
    } finally {
      setLoading(false);
    }
  };

  return {
    products,
    selectedIds,
    loading,
    lastOrder,
    total,
    selectedProducts,
    handleCheckboxChange,
    handleSubmit
  };
};