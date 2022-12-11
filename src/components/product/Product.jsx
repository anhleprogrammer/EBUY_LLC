import { React, useContext } from "react";
import "./product.styles.scss";
import { CartDropDownContext } from "../../contexts/CartDropDownContext";
import { AiOutlineCheck } from "react-icons/ai";
function Product({ product }) {
  const { setCartItems } = useContext(CartDropDownContext);
  return (
    <div className="product-container">
      <img src={product.images[0]} alt={product.title} />
      <div>
        <p>{product.title}</p>
        <p>Star here</p>
        <p className="price">${product.price}</p>
        <p>
          <span>
            <AiOutlineCheck className="checkmark" />
            Ebuy+
          </span>{" "}
          FREE Delivery
        </p>
      </div>
    </div>
  );
}

export default Product;
