import { React, createContext, useState } from "react";

export const CartDropDownContext = createContext({
  cartOpen: false,
  setCartOpenart: () => {},
});

//
export const CartDropDownProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const value = { cartOpen, setCartOpen };
  return (
    <CartDropDownContext.Provider value={value}>
      {children}
    </CartDropDownContext.Provider>
  );
};
