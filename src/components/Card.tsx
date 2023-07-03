import { FC, MouseEventHandler } from 'react';
import { HiCheck, HiPlus } from 'react-icons/hi';
import { useShoppingCart } from '../context';

type CardProps = { product: Product };

const Card: FC<CardProps> = ({ product }) => {
  const { openCheckout, openProductDetails, setShoppingCartProducts, shoppingCartProducts } =
    useShoppingCart();

  const addProductToCart: MouseEventHandler = event => {
    event.stopPropagation();
    setShoppingCartProducts(products => [...products, product]);
    openCheckout();
  };

  const isProductInCart = shoppingCartProducts.some(p => p.id === product.id);
  const Icon = isProductInCart ? HiCheck : HiPlus;

  return (
    <div className='bg-white rounded-lg cursor-pointer' onClick={() => openProductDetails(product)}>
      <figure className='relative mb-2 aspect-square rounded-lg overflow-hidden'>
        <img className='w-full h-full object-cover' src={product.images[0]} alt={product.title} />
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xd m-2 px-3 py-0.5'>
          {product.category.name}
        </span>
        <button
          className={`absolute top-0 right-0 w-6 h-6 rounded-full grid place-items-center m-2 ${
            isProductInCart ? 'bg-black text-white' : 'bg-white'
          }`}
          disabled={isProductInCart}
          onClick={addProductToCart}
        >
          <Icon />
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
