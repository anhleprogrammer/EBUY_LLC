import "./modal.styles.scss";
import React from "react";
const modalStatus = {
  // modal:
};
function Modal({ modal }) {
  const checkModal = modal[0] === true || modal[1] === true ? "active" : "";
  return <div className={`modal-container ${checkModal}`}>Modal</div>;
}

export default Modal;
