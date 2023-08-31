import { FC } from 'react';
import { Link } from 'react-router-dom';
import { getTotalPrice } from '../utils';

type OrderCardProps = {
  order: Order;
};

const OrderCard: FC<OrderCardProps> = ({ order }) => {
  return (
    <Link
      className='flex justify-between items-center mb-4 border border-black'
      to={`/my-orders/${order.id}`}
    >
      <p>
        <span>{order.date}</span>
        <span>{order.products.length}</span>
        <span>{getTotalPrice(order.products)}</span>
      </p>
    </Link>
  );
};

export default OrderCard;
