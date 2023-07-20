import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { useAppContext } from "../context/appContext";
import reportCSS from "./report.module.css";
import Items from "../components/Report/Items";

const Report = () => {
  const [show, setShow] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const {
    getReportbyDate,
    prependZero,
    reportdata,
    breakfastitem,
    lunchitem,
    snacksitem,
    dinneritem,
  } = useAppContext();

  console.log(reportdata);

  const handleSubmit = (e) => {
    e.preventDefault();

    const dateString =
      prependZero(startDate.getDate()) +
      prependZero(startDate.getMonth() + 1) +
      startDate.getFullYear().toString();

    getReportbyDate(dateString);
    setShow(true);
  };
  return (
    <div className={reportCSS.container}>
      <form onSubmit={handleSubmit}>
        <h2 className={reportCSS.h1}>Your Food Diary For : </h2>
        <DatePicker
          format="dd-MM-y"
          dayPlaceholder="dd"
          monthPlaceholder="MM"
          yearPlaceholder="yyyy"
          value={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <button type="submit">Get Report</button>
      </form>
      {show && (
        <>
          <div className={reportCSS.container2}>
            <h2 className={reportCSS.h2}>Nutrition Info of Day : </h2>
            <div>
              <h3 className={reportCSS.h3}>
                Calories:{reportdata.daytotalCalories} Kcal
              </h3>
              <h3 className={reportCSS.h3}>Cabs:{reportdata.daytotalCarbs}g</h3>
              <h3 className={reportCSS.h3}>
                Protein:{reportdata.daytotalProtein}g
              </h3>
              <h3 className={reportCSS.h3}>Fats:{reportdata.daytotalFats}g</h3>
            </div>
          </div>
          <div className={reportCSS.container3}>
            <Items mealtime="Breakfast" list={breakfastitem} />
            <Items mealtime="Lunch" list={lunchitem} />
            <Items mealtime="Snacks" list={snacksitem} />
            <Items mealtime="Dinner" list={dinneritem} />
          </div>
        </>
      )}
    </div>
  );
};

export default Report;
