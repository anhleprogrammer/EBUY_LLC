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
  const { setUser } = useContext(UserContext);
  const logGoogle = async () => {
    try {
      const { user, setUser } = await signInWithGoogle();
      const userDocRef = await createUserDocument(user);
      setUser(user);
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const resetForm = () => setFormData({ email: "", password: "" });
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    //password match when password input entered match with database
    try {
      const response = await signInWithCredentials(
        formData.email,
        formData.password
      );
      resetForm();
      setUser(response);
      alert("Login successful");
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div className="sign-in-container">
      <h2>Sign in to your account</h2>
      <form onSubmit={handleLogin}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormInput
          name="password"
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button>SIGN IN</Button>

        <Button buttonType="google" onClick={() => logGoogle()}>
          SIGN IN WITH GOOGLE
        </Button>
      </form>
    </div>
  );
}

export default SignIn;
