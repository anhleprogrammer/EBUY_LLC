import Home from "./routes/home/Home";
import Authentication from "./routes/authentication/Authentication";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation";
import Shop from "./components/shop/Shop";
import Directory from "./components/directory/Directory";
import CategoryPage from "./components/category-page/CategoryPage.jsx";
import ProductPage from "./components/product-page/ProductPage.jsx";
import "./App.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="category" element={<Directory />} />
        <Route path="category/:name" element={<CategoryPage />} />
        <Route path="product/:name" element={<ProductPage />} />
        <Route path="shop" element={<Shop />} />
        <Route path="authentication" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
