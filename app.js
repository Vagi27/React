// import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className= "Header flex">
<img src={require("./images/company-logo.jpg")} alt="Company logo"  className="logo"/>
      <input type="text" className="headerInput" placeholder="Search.." />
     <img src={require("./images/user icon.jpg")} alt= "user" className ="userIcon" />
     </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header/>);