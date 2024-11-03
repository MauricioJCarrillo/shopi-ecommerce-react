import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { apiUrl } from "../../api";
import { ProductDetail } from "../../components/ProductDetail/ProductDetail.tsx";
import { ProductType } from "../../models/Products.tsx";

export const Home = (): JSX.Element => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        return setProducts(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1>Home</h1>
      <section className="grid w-full max-w-screen-lg grid-cols-4 gap-4">
        {products?.map((product: ProductType) => {
          return <Card key={product.id} {...product} />;
        })}
      </section>
      <ProductDetail />
    </>
  );
};
