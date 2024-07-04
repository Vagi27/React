// -> after destructuring props using {} properties insides props objects can directly be used

const RestaurantCard = (props) => {
    // console.log(props)
  const { name, cloudinaryImageId, cuisines, avgRating } = props;

  return (
    // const {name,cloudinaryImageId,cuisines, avgRating}=restaurant.info;
    <div className="card border-solid flex flex-col rounded-md w-96 flex-wrap p-2 m-3">
      <div className="h-96 ">
        <img
          className="rounded-md w-full h-full object-cover  overflow-hidden"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
      </div>
      <div>
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{avgRating + " stars"}</h3>
      </div>
    </div>
  );
};

export default RestaurantCard;
