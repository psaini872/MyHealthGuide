import mealData from "../models/food.js";

// Get Food data and report

const getFoodByDate = async (req, res) => {
  let dataOfTheDay = await mealData.aggregate([
    {
      $match: {
        date: { $eq: req.params.id },
        addedby: { $eq: req.user._id },
      },
    },
    {
      $group: {
        _id: "$mealtime",
        items: { $push: { name: "$name" } },
        totalCalories: { $sum: "$nutrients.Calories" },
        totalCarbs: { $sum: "$nutrients.Carbs" },
        totalProtein: { $sum: "$nutrients.Protein" },
        totalFats: { $sum: "$nutrients.Fats" },
      },
    },
  ]);
  const Daynutrients = await mealData.aggregate([
    {
      $match: {
        date: { $eq: req.params.id },
        addedby: { $eq: req.user._id },
      },
    },
    {
      $group: {
        _id: null,
        items: { $push: { name: "$name" } },
        daytotalCalories: { $sum: "$nutrients.Calories" },
        daytotalCarbs: { $sum: "$nutrients.Carbs" },
        daytotalProtein: { $sum: "$nutrients.Protein" },
        daytotalFats: { $sum: "$nutrients.Fats" },
      },
    },
  ]);
  dataOfTheDay = [...Daynutrients, ...dataOfTheDay];
  console.log("done get");
  res.status(200).json(dataOfTheDay);
};

// ADD FOOD

const postFoodByDate = async (req, res) => {
  req.body.addedby = req.user._id;
  const food = await mealData.create(req.body);
  console.log(food);
  res.status(200).json({ food });
};

// Edit Food Data

const updateFoodByDate = async (req, res) => {
  res.status(200).json();
};
export { getFoodByDate, postFoodByDate, updateFoodByDate };
