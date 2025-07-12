import { ProductForm } from '../components/ProductForm';
import { ProductList } from '../components/ProductList';
import { useProduct } from '../hooks/useProduct';

export const Products = () => {
  const {refreshCount, handleProductCreated} = useProduct()

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Productos</h1>
      <ProductForm onProductCreated={handleProductCreated} />
      <ProductList refreshTrigger={refreshCount} />
    </div>
  );
};


