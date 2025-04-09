import {
  ChevronRightIcon,
  ShoppingBagIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";
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
    <div className="mb-3 flex w-96 cursor-pointer flex-col rounded-lg border border-black p-4">
      <p className="mb-4 font-light">Order # {id}</p>

      <div className="flex items-center justify-between">
        <p className="flex flex-col">
          <div className="flex items-center gap-2">
            <CalendarDaysIcon className="h-4 w-4 text-black" />
            <span className="font-light">{date.toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <ShoppingBagIcon className="h-4 w-4 text-black" />
            <span className="font-light">
              {totalProducts} {totalProducts === 1 ? "article" : "articles"}
            </span>
          </div>
        </p>
        <p className="flex items-center gap-2">
          <span className="text-2xl font-medium">${totalPrice} </span>
          <ChevronRightIcon className="h-6 w-6 cursor-pointer text-black" />
        </p>
      </div>
    </div>
  );
};
