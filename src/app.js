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
import { Suspense, lazy } from "react";
import Shimmer from "./components/Shimmer";
import userContext from "./components/Utility/userContext";
import { useState, useContext } from "react";
import store from "./store";
import { Provider } from "react-redux";

const Instamart = lazy(() => import("./components/Instamart"));

const AppLayout = () => {
  const [fetchedUser, setFetchedUser] = useState({
    username: "Vagish",
    email: "vagish@gmail.com",
  });

  return (
    <Provider store={store}>
      <userContext.Provider
        value={{ info: fetchedUser, setFetchedUser: setFetchedUser }}
      >
        <Header />
        <Outlet />
        <Footer />
      </userContext.Provider>
    </Provider>
  );
};

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
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Header />);
root.render(<RouterProvider router={appRouter} />);
