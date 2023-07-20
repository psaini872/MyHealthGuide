import React, { useState } from "react";

// import { useAppContext } from "../../context/appContext";
import CSS from "./foodlist.module.css";
import Modal from "./Modal.jsx";

const FoodList = (prop) => {
  // const { emptySearchedFood } = useAppContext();
  const [open, setOpen] = useState(false);
  const { label, nutrients } = prop.foodInfo;
  const { ENERC_KCAL, CHOCDF, PROCNT } = nutrients;

  const selectFoodHandler = () => {
    setOpen(true);
  };

  const onclose = () => {
    setOpen(false);
  };

  return (
    <div className={CSS.container}>
      <div className={CSS.smallcontainer}>
        <h1 className={CSS.foodName}>{label}</h1>
        <button className={CSS.add} onClick={selectFoodHandler}>
          Select
        </button>
        <Modal
          open={open}
          close={onclose}
          foodInfo={prop.foodInfo}
          amount={prop.foodMeasure}
          mealTime={prop.mealtime}
        />
      </div>
      <div className={CSS.foodInfo}>
        <h5 className={CSS.nutrsion}>
          100g Contain : Calories:{Math.round(ENERC_KCAL)}kcal
        </h5>
        <h5 className={CSS.nutrsion}>Carbs:{Math.round(CHOCDF)}g</h5>
        <h5 className={CSS.nutrsion}>Protein:{Math.round(PROCNT)}g</h5>
      </div>
    </div>
  );
};

export default FoodList;
