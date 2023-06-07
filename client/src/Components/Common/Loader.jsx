import React from "react";
import loader from "../../Assest/img/loader.svg";
const fullScreenLoader = () => {
  return (
    <div className="ProcessingDiv">
      <div className="center-screen">
        <img className="loader-size" src={loader} alt="" />
      </div>
    </div>
  );
};

export default fullScreenLoader;
