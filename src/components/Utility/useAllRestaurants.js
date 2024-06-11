import { useState, useEffect } from "react";
import { CDN_ALL_RESTAURANTS } from "../../constants";

function useAllRestaurants() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  // console.log("other file");
  
  useEffect(() => {
    // console.log("other file's useEffect");
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const data = await fetch(CDN_ALL_RESTAURANTS);
      const info = await data.json();
      const restaurants =
        info?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
          // console.log(restaurants);
      setAllRestaurants(restaurants);
    } catch (err) {
      console.error("Error fetching data: " + err);
    }
  }

  return allRestaurants;
}

export default useAllRestaurants;
