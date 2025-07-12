import { useState } from "react";
import { createProduct } from "../api/products";
import type { Product } from "../types/Product";

export const useProductForm = (onProductCreated?: (product: Product) => void) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price) return alert("Todos los campos son obligatorios");

    setLoading(true);
    try {
      const newProduct = await createProduct({
        name,
        price: parseFloat(price),
      });
      setName("");
      setPrice("");
      if (onProductCreated) onProductCreated(newProduct);
    } catch {
      alert("Error al crear producto");
    } finally {
      setLoading(false);
    }
  };

  return {
    name,
    price,
    loading,
    setName,
    setPrice,
    handleSubmit,
  };
};
