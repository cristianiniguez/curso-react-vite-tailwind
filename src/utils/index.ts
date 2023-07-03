export const getTotalPrice = (products: Product[]) =>
  products.reduce((sum, product) => sum + product.price, 0);
