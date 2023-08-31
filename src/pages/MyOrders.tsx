import { useShoppingCart } from '../context';
import Layout from '../components/Layout';
import OrderCard from '../components/OrderCard';

const MyOrders = () => {
  const { orders } = useShoppingCart();

  return (
    <Layout>
      <div className='max-w-sm mx-auto'>
        <h1 className='text-xl text-center mb-4'>My Orders</h1>
        {orders.map(order => (
          <OrderCard key={`order-${order.id}`} order={order} />
        ))}
      </div>
    </Layout>
  );
};

export default MyOrders;
