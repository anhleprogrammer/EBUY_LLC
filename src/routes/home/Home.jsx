import { useState, useEffect } from "react";
import Directory from "../../components/directory/Directory";
const categories = [
  {
    id: 1,
    name: "Smartphones",
  },
  {
    id: 2,
    name: "Laptops",
  },
  {
    id: 3,
    name: "Home-Decoration",
  },
  {
    id: 4,
    name: "Furniture",
  },
  {
    id: 5,
    name: "Mens-Watches",
  },
  {
    id: 6,
    name: "Sunglasses",
  },
];
function Home() {
  // const [data, setData] = useState([]);
  // const fetchData = async () => {
  //   const myData = await fetch("https://dummyjson.com/products?limit=100");
  //   let result = await myData.json();
  //   result = result.products.filter(
  //     (item) =>
  //       item.category === "smartphones" ||
  //       item.category === "laptops" ||
  //       item.category === "home-decoration" ||
  //       item.category === "furniture" ||
  //       item.category === "mens-watches" ||
  //       item.category === "sunglasses"
  //   );
  //   setData(result);
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return <Directory categories={categories} />;
}

export default Home;
