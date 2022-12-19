import { React, createContext, useState, useEffect } from "react";

export const CategoryContext = createContext({
  Category: [],
  setCategory: () => {},
});

export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState([]);
  const fetchData = async () => {
    const myData = await fetch("https://dummyjson.com/products/categories");
    let result = await myData.json();

    setCategory(result);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const value = { category, setCategory };
  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
