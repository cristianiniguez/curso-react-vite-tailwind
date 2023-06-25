import { FC, PropsWithChildren } from 'react';
import NavBar from './NavBar';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
