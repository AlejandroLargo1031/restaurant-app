import { useCreateOrder } from '../hooks/useCreateOrder';

export const CreateOrder = ({ onOrderCreated }: { onOrderCreated?: () => void }) => {
  const {
    products,
    selectedIds,
    loading,
    lastOrder,
    total,
    handleCheckboxChange,
    handleSubmit
  } = useCreateOrder(onOrderCreated);

  return (
    <div className="bg-white p-4 shadow rounded">
      <h2 className="text-xl font-bold mb-4">Crear Orden</h2>
      <ul className="space-y-2">
        {products.map(product => (
          <li key={product.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedIds.includes(product.id)}
              onChange={() => handleCheckboxChange(product.id)}
            />
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <p className="mt-4 font-semibold">Total: ${Number(total).toFixed(2)}</p>
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Creando...' : 'Crear Orden'}
      </button>

      {lastOrder && (
        <div className="mt-6 border-t pt-4">
          <h3 className="text-lg font-bold mb-2">Última Orden</h3>
          <p><strong>ID:</strong> {lastOrder.id}</p>
          <p><strong>Total:</strong> ${Number(lastOrder.total).toFixed(2)}</p>
          <p><strong>Fecha:</strong> {new Date(lastOrder.created_at).toLocaleString()}</p>
          <p className="mt-2 font-semibold">Productos:</p>
          <ul className="list-disc list-inside ml-4">
            {lastOrder.products.map(product => (
              <li key={product.id}>{product.name} - ${product.price}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
