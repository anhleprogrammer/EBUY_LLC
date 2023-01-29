import { React, useContext } from "react";
import "./cart-item.styles.scss";
import { CartDropDownContext } from "../../contexts/CartDropDownContext";

function CartItem() {
  const { cartItems } = useContext(CartDropDownContext);

  //quantity increase when item have same name
  return (
    <div className="cart-item-container">
      {cartItems.map((item) => (
        <div key={item.id}>
          <div className="cart-img-container">
            <img src={item.images[0]} alt="" />
          </div>
          <div className="cart-info-container">
            <p>{item.title}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItem;
