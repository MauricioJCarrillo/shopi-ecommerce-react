import { createContext, Dispatch, SetStateAction, useState } from "react";

type Props = {
  children: JSX.Element;
};

type ShoppingCartContextType = {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
  isProductDetailOpen: boolean;
  closeProductDetail: () => void;
  openProductDetail: () => void;
};

const ShoppingCartContext = createContext<ShoppingCartContextType>(
  {} as ShoppingCartContextType,
);

const ShoppingCartProvider = ({ children }: Props): JSX.Element => {
  const [counter, setCounter] = useState<number>(0);
  const [isProductDetailOpen, setIsProductDetailOpen] =
    useState<boolean>(false);

  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
  };

  const openProductDetail = () => {
    setIsProductDetailOpen(true);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        counter,
        setCounter,
        isProductDetailOpen,
        closeProductDetail,
        openProductDetail,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
