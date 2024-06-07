import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CDN_IMG_URL } from "../constants";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    fetchRestaurant();
  }, []);

  async function fetchRestaurant() {
    const restaurantData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=" +
        restaurantId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const dataParsed = await restaurantData.json();
    // console.log(CDN_IMG_URL+restaurant?.data?.cards?.[2]?.card?.card?.info?.cloudinaryImageId);
    setRestaurant(dataParsed);
  }

  // console.log(restaurantId);

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
        <div>{
          console.log(restaurant)}
          {restaurant?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards?.[0]?.card?.info?.variantsV2?.variantGroups?.[1]?.variations.map(
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
