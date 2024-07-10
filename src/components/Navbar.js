import "../App.css";
import React from "react";
import logo from "../assets/images/main_logo.png";
import search from "../assets/images/search_logo.png";
import wish from "../assets/images/wishlist.png";
import user from "../assets/images/user_blank.png";

function Navbar() {
  const icon = <i className="fa-solid fa-angle-down" />;
  return (
    <>
      <div className="nav">
        <img id="logo" src={logo} />

        <p className="text">#chuno apni best car</p>

        <form className="search">
          <input
            type="search"
            placeholder="Search Cars eg. Honda Elevate"
          ></input>
          <button type="submit">
            <img src={search} alt="search"></img>
          </button>
        </form>

        <button className="navbar_buttons">
          <img src={wish} />
        </button>
        <button className="navbar_buttons" style={{ marginLeft: "10px" }}>
          <img src={user} />
        </button>
        <p className="login">Login/Register</p>
      </div>

      <div className="nav1">
        <ul>
          <li>NEW CAR {icon}</li>
          <li>RTO</li>
          <li>TOLL PLAZA</li>
          <li>REVIEWS & NEWS {icon}</li>
          <li>ELECTRIC VEHICLE {icon}</li>
          <li>IMAGES {icon}</li>
          <li>MORE</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
