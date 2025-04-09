import { useContext } from "react";
import { Card } from "../../components/Card/Card";
import { ProductDetail } from "../../components/ProductDetail/ProductDetail.tsx";
import { ProductType } from "../../models/Products.tsx";
import { CheckoutSideMenu } from "../../components/CheckoutSideMenu/CheckoutSideMenu.tsx";
import { ProductContext } from "../../context/ProductContext.tsx";

export const Home = (): JSX.Element => {
  const { products } = useContext(ProductContext);

  return (
    <>
      <h1 className="mb-6 text-2xl font-normal">Home</h1>
      <section className="grid w-full max-w-screen-lg grid-cols-4 gap-4">
        {products?.map((product: ProductType) => {
          return <Card key={product.id} {...product} />;
        })}
      </section>
      <ProductDetail />
      <CheckoutSideMenu />
    </>
  );
};
