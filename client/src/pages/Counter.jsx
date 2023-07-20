import React from "react";
import Dairy from "../components/Counter/Dairy";
import DateManu from "../components/Date/Date";
// import { useAppContext } from "../context/appContext";
// import { useEffect } from "react";

const Counter = () => {
  // const { getTodayData } = useAppContext();

  // useEffect(() => {
  //   getTodayData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <>
      <DateManu />
      <Dairy />
    </>
  );
};

export default Counter;
