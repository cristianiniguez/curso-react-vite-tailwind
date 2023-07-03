import { useShoppingCart } from '../context';
import SideMenu from './SideMenu';
import OrderCard from './OrderCard';

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
    </SideMenu>
  );
};

export default CheckoutSideMenu;
