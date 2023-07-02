import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

type ShoppingCartContextValue = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  productDetails: Product | null;
  openProductDetails: (product: Product) => void;
  closeProductDetails: () => void;
  shoppingCartProducts: Product[];
  setShoppingCartProducts: Dispatch<SetStateAction<Product[]>>;
};

export const ShoppingCartContext = createContext<ShoppingCartContextValue>({
  count: 0,
  setCount: () => null,
  productDetails: null,
  openProductDetails: () => null,
  closeProductDetails: () => null,
  shoppingCartProducts: [],
  setShoppingCartProducts: () => null,
});

export const ShoppingCartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [count, setCount] = useState(0);

  const [productDetails, setProductDetails] = useState<Product | null>(null);
  const openProductDetails = (product: Product) => setProductDetails(product);
  const closeProductDetails = () => setProductDetails(null);

  const [shoppingCartProducts, setShoppingCartProducts] = useState<Product[]>([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        productDetails,
        openProductDetails,
        closeProductDetails,
        setShoppingCartProducts,
        shoppingCartProducts,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => useContext(ShoppingCartContext);
