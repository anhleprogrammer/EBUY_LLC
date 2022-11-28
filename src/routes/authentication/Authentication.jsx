import React from "react";
import {
  signInWithGoogle,
  createUserDocument,
} from "../../utils/firebase/firebase.utils";
import SignUp from "../../components/sign-up-form/SignUp";
import SignIn from "../../components/sign-in-form/SignIn";
import "./authentication.styles.scss";
function Authentication() {
  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Authentication;
