import { useEffect, useState } from 'react';

function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(products => setProducts(products));
  }, []);

  return products;
}

export default useProducts;
