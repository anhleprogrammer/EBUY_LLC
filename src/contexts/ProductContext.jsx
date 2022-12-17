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
    result = result.products.filter(
      (item) =>
        item.category === "smartphones" ||
        item.category === "laptops" ||
        item.category === "home-decoration" ||
        item.category === "furniture" ||
        item.category === "mens-watches" ||
        item.category === "sunglasses"
    );
    for (let product of result) {
      product.rating = generateRandom(1, 5);
      product.reviews = generateRandom(120, 12000);
    }

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
