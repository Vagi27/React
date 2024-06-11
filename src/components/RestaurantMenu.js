import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_IMG_URL } from "../constants";

import useRestaurant from "./Utility/useRestaurant";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const restaurant = useRestaurant(restaurantId);

  


  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restaurantMenu flex">
      <div> This is restaurant Menu for : {restaurantId}</div>
      <div>
        <h1> {restaurant?.data?.cards?.[2]?.card?.card?.info?.name}</h1>
        <img
          src={
            CDN_IMG_URL +
            restaurant?.data?.cards?.[2]?.card?.card?.info?.cloudinaryImageId
          }
        />
        <h2>
          {restaurant?.data?.cards?.[2]?.card?.card?.info?.costForTwoMessage}
        </h2>
        <div>
          {/* {console.log(
            restaurant?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR
              ?.cards?.[1]?.card?.card?.carousel?.[0]?.dish?.info?.variantsV2
              ?.variantGroups?.[1]?.variations
          )} */}

          {restaurant?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.carousel?.[0]?.dish?.info?.variantsV2?.variantGroups?.[1]?.variations.map(
            (item) => {
              return <p key={item.id}>{item.name} </p>;
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
