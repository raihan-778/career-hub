import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import app from "../../firebase/firebase.init";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  signInWithPopup(auth, provider);
  const handleGoogleSignIn = () => {};
  return (
    <div>
      <h3>Log In Component</h3>
    </div>
  );
};

export default Login;
