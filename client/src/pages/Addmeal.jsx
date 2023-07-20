import { useParams } from "react-router-dom";
import FoodList from "../components/Addmeal/FoodList";
import SearchBar from "../components/Addmeal/SearchBar";
import MealsInfo from "../components/Addmeal/MealsInfo";
import DateManu from "../components/Date/Date";
import { useAppContext } from "../context/appContext";
import CSS from "./addmeal.module.css";

// const recipe = https://api.edamam.com/api/recipes/v2?type=public&q=${qurry}&app_id=0d25fcd6&app_key=5824e28acfc9c6768c6053a641823509;
//https://api.edamam.com/api/food-database/v2/parser?app_id=ce4bd46d&app_key=60eee620bd9035714e30b7ca0fd5a1b0&ingr=rice&nutrition-type=cooking

const Addmeal = () => {
  const { mealTime } = useParams();

  const { searchedfoods, findMealTime } = useAppContext();
  const addInfo = findMealTime(mealTime);

  // const addFoodHandler = (e) => {
  //   e.preventDefault();

  //   addFood(mealTime);
  //   emptySearchedFood();
  // };
  // const addFoodHandler = (nutrients, label) => {
  //   addFood(mealTime, nutrients, label, amount);
  // };

  return (
    <>
      <DateManu />
      <div className={CSS.container}>
        <div className={CSS.item1}>
          <SearchBar />
          <div className={CSS.searchedFood}>
            {searchedfoods.map((food, index) => (
              <FoodList
                key={index}
                id={index}
                foodInfo={food.food}
                foodMeasure={food.measures}
                mealtime={mealTime}
              />
            ))}
          </div>
        </div>
        <MealsInfo
          mealtime={mealTime}
          className={CSS.item2}
          calorie={addInfo.Calories}
          carbs={addInfo.Carbs}
          protein={addInfo.Protein}
          fats={addInfo.Fats}
        />
      </div>
    </>
  );
};

export default Addmeal;
