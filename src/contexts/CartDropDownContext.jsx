import { React, createContext, useState } from "react";

export const CartDropDownContext = createContext({
  cartOpen: false,
  setCartOpen: () => {},
  cartItems: [], // object
  setCartItems: () => {},
});

//
export const CartDropDownProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCart] = useState([]);
  const setCartItems = (product) => {
    const existedProduct =
      cartItems.length > 0 ? cartItems.find((e) => e.id === product.id) : "";

    if (existedProduct) {
      return setCart((prev) =>
        prev.map((element) =>
          element.id === product.id
            ? { ...element, quantity: element.quantity + 1 }
            : element
        )
      );
    } else {
      return setCart((prev) => [...prev, { ...product, quantity: 1 }]); // if product not existed assign 1
    }
    //problem is
  };

  const value = { cartOpen, setCartOpen, cartItems, setCartItems };

  return (
    <CartDropDownContext.Provider value={value}>
      {children}
    </CartDropDownContext.Provider>
  );
};
