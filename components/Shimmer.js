// src/Shimmer.js
import React from "react";
import "./Shimmer.css";

const shimmerArray = Array.from({ length: 15 });

const Shimmer = () => {
  return (
    <div className="body-shimmer">
      {shimmerArray.map((_, index) => (
        <div className="shimmer-wrapper" key={index}>
          <div className="shimmer-element"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
