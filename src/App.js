import { useState, useEffect } from "react";
import Home from "./routes/home/Home";
import Authentication from "./routes/authentication/Authentication";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation";

function Shop() {
  return <p>My Shop</p>;
}
function Contact() {
  return <p>Contact</p>;
}

function App() {
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

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="authentication" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
