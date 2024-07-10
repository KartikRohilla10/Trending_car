import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import "../App.css";
import Button_Selectors from "./Button_Selectors";

import Card_comp from "./Card_comp";
import merc from "../assets/images/cars/mercedes.png";
import bmw from "../assets/images/cars/bmw.png";
import ferrari from "../assets/images/cars/ferrari.png";
import audi from "../assets/images/cars/audi.png";

function Card(props) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="container">
      <p className="card_title">{props.heading}</p>
      <div className="card_nav">
        <div className="card_head_div">
          <h2 className="card_head">{props.heading2}</h2>
          <Button_Selectors list={props.lists} />
        </div>
      </div>
      <div className="card_con">
        <Carousel className="carou" responsive={responsive}>
          <Card_comp
            name="Mercedes Benz Car"
            price="₹15.49 - 25.49 Lakh*"
            car_pic={merc}
          />
          <Card_comp
            name="Yellow Ferrari 458"
            price="65.49 - 95.49 Lakh*"
            car_pic={ferrari}
          />
          <Card_comp
            name="Black Audi Q7"
            price="₹45.49 - 55.49 Lakh*"
            car_pic={audi}
          />
          <Card_comp
            name="BMW Sport Car"
            price="₹25.49 - 35.49 Lakh*"
            car_pic={bmw}
          />
          <Card_comp name="Land Rover" price="₹15.49 - 25.49 Lakh*" />
          <Card_comp name="Audi RS3" price="₹29.49 - 37.49 Lakh*" />
          <Card_comp name="Pagani Huyara" price="₹33.46 - 55.49 Lakh*" />
        </Carousel>
      </div>
      <div className="card_view_all">
        <p>
          {props.view_all} <i className="fa-solid fa-arrow-right-long"></i>
        </p>
      </div>
    </div>
  );
}

export default Card;
