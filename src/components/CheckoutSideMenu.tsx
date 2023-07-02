import { useShoppingCart } from '../context';
import SideMenu from './SideMenu';

const CheckoutSideMenu = () => {
  const { closeCheckout, isCheckoutOpen } = useShoppingCart();

  if (!isCheckoutOpen) return null;

  return (
    <SideMenu title='My Order' onClose={closeCheckout}>
      CheckoutSideMenu
    </SideMenu>
  );
};

export default CheckoutSideMenu;
