import React from "react";
import CSS from "./items.module.css";

const Items = ({ list, mealtime }) => {
  return (
    <div className={CSS.item}>
      <h1 className={CSS.meal}>{mealtime}</h1>
      {list.map((item) => (
        <h3 className={CSS.name}>{item.name}</h3>
      ))}
    </div>
  );
};

export default Items;
