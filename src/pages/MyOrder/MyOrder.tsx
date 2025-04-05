import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { OrderCard } from "../../components/OrderCard/OrderCard";

export const MyOrder = (): JSX.Element => {
  const { order } = useContext(ShoppingCartContext);
  console.log("Order", order);

  return (
    <>
      <h1 className="mb-4 text-2xl font-bold">My Order</h1>
      <section className="flex w-80 flex-col">
        {order &&
          order.length > 0 &&
          order?.map((product) => {
            return (
              <div key={product.date.toLocaleTimeString()}>
                <p className="flex items-center justify-between pb-2">
                  <span className="text-2xl font-light">Order date</span>
                  <span className="text-2xl font-bold">
                    {product.date.toLocaleDateString()}
                  </span>
                </p>

                <p className="mb-4 text-2xl font-light">Products:</p>
                {product.products?.map((product) => (
                  <OrderCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    imageURL={product.images[0]}
                    price={product.price}
                  />
                ))}
                <p className="flex items-center justify-between pb-6">
                  <span className="text-2xl font-light">Total Products</span>
                  <span className="text-2xl font-bold">
                    {product.totalProducts}
                  </span>
                </p>
                <p className="flex items-center justify-between pb-6">
                  <span className="text-2xl font-light">Total Price</span>
                  <span className="text-2xl font-bold">
                    ${product.totalPrice}
                  </span>
                </p>
              </div>
            );
          })}
      </section>
    </>
  );
};
