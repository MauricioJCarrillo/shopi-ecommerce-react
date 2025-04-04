export interface ProductType {
  id: number;
  category: CategoryType;
  creationAt: string; // ISO date string
  description: string;
  images: string[];
  price: number;
  title: string;
  updatedAt: string; // ISO date string
}

export interface CategoryType {
  id: number;
  creationAt: string; // ISO date string
  image: string;
  name: string;
  updatedAt: string; // ISO date string
}

export interface OrderType {
  date: Date;
  products: ProductType[];
  totalProducts: number;
  totalPrice: number;
}
