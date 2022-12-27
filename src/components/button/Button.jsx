import React from "react";
import "./button.styles.scss";

const buttonTypes = {
  google: "google-sign-in",
  addToCart: "add-to-cart",
};
function Button({ children, buttonType, ...otherProps }) {
  return (
    <button
      className={`button-container ${buttonTypes[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
