import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { apiUrl } from "../../api";
import { ProductDetail } from "../../components/ProductDetail/ProductDetail.tsx";

interface ItemType {
  id: number;
  category: CategoryType;
  creationAt: string; // ISO date string
  description: string;
  images: string[];
  price: number;
  title: string;
  updatedAt: string; // ISO date string
}

interface CategoryType {
  id: number;
  creationAt: string; // ISO date string
  image: string;
  name: string;
  updatedAt: string; // ISO date string
}

export const Home = (): JSX.Element => {
  const [items, setItems] = useState<ItemType[]>([]);

  useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        return setItems(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1>Home</h1>
      <section className="grid w-full max-w-screen-lg grid-cols-4 gap-4">
        {items?.map((item: ItemType) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              category={item.category.name}
              price={item.price}
              image={item.images[0]}
            />
          );
        })}
      </section>
      <ProductDetail />
    </>
  );
};
