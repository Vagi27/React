// import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <a href="/">
      <img
        src={require("./images/company-logo.jpg")}
        alt="Company logo"
        className="logo"
      />
    </a>
  );
};

const Header = () => {
  return (
    <div className="Header flex">
      <Title />

      <input type="text" className="headerInput" placeholder="Search.." />

      <img
        src={require("./images/user icon.jpg")}
        alt="user"
        className="userIcon"
      />
    </div>
  );
};

const restaurantList=[{}];
const RestaurantCard = () => (
  <div className="card">
    <img src="https://img.freepik.com/free-photo/grilled-gourmet-burger-with-cheese-tomato-onion-french-fries-generated-by-artificial-intelligence_25030-63181.jpg" />
    <h2>burger King</h2>
    <h3>tags</h3>
    <h3>stars</h3>
  </div>
);

const Body = () => (
  <div className="restaurantContainer flex ">

    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
    <RestaurantCard />
  </div>
);
const Footer = () => <></>;

const AppLayout = () => (
  <> {/* React Fragment */}
    <Header />
    <Body />
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Header />);
root.render(<AppLayout />);
