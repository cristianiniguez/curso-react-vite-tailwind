import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';
import useProducts from '../hooks/useProducts';

type ShoppingCartContextValue = {
  products: Product[];
  filteredProducts: Product[];
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
  setSearch: Dispatch<SetStateAction<string>>;
};

export const ShoppingCartContext = createContext<ShoppingCartContextValue | null>(null);

export const ShoppingCartProvider: FC<PropsWithChildren> = ({ children }) => {
  const products = useProducts();

  const [search, setSearch] = useState('');
  const filteredProducts = useMemo(
    () => products.filter(product => new RegExp(search, 'i').test(product.title)),
    [products, search],
  );

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
        filteredProducts,
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
        setSearch,
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
