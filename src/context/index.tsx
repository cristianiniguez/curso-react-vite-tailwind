import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';
import useProducts from '../hooks/useProducts';

type ShoppingCartContextValue = {
  products: Product[];
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  productDetails: Product | null;
  openProductDetails: (product: Product) => void;
  closeProductDetails: () => void;
  shoppingCartProducts: Product[];
  setShoppingCartProducts: Dispatch<SetStateAction<Product[]>>;
  isCheckoutOpen: boolean;
  openCheckout: () => void;
  closeCheckout: () => void;
  orders: Order[];
  setOrders: Dispatch<SetStateAction<Order[]>>;
};

export const ShoppingCartContext = createContext<ShoppingCartContextValue | null>(null);

export const ShoppingCartProvider: FC<PropsWithChildren> = ({ children }) => {
  const products = useProducts();

  const [count, setCount] = useState(0);

  const [productDetails, setProductDetails] = useState<Product | null>(null);
  const openProductDetails = (product: Product) => setProductDetails(product);
  const closeProductDetails = () => setProductDetails(null);

  const [shoppingCartProducts, setShoppingCartProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const openCheckout = () => setIsCheckoutOpen(true);
  const closeCheckout = () => setIsCheckoutOpen(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        products,
        count,
        setCount,
        productDetails,
        openProductDetails,
        closeProductDetails,
        setShoppingCartProducts,
        shoppingCartProducts,
        isCheckoutOpen,
        openCheckout,
        closeCheckout,
        orders,
        setOrders,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => {
  const shoppingCart = useContext(ShoppingCartContext);

  if (!shoppingCart) throw 'useShoppingCart has to be used under ShoppingCartProvider';

  return shoppingCart;
};
