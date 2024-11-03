import { createContext, Dispatch, SetStateAction, useState } from "react";
import { ProductType } from "../models/Products";

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
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
