import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

export const ProductDetail = (): JSX.Element => {
  const { closeProductDetail, isProductDetailOpen, productToShow } =
    useContext(ShoppingCartContext);

  const { images, price, title, description } = productToShow;

  return (
    <>
      {isProductDetailOpen && (
        <aside className="fixed right-0 top-[68px] flex h-[calc(100vh-68px)] w-[360px] flex-col rounded-lg border border-black bg-white">
          <section className="flex items-center justify-between p-6">
            <h2 className="text-xl font-medium">Detail</h2>
            <XMarkIcon
              className="h-6 w-6 cursor-pointer text-black"
              onClick={closeProductDetail}
            />
          </section>
          <figure className="px-6">
            <img
              className="h-full w-full rounded-lg"
              src={images[0]}
              alt={title}
            />
          </figure>
          <p className="flex flex-col p-6">
            <span className="mb-2 text-2xl font-medium">${price}</span>
            <span className="text-md font-medium">{title}</span>
            <span className="text-sm font-light">{description}</span>
          </p>
        </aside>
      )}
    </>
  );
};
