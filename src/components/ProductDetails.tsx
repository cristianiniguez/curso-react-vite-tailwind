import { HiX } from 'react-icons/hi';

const ProductDetails = () => {
  return (
    <aside className='w-96 flex flex-col fixed top-20 bottom-0 right-0 border border-black rounded-lg bg-white p-6'>
      <div className='flex justify-between items-center'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <HiX className='w-6 h-6' />
      </div>
    </aside>
  );
};

export default ProductDetails;
