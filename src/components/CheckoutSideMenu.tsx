import { useNavigate } from 'react-router-dom';
import { useShoppingCart } from '../context';
import SideMenu from './SideMenu';
import OrderCard from './OrderCard';
import { getTotalPrice } from '../utils';

const CheckoutSideMenu = () => {
  const {
    closeCheckout,
    isCheckoutOpen,
    setOrders,
    setShoppingCartProducts,
    shoppingCartProducts,
  } = useShoppingCart();

  const navigate = useNavigate();

  if (!isCheckoutOpen) return null;

  const onProductDelete = (product: Product) => {
    setShoppingCartProducts(products => products.filter(p => p.id !== product.id));
  };

  const handleCheckout = () => {
    const orderToAdd = { date: '01-02-2023', products: shoppingCartProducts };
    setOrders(orders => [...orders, orderToAdd]);
    setShoppingCartProducts([]);
    navigate('/my-orders/last');
  };

  return (
    <SideMenu title='My Order' onClose={closeCheckout}>
      <div className='overflow-y-scroll flex-1'>
        {shoppingCartProducts.map((product, i) => (
          <OrderCard
            key={`order-${product.id}-${i}`}
            onDelete={onProductDelete}
            product={product}
          />
        ))}
      </div>
      <div>
        <p className='flex justify-between items-center mt-6 mb-2'>
          <span className='font-light'>Total:</span>{' '}
          <span className='font-medium text-2xl'>${getTotalPrice(shoppingCartProducts)}</span>
        </p>
        <button className='bg-black w-full py-3 text-white rounded-lg' onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </SideMenu>
  );
};

export default CheckoutSideMenu;
