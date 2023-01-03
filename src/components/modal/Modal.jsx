import "./modal.styles.scss";
import React from "react";

function Modal({ modal, type }) {
  const checkModal = modal[0] === true || modal[1] === true ? "active" : "";
  console.log(modal);
  const content = () => {
    if (modal[0] === true && modal[1] === false) {
      return <p>asd</p>;
    } else if (modal[1] === true && modal[0] === false) {
      return (
        <div>
          <p>Newest</p>
          <p>Price - High to Low</p>
          <p>Price - Low to High</p>
        </div>
      );
    }
  };

  return <div className={`modal-container ${checkModal}`}>{content()}</div>;
}

export default Modal;
