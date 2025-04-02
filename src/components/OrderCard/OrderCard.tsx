import { TrashIcon } from "@heroicons/react/24/solid";
interface OrderCardProps {
  id: number;
  title: string;
  imageURL: string;
  price: number;
  handleDelete: (id: number) => void;
}

export const OrderCard = ({
  id,
  title,
  imageURL,
  price,
  handleDelete,
}: OrderCardProps): JSX.Element => {
  return (
    <div className="mb-3 flex justify-start rounded-md border border-gray-400 p-2">
      <figure className="h-20 w-20">
        <img
          className="h-full w-full rounded-lg object-cover"
          src={imageURL}
          alt={title}
        />
      </figure>
      <p className="ml-2 flex max-w-48 flex-col">
        <span className="text-md font-light">{title}</span>
        <span className="text-2xl font-medium">${price}</span>
      </p>
      <TrashIcon
        className="h-6 w-6 cursor-pointer text-black"
        onClick={() => handleDelete(id)}
      />
    </div>
  );
};
