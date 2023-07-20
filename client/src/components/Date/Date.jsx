import React from "react";
import { useAppContext } from "../../context/appContext";
import dateCSS from "./date.module.css";

const DateManu = () => {
  const { todaydate } = useAppContext();
  return (
    <div className={dateCSS.container}>
      <h2 className={dateCSS.h1}>
        Your Food Diary For :{" "}
        <span className={dateCSS.datecontainer}>{todaydate}</span>
      </h2>
    </div>
  );
};

export default DateManu;
