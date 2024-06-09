import { useOutletContext } from "react-router-dom";
import {useParams} from "react-router-dom"

const Catalog = () => {
  const {location} = useOutletContext();
  console.log(location);
  return (
    <div>
      <h1>this is Catalog page</h1>
      <h2> Location: {location}</h2>
    </div>
  );
};

export default Catalog;
