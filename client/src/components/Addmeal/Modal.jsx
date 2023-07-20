import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { useAppContext } from "../../context/appContext";
import CSS from "./modal.module.css";

const Modal = (props) => {
  const [measure, setMeasure] = useState({
    NoOfServing: 1,
    InGram: 100,
  });
  const { addFood, emptySearchedFood } = useAppContext();
  if (!props.open) {
    return null;
  }
  // console.log(props.amount);
  const { label, nutrients } = props.foodInfo;
  const { ENERC_KCAL, CHOCDF, PROCNT } = nutrients;

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setMeasure((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addFood(
      props.mealTime,
      nutrients,
      label,
      measure.InGram,
      measure.NoOfServing
    );
    emptySearchedFood();

    props.close();

    // console.log(measure);
  };

  return ReactDOM.createPortal(
    <div className={CSS.overlay}>
      <div className={CSS.container}>
        <h1 className={CSS.foodName}>{label}</h1>
        <div className={CSS.foodInfo}>
          <h3 className={CSS.nutrsion}>
            100g Contain :- Calories:{Math.round(ENERC_KCAL)}kcal
          </h3>
          <h3 className={CSS.nutrsion}>Carbs:{Math.round(CHOCDF)}g</h3>
          <h3 className={CSS.nutrsion}>Protein:{Math.round(PROCNT)}g</h3>
        </div>
        <form className={CSS.measure} onSubmit={handleSubmit}>
          <h3 className={CSS.how}>How Much?</h3>
          <div className={CSS.amountflex}>
            <input
              className={CSS.serving}
              type="number"
              name="NoOfServing"
              value={measure.NoOfServing}
              onChange={handleChange}
              min="1"
            />
            <p className={CSS.text}>Serving of</p>
            <select
              className={CSS.unit}
              name="InGram"
              onChange={handleChange}
              value={measure.InGram}
            >
              <option value={100}>100g</option>
              {props.amount.map((unit, index) => (
                <option value={Math.round(unit.weight)}>
                  {unit.label}({unit.weight}g)
                </option>
              ))}
            </select>
            <button className={CSS.button} type="submit">
              ADD
            </button>
          </div>
        </form>
        <button onClick={props.close}>close</button>
      </div>
    </div>,
    document.getElementById("app-modal")
  );
};

export default Modal;
