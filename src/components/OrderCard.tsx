import { FC } from 'react';
import { HiX } from 'react-icons/hi';

type OrderCardProps = {
  onDelete?: (product: Product) => void;
  product: Product;
};

const OrderCard: FC<OrderCardProps> = ({ onDelete, product }) => {
  return (
    <div className='flex justify-between items-center mb-4'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img
            className='w-full h-full rounded-lg object-cover'
            src={product.images[0]}
            alt={product.title}
          />
        </figure>
        <p className='text-sm font-light'>{product.title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium text-end'>${product.price}</p>
        {onDelete && (
          <button onClick={() => onDelete(product)}>
            <HiX className='w-6 h-6' />
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
