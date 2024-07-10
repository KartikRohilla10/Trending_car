import React from "react";
import Button_Selectors from "./Button_Selectors";

function CarChoice(props) {
  return (
    <div className="car_choice">
      <div className="carchoice_head">
        <p>Find The Cars Of Your Choice</p>
        <div>
          <Button_Selectors list={props.lists} />
        </div>
      </div>
    </div>
  );
}

export default CarChoice;
