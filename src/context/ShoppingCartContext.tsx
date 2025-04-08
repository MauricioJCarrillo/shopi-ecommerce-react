import { createContext, Dispatch, SetStateAction, useState } from "react";
import { OrderType, ProductType } from "../models/Products";

type Props = {
  children: JSX.Element;
};

type ShoppingCartContextType = {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
  isProductDetailOpen: boolean;
  closeProductDetail: () => void;
  openProductDetail: () => void;
  productToShow: ProductType;
  setProductToShow: Dispatch<SetStateAction<ProductType>>;
  cartProducts: ProductType[];
  setCartProducts: Dispatch<SetStateAction<ProductType[]>>;
  isCheckoutSideMenuOpen: boolean;
  closeCheckoutSideMenu: () => void;
  openCheckoutSideMenu: () => void;
  orders: OrderType[];
  setOrders: Dispatch<SetStateAction<OrderType[]>>;
};

const ShoppingCartContext = createContext<ShoppingCartContextType>(
  {} as ShoppingCartContextType,
);

const ShoppingCartProvider = ({ children }: Props): JSX.Element => {
  // Shopping Cart: Increment quantity
  const [counter, setCounter] = useState<number>(0);

  // Product Detail: Open / Close
  const [isProductDetailOpen, setIsProductDetailOpen] =
    useState<boolean>(false);

  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
  };

  const openProductDetail = () => {
    setIsProductDetailOpen(true);
  };

  // Product Detail: Show product detail
  const [productToShow, setProductToShow] = useState<ProductType>(
    {} as ProductType,
  );

  // Shopping Cart: Adding products to Cart
  const [cartProducts, setCartProducts] = useState<ProductType[]>([]);

  // Checkout Side Menu: Open / Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] =
    useState<boolean>(false);

  const closeCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(false);
  };

  const openCheckoutSideMenu = () => {
    setIsCheckoutSideMenuOpen(true);
  };

  // Shopping Cart: My orders
  const [orders, setOrders] = useState<OrderType[]>([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        counter,
        setCounter,
        isProductDetailOpen,
        closeProductDetail,
        openProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        closeCheckoutSideMenu,
        openCheckoutSideMenu,
        orders,
        setOrders,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
