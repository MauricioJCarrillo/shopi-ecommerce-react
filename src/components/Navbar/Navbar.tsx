import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const navLeft = [
  {
    to: "/",
    text: "Shopi",
    className: "text-lg font-semibold",
  },
  {
    to: "/",
    text: "All",
    className: "",
  },
  {
    to: "/clothes",
    text: "Clothes",
    className: "",
  },
  {
    to: "/electronics",
    text: "Electronics",
    className: "",
  },
  {
    to: "/furnitures",
    text: "Furnitures",
    className: "",
  },
  {
    to: "/toys",
    text: "Toys",
    className: "",
  },
  {
    to: "/others",
    text: "Others",
    className: "",
  },
];

const navRight = [
  {
    to: "/email",
    text: "mauricio@mauriciojcarrillo.com",
    className: "text-black/60",
  },
  {
    to: "/my-orders",
    text: "My orders",
    className: "",
  },
  {
    to: "/my-account",
    text: "My occount",
    className: "",
  },
  {
    to: "/sign-in",
    text: "Sign in",
    className: "",
  },
];

export const Navbar = (): JSX.Element => {
  const { counter } = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="flex w-full items-center justify-between px-8 py-5 text-sm font-light">
      <ul className="flex items-center gap-3">
        {navLeft.map((item) => {
          return (
            <li key={item.text} className={item.className}>
              <NavLink
                to={item.to}
                className={({ isActive }) => {
                  return isActive && item.text !== "Shopi"
                    ? activeStyle
                    : undefined;
                }}
              >
                {item.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <ul className="flex items-center gap-3">
        {navRight.map((item) => {
          return (
            <li key={item.text} className={item.className}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                {item.text}
              </NavLink>
            </li>
          );
        })}
        <li className="flex items-center">
          <ShoppingBagIcon className="h-6 w-6 text-black" />
          <p>{counter}</p>
        </li>
      </ul>
    </nav>
  );
};
