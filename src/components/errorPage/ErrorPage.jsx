import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h3>Oops!!</h3>
      <p>Wrong Url!!Go Back to Home page</p>
      <Link to="/">
        <button className="btn btn-success">Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
