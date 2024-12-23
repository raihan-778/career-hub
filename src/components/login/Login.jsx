import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import app from "../../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const userInfo = result.user;
        setUser(userInfo);
      })
      .then((error) => console.log("error", error));
  };

  const handleLogout = () => {
    signOut(auth)
      .then((result) => {
        console.log("success", result);
        setUser(null);
      })
      .then((error) => {
        console.error("Error", error);
      });
  };

  console.log(user);
  return (
    <div>
      {user && (
        <div>
          {" "}
          <h3 className="text-3xl font-bold">
            Log In User:{user?.displayName}
          </h3>
          <p className="text-xl font-semibold text-cyan-600">
            User Emial: {user?.email}
          </p>
          <img src={user?.photoURL} alt="" />
        </div>
      )}
      {user ? (
        <button onClick={handleLogout} className="btn btn-info">
          Log Out
        </button>
      ) : (
        <button onClick={handleGoogleSignIn} className="btn btn-secondary mt-4">
          Google Login
        </button>
      )}
    </div>
  );
};

export default Login;
