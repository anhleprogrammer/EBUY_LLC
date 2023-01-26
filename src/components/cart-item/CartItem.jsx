import { React, useContext } from "react";
import "./cart-item.styles.scss";
import { CartDropDownContext } from "../../contexts/CartDropDownContext";

function CartItem() {
  const { cartItems } = useContext(CartDropDownContext);
  console.log(cartItems);
  //quantity increase when item have same name
  return (
    <div className="cart-item-container">
      {Object.keys(cartItems).map((item) => {
        console.log(item);
        <div key={item.id}>
          <p>{item.title}</p>
          <a>Quantity</a>
          <a> x ${item.price}</a>
        </div>;
      })}
    </div>
  );
}

export default CartItem;
