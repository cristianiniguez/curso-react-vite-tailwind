import { useShoppingCart } from '../context';
import SideMenu from './SideMenu';

const ProductDetails = () => {
  const { closeProductDetails, productDetails } = useShoppingCart();

  if (!productDetails) return null;

  return (
    <SideMenu title='Detail' onClose={closeProductDetails}>
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
    </SideMenu>
  );
};

export default ProductDetails;
