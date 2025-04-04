import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { OrderCard } from "../OrderCard/OrderCard";
import { calculateTotalPrice } from "../../utils/totalPrice.ts";
import { OrderType } from "../../models/Products";

export const CheckoutSideMenu = (): JSX.Element => {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProducts,
    setCounter,
    setOrder,
  } = useContext(ShoppingCartContext);

  const handleDelete = (id: number) => {
    const updatedCart = cartProducts.filter((product) => product.id !== id);
    setCartProducts(updatedCart);
    setCounter((prev: number): number => prev - 1);
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout...");
    const orderToAdd = {
      date: new Date(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: calculateTotalPrice(cartProducts),
    };

    setOrder((prev: OrderType[]) => [...prev, orderToAdd]);
    setCartProducts([]);
    setCounter(0);
    closeCheckoutSideMenu();
  };

  return (
    <>
      {isCheckoutSideMenuOpen && (
        <aside className="fixed right-0 top-[68px] flex h-[calc(100vh-68px)] w-[360px] flex-col rounded-lg border border-black bg-white">
          <section className="flex items-center justify-between p-6">
            <h2 className="text-xl font-medium">My Order</h2>
            <XMarkIcon
              className="h-6 w-6 cursor-pointer text-black"
              onClick={closeCheckoutSideMenu}
            />
          </section>

          <section className="flex-1 overflow-y-scroll p-6">
            {cartProducts?.map((product) => (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                imageURL={product.images[0]}
                price={product.price}
                handleDelete={handleDelete}
              />
            ))}
          </section>

          <section className="sticky bottom-0 left-0 right-0 p-6">
            <p className="flex items-center justify-between pb-6">
              <span className="text-2xl font-light">Total</span>
              <span className="text-2xl font-bold">
                ${calculateTotalPrice(cartProducts)}
              </span>
            </p>
            <button
              className="w-full rounded-lg bg-black px-3 py-2 text-white"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </section>
        </aside>
      )}
    </>
  );
};
