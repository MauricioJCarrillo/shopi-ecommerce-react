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
  searchedProduct: string;
  setSearchedProduct: Dispatch<SetStateAction<string>>;
  filteredProducts: ProductType[];
  setFilteredProducts: Dispatch<SetStateAction<ProductType[]>>;
};

const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType,
);

const ProductProvider = ({ children }: Props): JSX.Element => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchedProduct, setSearchedProduct] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetch(`${apiUrl}/products`)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        return setProducts(data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (searchedProduct === "") {
      setFilteredProducts(products);
      return;
    }

    const filteredProductsByTitle = products?.filter((product: ProductType) =>
      product.title.toLowerCase().includes(searchedProduct),
    );

    setFilteredProducts(filteredProductsByTitle);
  }, [products, searchedProduct]);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        searchedProduct,
        setSearchedProduct,
        filteredProducts,
        setFilteredProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
