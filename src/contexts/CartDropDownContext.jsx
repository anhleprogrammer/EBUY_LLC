import { React, createContext, useState } from "react";

export const CartDropDownContext = createContext({
  cartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  setCartItems: () => {},
});

//
export const CartDropDownProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCart] = useState([]);
  const setCartItems = (product) => {
    if (cartItems.includes(product)) {
      cartItems.find(product).quantity += 1;
    } else {
      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  };

  const value = { cartOpen, setCartOpen, cartItems, setCartItems };

  return (
    <CartDropDownContext.Provider value={value}>
      {children}
    </CartDropDownContext.Provider>
  );
};
