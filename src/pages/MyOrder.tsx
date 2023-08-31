import { useShoppingCart } from '../context';
import Layout from '../components/Layout';
import OrderProductCard from '../components/OrderProductCard';

const MyOrder = () => {
  const { orders } = useShoppingCart();
  const [lastOrder] = orders.slice(-1);

  if (!lastOrder) return null;

  return (
    <Layout>
      <div className='max-w-sm mx-auto'>
        <h1 className='text-xl text-center mb-4'>My Last Order</h1>
        {lastOrder.products.map(product => (
          <OrderProductCard key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
};

export default MyOrder;
