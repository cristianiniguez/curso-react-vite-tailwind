import { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useState } from 'react';

type ShoppingCartContextValue = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

export const ShoppingCartContext = createContext<ShoppingCartContextValue>({
  count: 0,
  setCount: () => null,
});

export const ShoppingCartProvider: FC<PropsWithChildren> = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <ShoppingCartContext.Provider value={{ count, setCount }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
