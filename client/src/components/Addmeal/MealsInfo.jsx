import React from "react";
import CSS from "./meal.module.css";
import { useAppContext } from "../../context/appContext";

const MealsInfo = (props) => {
  const { findMealTimeImg } = useAppContext();

  return (
    <div className={CSS.container}>
      <img
        className={CSS.img}
        src={findMealTimeImg(props.mealtime)}
        alt="mainImg"
      />
      <h1 className={CSS.mealtime}>{props.mealtime}</h1>
      <div className={CSS.info}>
        <h3 className={CSS.infos}>Calorie:{props.calorie}kcal</h3>
        <h3 className={CSS.infos}>Carbs:{props.carbs}g</h3>
        <h3 className={CSS.infos}>Protein:{props.protein}g</h3>
        <h3 className={CSS.infos}>Fats:{props.fats}g</h3>
      </div>
    </div>
  );
};

export default MealsInfo;
