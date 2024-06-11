import { useState, useEffect } from "react";
import { CDN_ALL_RESTAURANTS } from "../../constants";

function useAllRestaurants() {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const data = await fetch(CDN_ALL_RESTAURANTS);
      const info = await data.json();
      const restaurants =
        info?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setAllRestaurants(restaurants);
    } catch (err) {
      console.error("Error fetching data: " + err);
    }
  }

  return allRestaurants;
}

export default useAllRestaurants;
