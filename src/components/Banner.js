import React from "react";
import "../App.css";

function Banner() {
  return (
    <div className="banner">
      <p id="small">TRUSTED CAR DEALER SERVICES</p>
      <p id="large">FIND THE RIGHT CAR</p>
      <form className="find">
        <input type="text" placeholder="Type to select car name" />
        <button>Search Car</button>
      </form>
      <div className="slider"></div>
    </div>
  );
}

export default Banner;
