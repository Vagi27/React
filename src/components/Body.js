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
  const [allRestaurants, setAllRestaurants] = useState([]);

  // useEffect(() => {

  //   const {allRestaurants} = useAllRestaurants();
  //   setFilteredRestaurants(allRestaurants);
  // }, []);
  useEffect(() => {
    async function fetchData() {
      console.log("fetch API");
      try {
        const data = await fetch(CDN_ALL_RESTAURANTS);
        const info = await data.json();
        const restaurants =
          info?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];
        setAllRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
      } catch (err) {
        console.error("Error fetching data: " + err);
      }
    }
    fetchData();
  }, []);

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
        <div className="restaurantContainer flex">
          {filteredRestaurants.map((restaurant) => (
            <Link
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
