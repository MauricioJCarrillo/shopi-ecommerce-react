import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { ProductType } from "../models/Products";
import { apiUrl } from "../api";

type Props = {
  children: JSX.Element;
};

type ProductContextType = {
  products: ProductType[];
  setProducts: Dispatch<SetStateAction<ProductType[]>>;
  searchProduct: string;
  setSearchProduct: Dispatch<SetStateAction<string>>;
};

const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType,
);

const ProductProvider = ({ children }: Props): JSX.Element => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchProduct, setSearchProduct] = useState<string>("");

  useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        return setProducts(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        searchProduct,
        setSearchProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
