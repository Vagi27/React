import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Title = () => {
  return (
    <a href="/" className="flex titleAnchor">
      <img
        src={require("../images/company-logo.jpg")}
        alt="Company logo"
        className="logo"
      />
      <span className="anchorSpan"> Food Villa </span>
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    console.log("useEffect");
  }, [isLoggedIn]);
  console.log("render");

  return (
    <div className="Header flex">
      <Title />
      <div className="flex Nav-items">
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/catalog">
          <span>Catalog</span>
        </Link>
        <Link to="/about">
          <span>About Us</span>
        </Link>
        <button
          className="button-login"
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
          }}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
      {/* <img
        src={require("../images/user-icon.jpg")}
        alt="user"
        className="userIcon"
      /> */}
    </div>
  );
};

export default Header;

{
  /* {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )} */
}
