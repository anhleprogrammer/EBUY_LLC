import { React, useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import Product from "../product/Product";
import "./shop.styles.scss";

function Shop() {
  const productList = useContext(ProductContext);

  console.log(productList);
  return (
    <div className="shop-container">
      {productList &&
        productList.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
}

export default Shop;
