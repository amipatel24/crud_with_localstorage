import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1 className="text-center">Users Details</h1>
      <Link
        className="btn btn-primary btn-block mt-4 float-right"
        to={"/add-user"}
      >
        Add User
      </Link>
    </div>
  );
}

export default Home;
