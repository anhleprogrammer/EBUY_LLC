import { React, useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import Product from "../product/Product";
import "./shop.styles.scss";

function Shop() {
  const { products } = useContext(ProductContext);

  return (
    <div className="shop-container">
      {products &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
}

export default Shop;
