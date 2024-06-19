import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Title = () => {
  return (
    <a href="/" className="flex items-center justify-between">
      <img
        src={require("../images/company-logo.jpg")}
        alt="Company logo"
        className="h-full rounded-md"
      />
      <span className="ml-2 text-lg"> Food Villa </span>
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // useEffect(() => {
  //   // console.log("useEffect");
  // }, [isLoggedIn]);
  // // console.log("render");

  return (
    <div className=" flex justify-between h-16 p-2 mb-4 bg-blue-50">
      <Title />
      <div className="flex Nav-items justify-evenly items-center w-2/5">
        <Link to="/" className="bg-blue-200 p-2 rounded-md hover:bg-blue-100 active:bg-blue-300">
          <span>Home</span>
        </Link>
        <Link to="/about/catalog" className="bg-blue-200 p-2 rounded-md hover:bg-blue-100 active:bg-blue-300">
          <span>Catalog</span>
        </Link>
        <Link to="/about" className="bg-blue-200 p-2 rounded-md hover:bg-blue-100 active:bg-blue-300">
          <span>About Us</span>
        </Link>
        <Link to="/instamart" className="bg-blue-200 p-2 rounded-md hover:bg-blue-100 active:bg-blue-300">
          <span>Instamart</span>
        </Link>
        <button
          className="p-2 font-medium ml-6 bg-blue-200 rounded-md hover:bg-blue-100 active:bg-blue-300"
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
