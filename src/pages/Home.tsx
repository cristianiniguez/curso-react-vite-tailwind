import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Layout from '../components/Layout';
import ProductDetails from '../components/ProductDetails';

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(products => setProducts(products));
  }, []);

  return (
    <Layout>
      <div className='grid gap-4 grid-cols-4 max-w-screen-lg mx-auto'>
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
        <ProductDetails />
      </div>
    </Layout>
  );
};

export default Home;
