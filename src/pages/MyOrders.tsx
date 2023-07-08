import { useShoppingCart } from '../context';
import Layout from '../components/Layout';
import OrderCard from '../components/OrderCard';

const MyOrders = () => {
  const { orders } = useShoppingCart();
  const [lastOrder] = orders.slice(-1);

  if (!lastOrder) return null;

  return (
    <Layout>
      <div className='max-w-sm mx-auto'>
        {lastOrder.products.map(product => (
          <OrderCard key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
};

export default MyOrders;
