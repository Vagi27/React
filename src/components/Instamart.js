import { useState } from "react";

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <>
      <Section
        title={"About"}
        description={"asdf"}
        isVisible={visibleSection === "about"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "about" ? "" : "about")
        }
      />

      <Section
        title={"Team"}
        description={"asdf asdf"}
        isVisible={visibleSection === "team"}
        setIsVisible={() =>
          setVisibleSection(visibleSection === "team" ? "" : "team")
        }
      />

      <Section
        title={"Careers"}
        description={"asdf asdf asdf"}
        isVisible={visibleSection === "careers"}
        setIsVisible={() => 
          setVisibleSection(visibleSection === "careers" ? "" : "careers")
        }
          // console.log("instamart function");
      />
    </>
  );
};

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className=" border border-black rounded-md m-3 p-2">
      <h1 className="font-bold text-lg"> {title}</h1>

      <button className="cursor-pointer underline  p-1" onClick={setIsVisible}>
        {isVisible ? "hide" : "show"}
      </button>

      {isVisible && <h3> {description}</h3>}
    </div>
  );
};

export default Instamart;
