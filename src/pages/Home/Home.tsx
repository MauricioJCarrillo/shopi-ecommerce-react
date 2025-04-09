import { useContext } from "react";
import { Card } from "../../components/Card/Card";
import { ProductDetail } from "../../components/ProductDetail/ProductDetail.tsx";
import { ProductType } from "../../models/Products.tsx";
import { CheckoutSideMenu } from "../../components/CheckoutSideMenu/CheckoutSideMenu.tsx";
import { ProductContext } from "../../context/ProductContext.tsx";

export const Home = (): JSX.Element => {
  const { products, searchProduct, setSearchProduct } =
    useContext(ProductContext);

  console.log("Input value: ", searchProduct);

  return (
    <>
      <h1 className="mb-6 text-2xl font-normal">Exclusive Products</h1>
      <input
        type="text"
        placeholder="Search product..."
        className="mb-8 w-96 rounded-lg border border-black p-4 text-black placeholder-gray-400 outline-none"
        value={searchProduct}
        onChange={(e) => setSearchProduct(e.target.value)}
      />
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
