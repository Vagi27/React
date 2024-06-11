import { useState, useEffect } from "react";
import { CDN_GET_RES_FIRST_HALF } from "../../constants";
import { CDN_GET_RES_SECOND_HALF } from "../../constants";

function useRestaurant(restaurantId) {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetchRestaurant();
  }, []);

  async function fetchRestaurant() {
    const restaurantData = await fetch(
      CDN_GET_RES_FIRST_HALF + restaurantId + CDN_GET_RES_SECOND_HALF
    );
    const dataParsed = await restaurantData.json();
    // console.log(CDN_IMG_URL+restaurant?.data?.cards?.[2]?.card?.card?.info?.cloudinaryImageId);
    setRestaurant(dataParsed);
  }
  return restaurant;
}

export default useRestaurant;
