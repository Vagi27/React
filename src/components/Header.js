import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import userContext from "./Utility/userContext";
import {useDispatch, useSelector } from "react-redux";
import {addItem} from "../slices/cartSlice.js";

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
  const { info } = useContext(userContext);

  const cartItems=useSelector(store=>store.cart.items);

  const dispatch=useDispatch();

  const handleAddItem=()=>{
    dispatch(addItem("xyz"));
  }

  return (
    <div className=" flex justify-between h-16 p-2 mb-4 bg-blue-50">
      <Title />
      <div className="flex Nav-items justify-evenly items-center w-2/5">

        <Link
          to="/"
          className="bg-blue-200 p-2 rounded-md hover:bg-blue-100 active:bg-blue-300"
        >
          <span>Home</span>
        </Link>
        <Link
          to="/about/catalog"
          className="bg-blue-200 p-2 rounded-md hover:bg-blue-100 active:bg-blue-300"
        >
          <span>Catalog</span>
        </Link>
        <Link
          to="/about"
          className="bg-blue-200 p-2 rounded-md hover:bg-blue-100 active:bg-blue-300"
        >
          <span>About Us</span>
        </Link>
        <Link
          to="/instamart"
          className="bg-blue-200 p-2 rounded-md hover:bg-blue-100 active:bg-blue-300"
        >

          <span>Instamart</span>
        </Link>
        <div>
          <h1> {info.username}</h1>
          <h1> {info.email}</h1>
        </div>
        <div>
          <h1> cart:{cartItems.length}</h1>
          <button  onClick={()=>{handleAddItem()}}> addItem</button>
        </div>
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
