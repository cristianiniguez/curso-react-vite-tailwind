import { FC } from 'react';
import { Link } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';
import { getTotalPrice } from '../utils';

type OrderCardProps = {
  order: Order;
};

const OrderCard: FC<OrderCardProps> = ({ order }) => {
  return (
    <Link className='block mb-4 border border-black rounded-lg p-4' to={`/my-orders/${order.id}`}>
      <div className='flex justify-between items-center'>
        <div className='flex flex-col'>
          <span>{order.date}</span>
          <span>{order.products.length} article(s)</span>
        </div>
        <div className='flex items-center'>
          <span className='text-lg font-medium text-end'>${getTotalPrice(order.products)}</span>
          <HiChevronRight />
        </div>
      </div>
    </Link>
  );
};

export default OrderCard;
