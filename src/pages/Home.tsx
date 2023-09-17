import { useShoppingCart } from '../context';
import Card from '../components/Card';
import Layout from '../components/Layout';
import ProductDetails from '../components/ProductDetails';

const Home = () => {
  const { setSearch, products } = useShoppingCart();

  return (
    <Layout>
      <div className='max-w-screen-lg mx-auto'>
        <h1 className='text-xl text-center mb-4'>Home</h1>
        <div className='text-center'>
          <input
            className='rounded-lg border border-black w-80 p-4 mb-4'
            type='text'
            placeholder='Search a product'
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className='grid gap-4 grid-cols-4'>
          {products.map(product => (
            <Card key={product.id} product={product} />
          ))}
          <ProductDetails />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
