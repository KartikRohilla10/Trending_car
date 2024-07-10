import React, { useState, useEffect } from "react";
import "../App.css";

function Button_Selectors(props) {
  const list1 = ["Suv", "Hatchback", "Sedan", "Muv", "Luxury"];
  const list2 = [
    "Budget",
    "Body Type",
    "Fuel Type",
    "Transmission",
    "Seating Capacity",
  ];

  const [selectList, setSelectList] = useState([]);

  useEffect(() => {
    console.log("Props list value: ", props.list); // Debugging line
    if (props.list === "list1") {
      setSelectList(list1);
    } else if (props.list === "list2") {
      setSelectList(list2);
    } else {
      setSelectList([]); // Clear the list if none match
    }
    console.log("Updated selectList: ", selectList); // Debugging line
  }, [props.list]); // Add dependency array with props.list

  return (
    <div className="buttons_div">
      {selectList.slice(0, 5).map((item, index) => (
        <div className="buttons" key={index}>
          <button>{item}</button>
        </div>
      ))}
    </div>
  );
}

export default Button_Selectors;
