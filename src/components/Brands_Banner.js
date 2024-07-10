import React from "react";
import "../App.css";
import maruti from "../assets/images/brands/maruti.png";
import audi from "../assets/images/brands/audi.png";
import bmw from "../assets/images/brands/bmw.png";
import hyundai from "../assets/images/brands/hyundai.png";
import kia from "../assets/images/brands/kia.png";
import land_rover from "../assets/images/brands/land_rover.png";
import lexus from "../assets/images/brands/lexus.png";
import mahindra from "../assets/images/brands/mahindra.png";
import merc from "../assets/images/brands/merc.png";
import porsche from "../assets/images/brands/porsche.png";
import tata from "../assets/images/brands/tata.png";
import toyota from "../assets/images/brands/toyota.png";

function Brands_Banner() {
  return (
    <div className="brands_banner">
      <div className="brand_head">
        <p className="brands_heading">Popular Brands</p>
        <p className="view_more">
          View More Brands {" "}
          <i className="fa-solid fa-arrow-right-long" />
        </p>
      </div>
      <div className="grid_con">
        <div className="brand_box">
          <img src={maruti} />
        </div>
        <div className="brand_box">
          <img src={audi} />
        </div>
        <div className="brand_box">
          <img src={bmw} />
        </div>
        <div className="brand_box">
          <img src={hyundai} />
        </div>
        <div className="brand_box">
          <img src={kia} />
        </div>
        <div className="brand_box">
          <img src={land_rover} />
        </div>
        <div className="brand_box">
          <img src={lexus} />
        </div>
        <div className="brand_box">
          <img src={mahindra} />
        </div>
        <div className="brand_box">
          <img src={porsche} />
        </div>
        <div className="brand_box">
          <img src={merc} />
        </div>
        <div className="brand_box">
          <img src={tata} />
        </div>
        <div className="brand_box">
          <img src={toyota} />
        </div>
      </div>
    </div>
  );
}

export default Brands_Banner;
