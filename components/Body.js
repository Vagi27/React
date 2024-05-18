import React, { useState } from "react";

import RestaurantCard from "./restaurantCard";
import { restaurantList } from "../constants";

function filterData(searchText, restaurants) {

  const filtered = restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filtered;
}
const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");
  
  function handleData() {
    //each time feeding the complete list to filterData so that user gets a seam less experience
    const filteredData = filterData(searchText, restaurantList);
    setRestaurants(filteredData);
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
        <button
          onClick={handleData}
        >
          Search
        </button>
      </div>

      <div className="restaurantContainer flex ">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
