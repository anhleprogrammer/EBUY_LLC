import React from "react";
import {
  signInWithGoogle,
  createUserDocument,
} from "../../utils/firebase/firebase.utils";
import SignUp from "../../components/sign-up-form/SignUp";
import SignIn from "../../components/sign-in-form/SignIn";

function Authentication() {
  return (
    <div>
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Authentication;
