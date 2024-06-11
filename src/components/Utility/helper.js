export const handleData = (searchText, allRestaurants) => {
  //each time feeding the complete list to filterData so that user gets a seamless experience
  //   const filteredData = filterData(searchText, allRestaurants);
  const filtered = allRestaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchText?.toLowerCase())
  );
  return filtered;
};

// function filterData(searchText, allrestaurants) {
//   const filtered = restaurants.filter((restaurant) =>
//     restaurant?.info?.name?.toLowerCase().includes(searchText?.toLowerCase())
//   );
//   return filtered;
// }
