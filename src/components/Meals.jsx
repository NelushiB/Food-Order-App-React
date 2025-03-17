import { useEffect, useState } from "react";
import MealItem from "./MealItem";
import { fetchAvailableMeals } from "../util/https";

export default function Meals() {
  const [availableMeals, setAvailableMeals] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const meals = await fetchAvailableMeals();
        setAvailableMeals(meals);
      } catch (error) {
        setError({
          message: error.message || "Failed to fetch available meals",
        });
      }
    };

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {availableMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
