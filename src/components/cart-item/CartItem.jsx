import { React, useContext, useState } from "react";
import "./cart-item.styles.scss";
import { CartDropDownContext } from "../../contexts/CartDropDownContext";

function CartItem() {
  const { cartItems } = useContext(CartDropDownContext);
  const [option, setOption] = useState(1);

  return (
    <div className="cart-item-container">
      <p>Shopping Bag</p>
      {cartItems.map((item) => (
        <div key={item.id}>
          <div className="cart-img-container">
            <img src={item.images[0]} alt="" />
          </div>
          <div className="cart-info-container">
            <p>{item.title}</p>
            <p>Eligible for FREE Shipping</p>
            <p>Price: ${item.price}</p>
            <div>
              <p>Quantity:</p>
              <select
                name="quant"
                value={option}
                onChange={(e) => setOption(e.target.value)}
              >
                <option value={item.quantity}>{item.quantity}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10+">10</option>
              </select>
            </div>
          </div>
        </div>
      ))}
      <div>
        <p>Sub Total</p>
        <p>$99</p>
      </div>
    </div>
  );
}

export default CartItem;
