import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { OrderCard } from "../OrderCard/OrderCard";

export const CheckoutSideMenu = (): JSX.Element => {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts } =
    useContext(ShoppingCartContext);

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

          <section className="p-6">
            {cartProducts?.map((product) => (
              <OrderCard
                key={product.id}
                title={product.title}
                imageURL={product.images[0]}
                price={product.price}
              />
            ))}
          </section>
        </aside>
      )}
    </>
  );
};
