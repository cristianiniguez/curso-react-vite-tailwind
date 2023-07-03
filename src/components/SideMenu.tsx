import { FC, PropsWithChildren, ReactNode } from 'react';
import { HiX } from 'react-icons/hi';

type SideMenuProps = {
  onClose: () => void;
  title: ReactNode;
};

const SideMenu: FC<PropsWithChildren<SideMenuProps>> = ({ children, onClose, title }) => {
  return (
    <aside className='w-96 fixed top-20 bottom-0 right-0 border border-black rounded-lg bg-white p-6'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='font-medium text-xl'>{title}</h2>
        <button onClick={onClose}>
          <HiX className='w-6 h-6' />
        </button>
      </div>
      {children}
    </aside>
  );
};

export default SideMenu;
