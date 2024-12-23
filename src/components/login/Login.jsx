
import React from "react";


const Login = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  signInWithPopup(auth, provider);
  const handleGoogleSignIn = () => {console.log("google mama is comming")};
  return (
    <div>
      <h3>Log In Component</h3>
      <button onClick={handleGoogleSignIn} className="btn btn-secondary">Google Login</button>
    </div>
  );
};

export default Login;
