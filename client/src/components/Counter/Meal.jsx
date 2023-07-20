import { Link } from "react-router-dom";
import React from "react";
import MealCSS from "./meal.module.css";
import { useAppContext } from "../../context/appContext";

const Meal = (props) => {
  const { findMealTime } = useAppContext();
  const addInfo = findMealTime(props.mealTime);
  return (
    <div className={MealCSS.container}>
      <img className={MealCSS.img} src={props.img} alt="breakfast"></img>
      <h1 className={MealCSS.mealtime}>{props.mealTime}</h1>
      <h3 className={MealCSS.info}>Calories: {addInfo.Calories} kcal</h3>
      <h3 className={MealCSS.info}>Carbs: {addInfo.Carbs} g</h3>
      <h3 className={MealCSS.info}>Protein: {addInfo.Protein} g</h3>
      <h3 className={MealCSS.info}>Fats: {addInfo.Fats} g</h3>
      <Link className={MealCSS.add} to={"addmeal/" + props.mealTime}>
        Add Food
      </Link>
      {/* <h4 className={MealCSS.add}>Add Food</h4> */}
    </div>
  );
};

export default Meal;
