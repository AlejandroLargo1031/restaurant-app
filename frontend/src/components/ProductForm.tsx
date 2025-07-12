
import type { Product } from "../types/Product";
import { useProductForm } from "../hooks/useProductForm";

interface ProductFormProps {
  onProductCreated?: (product: Product) => void;
}

export const ProductForm: React.FC<ProductFormProps> = ({
  onProductCreated,
}) => {
  const {
    name,
    price,
    loading,
    setName,
    setPrice,
    handleSubmit,
  } = useProductForm(onProductCreated);

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-6 p-4 bg-gray-100 rounded">
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Precio</label>
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Guardando..." : "Guardar Producto"}
        </button>
      </form>
    </>
  );
};
