import { React, useState } from "react";
import {
  signInWithGoogle,
  createUserDocument,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import "./sign-in.styles.scss";
function SignIn() {
  const logGoogle = async () => {
    try {
      const { user } = await signInWithGoogle();
      const userDocRef = await createUserDocument(user);
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="sign-in-container">
      <h2>Sign in to your account</h2>
      <FormInput
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <FormInput
        name="password"
        label="Password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      <Button>SIGN IN</Button>

      <Button buttonType="google" onClick={() => logGoogle()}>
        SIGN IN WITH GOOGLE
      </Button>
    </div>
  );
}

export default SignIn;
