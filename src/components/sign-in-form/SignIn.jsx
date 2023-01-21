import { React, useState, useContext } from "react";
import {
  signInWithGoogle,
  createUserDocument,
  signInWithCredentials,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import "./sign-in.styles.scss";
import { UserContext } from "../../contexts/UserContext";
function SignIn() {
  const { user, setUser } = useContext(UserContext);
  const logGoogle = async () => {
    try {
      const { user } = await signInWithGoogle();

      const userDocRef = await createUserDocument(user);
      setUser(user);
    } catch (e) {
      console.log(e);
    }
  };
  // console.log(user, setUser);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const resetForm = () => {
    setFormData({ email: "", password: "" });
  };
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await signInWithCredentials(
        formData.email,
        formData.password
      );
      resetForm();
      setUser(response);
    } catch (e) {
      console.log(e);
      alert(e);
    }
  };
  return (
    <div className="sign-in-container">
      <h2>Sign in to your account</h2>
      <form>
        <FormInput
          label="Email: test@gmail.com"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormInput
          name="password"
          label="Password: 123456"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button onClick={handleLogin}>SIGN IN</Button>
        <Button type="button" buttonType="google" onClick={() => logGoogle()}>
          SIGN IN WITH GOOGLE
        </Button>
      </form>
    </div>
  );
}

export default SignIn;
