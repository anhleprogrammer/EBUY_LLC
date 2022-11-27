import React from "react";
import "./form-input.styles.scss";

function FormInput({ label, ...props }) {
  return (
    <div className="form-container">
      <input className="form-input" {...props} />
      <label
        className={`${props.value.length ? `up` : ""} form-label`}
        htmlFor={props.id}
      >
        {label}
      </label>{" "}
    </div>
  );
}

export default FormInput;
