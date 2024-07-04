import userContext from "./Utility/userContext";
import { useContext } from "react";

const Footer = () => {
  const { info } = useContext(userContext);
  return (
    <>
      <h2>{info?.username}</h2>
      <h2>{info?.email}</h2>
      <div>This is Footer</div>;
    </>
  );
};

export default Footer;
