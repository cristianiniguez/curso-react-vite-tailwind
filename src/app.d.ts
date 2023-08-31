type Category = {
  id: number;
  name: string;
  image: string;
  creationAt: string;
};

type Product = {
  id: number;
  title: string;
  description: string;
  category: Category;
  images: string[];
  price: number;
  creationAt: string;
  updatedAt: string;
};

type Order = {
  id: number;
  date: string;
  products: Product[];
};
