import { createContext, Dispatch, SetStateAction, useState } from "react";

type Props = {
  children: JSX.Element;
};

type ShoppingCartContextType = {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
};

const ShoppingCartContext = createContext<ShoppingCartContextType>(
  {} as ShoppingCartContextType,
);

const ShoppingCartProvider = ({ children }: Props): JSX.Element => {
  const [counter, setCounter] = useState<number>(0);
  console.log("Counter: ", counter);

  return (
    <ShoppingCartContext.Provider
      value={{
        counter,
        setCounter,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
