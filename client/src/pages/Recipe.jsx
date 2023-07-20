import React from "react";
import { useState } from "react";
import { useAppContext } from "../context/appContext";
import CSS from "./recipe.module.css";

const Recipe = () => {
  const [search, setSearch] = useState("");
  const [meal, setMeal] = useState("");
  const { getRecipe, recipe } = useAppContext();
  const handleSChange = (e) => {
    setSearch(e.target.value);
  };
  const handleMChange = (e) => {
    setMeal(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getRecipe(meal, search);
    console.log(recipe);
    setSearch("");
  };
  return (
    <div className={CSS.heading}>
      <h1>Recipe Search</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          value={search}
          onChange={handleSChange}
          placeholder="Search"
        />
        <select name="Unit" onChange={handleMChange} value={meal}>
          <option value="Breakfast">Breakfast</option>
          <option value="1">Lunch</option>
          <option value="200">Dinner</option>
        </select>

        <button className={CSS.button} type="submit">
          <p className={CSS.search}>Search</p>
        </button>
      </form>
      <div>
        {recipe.map((rec) => (
          <h2>{rec.recipe.lable}</h2>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
