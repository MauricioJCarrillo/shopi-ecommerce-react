interface OrderCardProps {
  title: string;
  imageURL: string;
  price: number;
}

export const OrderCard = ({
  title,
  imageURL,
  price,
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
    </div>
  );
};
