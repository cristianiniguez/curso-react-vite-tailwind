import { FC, PropsWithChildren, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { ShoppingCartContext } from '../context';

type NavItemProps = {
  className?: string;
  to: string;
};

const NavItem: FC<PropsWithChildren<NavItemProps>> = ({ className, children, to }) => {
  return (
    <NavLink
      className={({ isActive }) => clsx(className, { 'underline underline-offset-4': isActive })}
      to={to}
    >
      {children}
    </NavLink>
  );
};

const NavBar = () => {
  const { count } = useContext(ShoppingCartContext);

  return (
    <nav className='flex justify-between items-center sticky z-10 w-full px-8 py-5 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavItem to='/'>Shopi</NavItem>
        </li>
        <li>
          <NavItem to='/'>All</NavItem>
        </li>
        <li>
          <NavItem to='/clothes'>Clothes</NavItem>
        </li>
        <li>
          <NavItem to='/electronics'>Electronics</NavItem>
        </li>
        <li>
          <NavItem to='/furnitures'>Furnitures</NavItem>
        </li>
        <li>
          <NavItem to='/toys'>Toys</NavItem>
        </li>
        <li>
          <NavItem to='/others'>Others</NavItem>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>someone@gmail.com</li>
        <li>
          <NavItem to='/my-orders'>My Orders</NavItem>
        </li>
        <li>
          <NavItem to='/my-account'>My Account</NavItem>
        </li>
        <li>
          <NavItem to='sign-in'>Sign In</NavItem>
        </li>
        <li>🛒 {count}</li>
      </ul>
    </nav>
  );
};

export default NavBar;
