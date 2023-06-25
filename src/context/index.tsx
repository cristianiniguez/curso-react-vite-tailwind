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
  productDetailsId: number | null;
  openProductDetails: (productId: number) => void;
  closeProductDetails: () => void;
};

export const ShoppingCartContext = createContext<ShoppingCartContextValue>({
  count: 0,
  setCount: () => null,
  productDetailsId: null,
  openProductDetails: () => null,
  closeProductDetails: () => null,
});

export const ShoppingCartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [count, setCount] = useState(0);
  const [productDetailsId, setProductDetailsId] = useState<number | null>(null);

  const openProductDetails = (productId: number) => setProductDetailsId(productId);
  const closeProductDetails = () => setProductDetailsId(null);

  return (
    <ShoppingCartContext.Provider
      value={{ count, setCount, productDetailsId, openProductDetails, closeProductDetails }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => useContext(ShoppingCartContext);
