import React from "react";
import Button from "../button/Button";
import "./cartdropdown.styles.scss";
import CartItem from "../cart-item/CartItem";
function CartDropDown() {
  return (
    <div className="dropdown-container">
      <div className="cart-items">
        <CartItem />
      </div>
      <Button>Go to checkout</Button>
    </div>
  );
}

export default CartDropDown;
