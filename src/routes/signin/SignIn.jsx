import React from "react";
import {
  signInWithGoogle,
  createUserDocument,
} from "../../utils/firebase/firebase.utils";
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
    </div>
  );
}

export default SignIn;
