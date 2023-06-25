import { HiX } from 'react-icons/hi';
import { useShoppingCart } from '../context';

const ProductDetails = () => {
  const { closeProductDetails, productDetailsId } = useShoppingCart();

  return (
    <aside
      className={`w-96 ${
        productDetailsId ? 'flex' : 'hidden'
      } flex-col fixed top-20 bottom-0 right-0 border border-black rounded-lg bg-white p-6`}
    >
      <div className='flex justify-between items-center'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <button onClick={closeProductDetails}>
          <HiX className='w-6 h-6' />
        </button>
      </div>
    </aside>
  );
};

export default ProductDetails;
