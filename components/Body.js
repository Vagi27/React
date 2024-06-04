import React, { useState, useEffect } from "react";

import RestaurantCard from "./restaurantCard";
import { restaurantList } from "../constants";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  const filtered = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchText?.toLowerCase())
  );
  return filtered;
}
const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const info = await data.json();
      // console.log(info?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      const restaurants =
        info?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setAllRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (err) {
      console.error("Error fetching data" + err);
      throw err;
    }
  }

  function handleData() {
    //each time feeding the complete list to filterData so that user gets a seamless experience
    const filteredData = filterData(searchText, allRestaurants);
    setFilteredRestaurants(filteredData);
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button onClick={handleData}> Search</button>
      </div>
      {filteredRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurantContainer flex ">
          {filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
            );
          })}
        </div>
      )}
    </>
  );
};
export default Body;
