import { useOrder } from '../hooks/useOrder';

export const OrderList = () => {
  const { orders, loading } = useOrder();

  if (loading) return <p className="text-center mt-6">Cargando órdenes...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Órdenes Registradas</h2>
      {orders.length === 0 ? (
        <p>No hay órdenes registradas.</p>
      ) : (
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.id} className="border rounded p-4 shadow bg-white">
              <p className="font-medium text-gray-700"><strong>ID:</strong> {order.id}</p>
              <p className="text-gray-600"><strong>Fecha:</strong> {new Date(order.created_at).toLocaleString()}</p>
              <p className="text-gray-600">
                <strong>Total:</strong> ${!isNaN(Number(order.total)) ? Number(order.total).toFixed(2) : 'N/A'}
              </p>
              <p className="mt-2 font-semibold">Productos:</p>
              <ul className="list-disc list-inside ml-4">
                {Array.isArray(order.products) ? (
                  order.products.map((product) => (
                    <li key={product.id}>{product.name} - ${product.price}</li>
                  ))
                ) : (
                  <li className="text-red-500">No hay productos</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
