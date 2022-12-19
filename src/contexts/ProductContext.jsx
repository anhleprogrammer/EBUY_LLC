import { createContext, useState, useEffect } from "react";
//import list of product here
export const ProductContext = createContext({
  products: [],
  setProduct: () => null,
});

const generateRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  const fetchData = async () => {
    const myData = await fetch("https://dummyjson.com/products?limit=100");
    let result = await myData.json();

    for (let product of result.products) {
      product.rating = generateRandom(1, 5);
      product.reviews = generateRandom(120, 12000);
    }

    setProducts(result.products);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const value = { products, setProducts };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
