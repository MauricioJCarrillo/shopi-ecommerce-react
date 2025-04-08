import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { OrdersCard } from "../../components/OrdersCard/OrdersCard";
import { Link } from "react-router-dom";

export const MyOrders = (): JSX.Element => {
  const { orders } = useContext(ShoppingCartContext);

  return (
    <>
      <h1 className="mb-6 text-2xl font-normal">My Orders</h1>

      {orders?.map((order) => {
        return (
          <Link to={`/my-orders/${order.id}`} key={order.id}>
            <OrdersCard
              key={order.id}
              id={order.id}
              date={order.date}
              totalProducts={order.totalProducts}
              totalPrice={order.totalPrice}
            />
          </Link>
        );
      })}
    </>
  );
};
