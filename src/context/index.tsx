import { FC, PropsWithChildren, createContext } from 'react';

const ShoppingCartContext = createContext({});

export const ShoppingCartProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ShoppingCartContext.Provider value={{}}>{children}</ShoppingCartContext.Provider>;
};
