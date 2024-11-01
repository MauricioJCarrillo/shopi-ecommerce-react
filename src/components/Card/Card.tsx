import { useContext } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

interface CardProps {
  category: string;
  image: string;
  price: number;
  title: string;
}

export const Card = ({
  category,
  image,
  price,
  title,
}: CardProps): JSX.Element => {
  const { setCounter, openProductDetail } = useContext(ShoppingCartContext);

  const addItemToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setCounter((prev: number): number => prev + 1);
  };

  return (
    <>
      <article
        className="h-60 w-56 cursor-pointer rounded-lg bg-white"
        onClick={() => openProductDetail()}
      >
        <figure className="relative mb-2 h-4/5 w-full">
          <figcaption className="absolute bottom-0 left-0 m-2 rounded-lg bg-white/60 px-3 py-0.5 text-xs text-black">
            {category}
          </figcaption>
          <img
            className="h-full w-full rounded-lg object-cover"
            src={image}
            alt={title}
          />
          <button
            className="absolute right-0 top-0 m-2 flex h-6 w-6 items-center justify-center rounded-full bg-white p-1 hover:bg-blue-500"
            onClick={addItemToCart}
          >
            <PlusIcon className="h-6 w-6 text-black" />
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
