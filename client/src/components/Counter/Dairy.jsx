import React from "react";
import DairyCSS from "./dairy.module.css";
import Meal from "./Meal.jsx";
import breakfast from "../../assets/images/breakfast.jpeg";
import lunch from "../../assets/images/lunch.jpeg";
import dinner from "../../assets/images/Dinner.jpeg";
import snacks from "../../assets/images/Snacks.jpeg";
const Dairy = () => {
  return (
    <div className={DairyCSS.container}>
      <Meal
        mealTime="Breakfast"
        img={breakfast}
        className={DairyCSS.flexitem}
      />
      <Meal mealTime="Lunch" img={lunch} className={DairyCSS.flexitem} />
      <Meal mealTime="Snacks" img={snacks} className={DairyCSS.flexitem} />
      <Meal mealTime="Dinner" img={dinner} className={DairyCSS.flexitem} />
    </div>
  );
};

export default Dairy;
