import { React, useState } from "react";
import {
  createUserWithCredentials,
  createUserDocument,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/FormInput";
import "./sign-up.styles.scss";
function SignUp() {
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("password do not match");
      return;
    }
    try {
      const result = await createUserWithCredentials(
        formData.email,
        formData.password
      );

      createUserDocument(result.user, { displayName: formData.displayName });
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="sign-up-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <FormInput
          label="Display Name"
          type="text"
          id="displayName"
          name="displayName"
          value={formData.displayName}
          onChange={handleChange}
        />
        <FormInput
          label="Email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
