
import { useProductList } from '../hooks/useProductList';

interface ProductListProps {
  refreshTrigger?: number;
}

export const ProductList: React.FC<ProductListProps> = ({refreshTrigger}) => {
  const {products, loading} = useProductList(refreshTrigger)
  
  return (
    <div className="bg-gray-50 p-4 rounded">
      <h2 className="text-xl font-bold mb-2">Lista de productos</h2>

      {loading ? (
        <p>Cargando productos...</p>
      ) : products.length === 0 ? (
        <p>No hay productos aún.</p>
      ) : (
        <ul className="list-disc list-inside space-y-1">
          {products.map(product => (
            <li key={product.id}>{product.name} - ${product.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

