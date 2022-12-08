import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Con } from "../Context/AppContext";

const Navbar = () => {
  const value = useContext(Con);
  const { logoutUser, id } = value;
  return (
    <div id="navbar">
      <img
        src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f426.svg"
        alt="tweeter"
      />

      <div>
        <Link className="white" to="/">
          Sign Up
        </Link>
      </div>

      <div>
        <Link className="white" to="/signin">
          Sign In
        </Link>
      </div>
      <div>
        <button
          style={{ background: "red", color: "white", padding: "10%" }}
          onClick={() => logoutUser()}
        >
          <pre>Log Out</pre>
        </button>
      </div>
      <div>
        <Link className="white" to={`/user/${id}`}>
          Profile
        </Link>
      </div>

      <div>
        <Link className="white" to={`/timeline/${id}`}>
          Timeline
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
