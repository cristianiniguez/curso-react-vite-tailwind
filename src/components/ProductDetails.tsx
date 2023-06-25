import { HiX } from 'react-icons/hi';
import { useShoppingCart } from '../context';

const ProductDetails = () => {
  const { closeProductDetails, productDetails } = useShoppingCart();

  if (!productDetails) return null;

  return (
    <aside
      className={`w-96 ${
        productDetails ? 'block' : 'hidden'
      } fixed top-20 bottom-0 right-0 border border-black rounded-lg bg-white p-6`}
    >
      <div className='flex justify-between items-center mb-2'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <button onClick={closeProductDetails}>
          <HiX className='w-6 h-6' />
        </button>
      </div>
      <figure className='mb-2'>
        <img
          className='w-full h-full rounded-lg'
          src={productDetails.images[0]}
          alt={productDetails.title}
        />
      </figure>
      <p className='font-medium text-2xl mb-2'>${productDetails.price}</p>
      <p className='font-medium text-md mb-2'>{productDetails.title}</p>
      <p className='font-light text-sm mb-2'>{productDetails.description}</p>
    </aside>
  );
};

export default ProductDetails;
