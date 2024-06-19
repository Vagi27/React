import React, { useState, useEffect } from "react";

import RestaurantCard from "./restaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useAllRestaurants from "./Utility/useAllRestaurants";
import { handleData } from "./Utility/helper";
import { CDN_ALL_RESTAURANTS } from "../constants";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const allRestaurants = useAllRestaurants();

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
      </div>
      {filteredRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className=" flex flex-wrap justify-around">
          {filteredRestaurants.map((restaurant) => (
            <Link className="border-solid border-2 m-2"
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              <RestaurantCard {...restaurant?.info} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Body;
