import { useDashboardData } from '../hooks/useDashboardData';
import {ProductList} from '../components/ProductList';
import { OrderList } from '../components/OrdersList';

export const Dashboard = () => {
  const {  loading } = useDashboardData();

  if (loading) return <p className="text-center mt-6">Cargando órdenes...</p>;

  return (
    <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      <ProductList/>
      
      <OrderList/>
    </div>
  );
};

