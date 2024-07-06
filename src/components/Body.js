import React, { useState, useEffect, useContext } from "react";

import RestaurantCard from "./restaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useAllRestaurants from "./Utility/useAllRestaurants";
import { handleData } from "./Utility/helper";
import { CDN_ALL_RESTAURANTS } from "../constants";
import userContext from "./Utility/userContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const allRestaurants = useAllRestaurants();
  const { info, setFetchedUser } = useContext(userContext);
  // console.log(info);

  useEffect(() => {
    if (allRestaurants.length > 0) {
      // this condition is saving 1 full render. because in cases where allRestaurants isn't fetched it is still updating local state variable, which causes render
      setFilteredRestaurants(allRestaurants);
    }
  }, [allRestaurants]);

  // console.log("iteration");
  // console.log(allRestaurants);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          onClick={() => {
            const filtered = handleData(searchText, allRestaurants);
            setFilteredRestaurants(filtered);
          }}
        >
          Search
        </button>

        <input
          className="border border-black mx-2 p-1"
          value={info.username}
          onChange={(e) => {
            setFetchedUser({ ...info, username: e.target.value });
          }}
        ></input>
        <input
          className="border border-black mx-2 p-1"
          value={info.email}
          onChange={(e) => {
            setFetchedUser({...info,  email:e.target.value});
          }}
        ></input>
      </div>
      {filteredRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className=" flex flex-wrap justify-around">
          {filteredRestaurants.map((restaurant) => (
            <Link
              className="border-solid border-2 m-2"
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              <RestaurantCard {...restaurant?.info} />
              <span> {info.username}</span>
              <p> {info.email}</p>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Body;
