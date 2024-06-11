import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const Profile = (props) => {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://api.github.com/users/vagi27");
      const json = await data.json();
      // You can do something with the fetched data here if needed
    };

    fetchData();

    // This function will act as componentWillUnmount
    return () => {
      // Clean up any resources here if needed
    };
  }, []);

  const context=useOutletContext();
  console.log(context);
//   console.log(props);
  
  return (
    <div>
      <h1>this is profile FC:</h1>
      <h1>location:{context.location}</h1>
    </div>
  );
};

export default Profile;

