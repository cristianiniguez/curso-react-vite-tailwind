import { FC } from 'react';
import { HiPlus } from 'react-icons/hi';
import { useShoppingCart } from '../context';

type CardProps = { product: Product };

const Card: FC<CardProps> = ({ product }) => {
  const { count, openProductDetails, setCount } = useShoppingCart();

  return (
    <div
      className='bg-white rounded-lg cursor-pointer'
      onClick={() => openProductDetails(product.id)}
    >
      <figure className='relative mb-2 aspect-square rounded-lg overflow-hidden'>
        <img className='w-full h-full object-cover' src={product.images[0]} alt={product.title} />
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xd m-2 px-3 py-0.5'>
          {product.category.name}
        </span>
        <button
          className='absolute top-0 right-0 bg-white w-6 h-6 rounded-full grid place-items-center m-2'
          onClick={() => setCount(count + 1)}
        >
          <HiPlus />
        </button>
      </figure>
      <p className='flex justify-between'>
        <span className='test-sm font-light'>{product.title}</span>
        <span className='test-lg font-medium'>${product.price}</span>
      </p>
    </div>
  );
};

export default Card;
