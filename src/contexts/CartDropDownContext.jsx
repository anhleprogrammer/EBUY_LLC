import { React, createContext, useState } from "react";

export const CartDropDownContext = createContext({
  cartOpen: false,
  setCartOpen: () => {},
  cartItems: {},
  setCartItems: () => {},
});

//
export const CartDropDownProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCart] = useState({});
  const setCartItems = (product) => {
    if (cartItems[product] >= 1) {
      return setCart((prev) => ({
        ...prev,
        [product]: cartItems[product] + 1,
      }));
    } else {
      return setCart((prev) => ({ ...prev, [product]: 1 }));
    }
  };

  const value = { cartOpen, setCartOpen, cartItems, setCartItems };

  return (
    <CartDropDownContext.Provider value={value}>
      {children}
    </CartDropDownContext.Provider>
  );
};
