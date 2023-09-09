import { useParams } from 'react-router-dom';
import { useShoppingCart } from '../context';
import Layout from '../components/Layout';
import OrderProductCard from '../components/OrderProductCard';

const MyOrder = () => {
  const { orders } = useShoppingCart();
  const { orderId = '' } = useParams();

  const order =
    orderId === 'last' ? orders.slice(-1)[0] : orders.find(order => order.id === +orderId);
  if (!order) return null;

  return (
    <Layout>
      <div className='max-w-sm mx-auto'>
        <h1 className='text-xl text-center mb-4'>My Order ({orderId})</h1>
        {order.products.map(product => (
          <OrderProductCard key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
};

export default MyOrder;
