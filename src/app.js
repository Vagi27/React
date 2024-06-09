// import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Catalog from "./components/Catalog";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import Profile from "./components/ProfileClass";

// const [restaurant]=useState

const AppLayout = () => (
  <>
    {/* React Fragment */}
    <Header />
    <Outlet />
    <Footer />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <About />,
        children: [
          { path: "profile", element: <Profile /> },
          { path: "catalog", element: <Catalog /> },
        ],
      },
      // { path: "/catalog", element: <Catalog /> },
      { path: "/Restaurant/:restaurantId", element: <RestaurantMenu /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Header />);
root.render(<RouterProvider router={appRouter} />);
