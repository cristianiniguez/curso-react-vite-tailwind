const Card = () => {
  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
      <figure className='relative mb-2 h-4/5 rounded-lg overflow-hidden'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xd m-2 px-3 py-0.5'>
          Electronics
        </span>
        <img className='w-full h-full object-cover' src='/images/headphones.jpg' alt='headphones' />
        <div className='absolute top-0 right-0 bg-white w-6 h-6 rounded-full grid place-items-center m-2'>
          +
        </div>
      </figure>
      <p className='flex justify-between'>
        <span className='test-sm font-light'>Headphones</span>
        <span className='test-lg font-medium'>$300</span>
      </p>
    </div>
  );
};

export default Card;
