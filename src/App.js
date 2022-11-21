import "./App.css";
import { useState, useEffect } from "react";

const categories = [
  {
    id: 1,
    name: "smartphones",
  },
  {
    id: 2,
    name: "laptops",
  },
  {
    id: 3,
    name: "home-decoration",
  },
  {
    id: 4,
    name: "furniture",
  },
  {
    id: 5,
    name: "mens-watches",
  },
  {
    id: 6,
    name: "sunglasses",
  },
];
function App() {
  const [data, setData] = useState([]);
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
    setData(result);
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(categories);

  return (
    <div className="categories-container">
      {categories.map((category) => {
        return (
          <div key={category.id} className="category-container">
            <div className="category-background-image--container">
              {" "}
              <img
                className="category-background-image"
                src={`${category.name}.png`}
              />
            </div>
            <div className="category-body-container">
              <h2>{category.name}</h2>
              <button>Shop Now</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
