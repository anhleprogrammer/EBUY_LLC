import { React, useContext, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import Product from "../product/Product";
import "./shop.styles.scss";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
function Shop({ category }) {
  let { products } = useContext(ProductContext);
  if (products)
    products = products.filter((product) => product.category === category);
  return (
    <div className="shop-container">
      <div className="shop-container-body">
        {products &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        {/* <TfiArrowCircleLeft className="left-arr" />
        <TfiArrowCircleRight className="right-arr" /> */}
      </div>
    </div>
  );
}

export default Shop;
