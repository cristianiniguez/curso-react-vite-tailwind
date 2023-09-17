import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useShoppingCart } from '../context';
import Card from '../components/Card';
import Layout from '../components/Layout';
import ProductDetails from '../components/ProductDetails';

const Home = () => {
  const { category = '' } = useParams();
  const { products } = useShoppingCart();

  const [search, setSearch] = useState('');
  const filteredProducts = useMemo(
    () =>
      products.filter(
        product =>
          new RegExp(search, 'i').test(product.title) &&
          new RegExp(category, 'i').test(product.category.name),
      ),
    [products, search, category],
  );

  useEffect(() => setSearch(''), [category]);

  const renderProducts = () => {
    if (!filteredProducts.length) return <p className='text-center'>We don't have anything</p>;

    return (
      <div className='grid gap-4 grid-cols-4'>
        {filteredProducts.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    );
  };

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
            value={search}
          />
        </div>
        {renderProducts()}
        <ProductDetails />
      </div>
    </Layout>
  );
};

export default Home;
