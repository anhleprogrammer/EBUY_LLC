import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./product.styles.scss";
import { CartDropDownContext } from "../../contexts/CartDropDownContext";
import { AiOutlineCheck } from "react-icons/ai";
import { Star } from "../star/Star";

function Product({ product, star }) {
  const navigate = useNavigate();
  const { setCartItems } = useContext(CartDropDownContext);
  return (
    <div
      className="product-container"
      onClick={() => navigate(`/product/${product.title}`)}
    >
      <img src={product.images[0]} alt={product.title} />
      <div>
        <p>{product.title}</p>
        <Star rating={product.rating} reviews={product.reviews} />

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
