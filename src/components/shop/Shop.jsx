import { React, useContext, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import Product from "../product/Product";
import "./shop.styles.scss";

function Shop({ category }) {
  let { products } = useContext(ProductContext);

  products = products.filter((product) => product.category === category);
  return (
    <div className="shop-container">
      <div className="shop-container-body">
        {products &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default Shop;
