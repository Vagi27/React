// -> after destructuring props using {} properties insides props objects can directly be used
 const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => (
    // const {name,cloudinaryImageId,cuisines, avgRating}=restaurant.info;
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating + " stars"}</h3>
    </div>
  );
  export default RestaurantCard;