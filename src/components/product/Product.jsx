import { React } from "react";
import "./product.styles.scss";
function Product({ product }) {
  return (
    <div className="product-container">
      <img src={product.images[0]} alt={product.title} />
      <p>{product.title}</p>
      <p>${product.price}</p>
    </div>
  );
}

export default Product;
