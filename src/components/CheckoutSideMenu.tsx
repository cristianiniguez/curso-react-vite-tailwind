import { useShoppingCart } from '../context';
import SideMenu from './SideMenu';
import OrderCard from './OrderCard';
import { getTotalPrice } from '../utils';

const CheckoutSideMenu = () => {
  const { closeCheckout, isCheckoutOpen, shoppingCartProducts } = useShoppingCart();

  if (!isCheckoutOpen) return null;

  return (
    <SideMenu title='My Order' onClose={closeCheckout}>
      <div className='overflow-y-scroll'>
        {shoppingCartProducts.map((product, i) => (
          <OrderCard key={`order-${product.id}-${i}`} product={product} />
        ))}
      </div>
      <div>
        <p className='flex justify-between items-center mt-6'>
          <span className='font-light'>Total:</span>{' '}
          <span className='font-medium text-2xl'>${getTotalPrice(shoppingCartProducts)}</span>
        </p>
      </div>
    </SideMenu>
  );
};

export default CheckoutSideMenu;
