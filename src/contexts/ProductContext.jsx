import { createContext, useState, useEffect } from "react";
//import list of product here
export const ProductContext = createContext({
  products: [],
  setProduct: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const fetchData = async () => {
    const myData = await fetch("https://dummyjson.com/products?limit=100");
    let result = await myData.json();
    result = result.products.filter(
      (item) =>
        item.category === "smartphones" ||
        item.category === "laptops" ||
        item.category === "home-decoration" ||
        item.category === "furniture" ||
        item.category === "mens-watches" ||
        item.category === "sunglasses"
    );
    setProducts(result);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};
