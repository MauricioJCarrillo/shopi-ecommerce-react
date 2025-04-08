import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { OrderCard } from "../../components/OrderCard/OrderCard";

export const MyOrder = (): JSX.Element => {
  const { orders } = useContext(ShoppingCartContext);
  console.log("Orders", orders);

  const currentPath = window.location.pathname;
  const lastPath = currentPath.split("/").pop();

  const params = useParams();
  const orderId = params.orderId;

  const order =
    lastPath === "last"
      ? orders?.[orders.length - 1]
      : orders?.find((order) => order.id === orderId);

  return (
    <>
      {order ? (
        <>
          <div className="relative mb-6 flex w-80 items-center justify-center">
            <Link to="/my-orders" className="absolute left-0">
              <ChevronLeftIcon className="h-6 w-6 cursor-pointer text-black" />
            </Link>
            <h1 className="text-2xl font-normal">My Order</h1>
          </div>
          <section className="flex w-80 flex-col">
            <div
              key={order?.id}
              className="mb-3 flex w-full flex-col rounded-md border border-gray-400 p-2"
            >
              <p className="flex items-center justify-between pb-2">
                <span className="text-2xl font-light">Order date</span>
                <span className="text-2xl font-bold">
                  {order?.date.toLocaleDateString()}
                </span>
              </p>

              <p className="mb-4 text-2xl font-light">Products:</p>
              {order?.products.map((product) => (
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
                  {order?.totalProducts}
                </span>
              </p>
              <p className="flex items-center justify-between pb-6">
                <span className="text-2xl font-light">Total Price</span>
                <span className="text-2xl font-bold">${order?.totalPrice}</span>
              </p>
            </div>
          </section>
        </>
      ) : (
        <>
          <div>No existe la orden</div>
        </>
      )}
    </>
  );
};
