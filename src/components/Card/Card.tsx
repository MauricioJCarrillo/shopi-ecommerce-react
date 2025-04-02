import { useContext } from "react";
import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { ProductType } from "../../models/Products";

export const Card = (product: ProductType): JSX.Element => {
  const {
    setCounter,
    openProductDetail,
    closeProductDetail,
    setProductToShow,
    cartProducts,
    setCartProducts,
    openCheckoutSideMenu,
  } = useContext(ShoppingCartContext);

  const { id, category, images, title, price } = product;

  const addItemToCart = (
    event: React.MouseEvent<HTMLButtonElement>,
    productData: ProductType,
  ) => {
    event.stopPropagation();
    setCounter((prev: number): number => prev + 1);
    setCartProducts([...cartProducts, productData]);
    closeProductDetail();
    openCheckoutSideMenu();
  };

  const showProduct = () => {
    openProductDetail();
    setProductToShow({ ...product });
  };

  const isInCart = cartProducts.some((product) => product.id === id);

  return (
    <>
      <article
        className="h-60 w-56 cursor-pointer rounded-lg bg-white"
        onClick={() => {
          showProduct();
        }}
      >
        <figure className="relative mb-2 h-4/5 w-full">
          <figcaption className="absolute bottom-0 left-0 m-2 rounded-lg bg-white/60 px-3 py-0.5 text-xs text-black">
            {category.name}
          </figcaption>
          <img
            className="h-full w-full rounded-lg object-cover"
            src={images[0]}
            alt={title}
          />
          <button
            className={`hover:bg-blue-500" + absolute right-0 top-0 m-2 flex h-6 w-6 items-center justify-center rounded-full p-1 ${
              isInCart ? "bg-black" : "bg-white"
            }`}
            onClick={(event) => addItemToCart(event, product)}
            disabled={isInCart}
          >
            {isInCart ? (
              <CheckIcon className="h-6 w-6 text-white" />
            ) : (
              <PlusIcon className="h-6 w-6 text-black" />
            )}
          </button>
        </figure>
        <p className="flex items-center justify-between">
          <span className="text-sm font-light">{title}</span>
          <span className="text-lg font-medium">${price}</span>
        </p>
      </article>
    </>
  );
};
