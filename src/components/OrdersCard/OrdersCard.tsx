interface OrdersCardProps {
  id: string;
  date: Date;
  totalProducts: number;
  totalPrice: number;
}

export const OrdersCard = ({
  id,
  date,
  totalProducts,
  totalPrice,
}: OrdersCardProps): JSX.Element => {
  return (
    <div className="mb-3 flex w-full flex-col rounded-md border border-gray-400 p-2">
      <p className="mb-4 text-2xl font-light">{`Order #${id}`}</p>
      <p className="mb-4 flex items-center justify-between">
        <span className="text-2xl font-light">Order date</span>
        <span className="text-2xl font-light">{date.toLocaleDateString()}</span>
      </p>
      <p className="mb-4 text-2xl font-light">
        <span>{`Total products: ${totalProducts}`}</span>
      </p>
      <p className="mb-4 text-2xl font-light">
        <span>{`Total price: $${totalPrice}`}</span>
      </p>
    </div>
  );
};
