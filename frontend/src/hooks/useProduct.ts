import { useState } from 'react';

export const useProduct = () => {
  const [refreshCount, setRefreshCount] = useState(0);

  const handleProductCreated = () => {
    setRefreshCount(prev => prev + 1); // 🔁 fuerza recarga de lista
  };

  return {
    refreshCount,
    handleProductCreated,
  };
};
