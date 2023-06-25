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
};

export const ShoppingCartContext = createContext<ShoppingCartContextValue>({
  count: 0,
  setCount: () => null,
  productDetails: null,
  openProductDetails: () => null,
  closeProductDetails: () => null,
});

export const ShoppingCartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [count, setCount] = useState(0);

  const [productDetails, setProductDetails] = useState<Product | null>(null);
  const openProductDetails = (product: Product) => setProductDetails(product);
  const closeProductDetails = () => setProductDetails(null);

  return (
    <ShoppingCartContext.Provider
      value={{ count, setCount, productDetails, openProductDetails, closeProductDetails }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => useContext(ShoppingCartContext);
