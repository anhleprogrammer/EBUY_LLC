import React from "react";
import {
  signInWithGoogle,
  createUserDocument,
} from "../../utils/firebase/firebase.utils";
import SignUp from "../../components/sign-up-form/SignUp";
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
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={() => logGoogle()}>Click here</button>
      <SignUp />
    </div>
  );
}

export default SignIn;
