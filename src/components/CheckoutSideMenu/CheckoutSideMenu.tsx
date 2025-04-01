import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

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

          {cartProducts?.map((cardProduct) => (
            <div>
              <figure>
                <img
                  className="h-10 w-10"
                  src={cardProduct.images[0]}
                  alt={cardProduct.title}
                />
              </figure>
              <p className="flex flex-col p-6">
                <span className="mb-2 text-2xl font-medium">
                  ${cardProduct.price}
                </span>
                <span className="text-md font-medium">{cardProduct.title}</span>
              </p>
            </div>
          ))}
        </aside>
      )}
    </>
  );
};
