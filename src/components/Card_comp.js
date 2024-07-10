import React from "react";



function Card_comp(props) {
  return (
    <div>
      <div className="card">
        <div className="card_img">
          <img src={props.car_pic} />
        </div>
        <div className="car_name">{props.name}</div>
        <div>
          <ul className="car_spec">
            <li>Automatic</li>
            <li>10.15Km /1.0-litre</li>
            <li>Hybrid</li>
          </ul>
        </div>
        <div className="price">{props.price}</div>
        <div className="price_box">
          <button>Show price in my city</button>
        </div>
      </div>
    </div>
  );
}

export default Card_comp;
