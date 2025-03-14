import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import { fetchAvailableMeals } from "./util/https";
import Meals from "./components/Meals";

function App() {
  const [availableMeals, setAvailableMeals] = useState([]);
  const [error, setError] = useState([]);

  /* const fetchMeals = useCallback(async() => {
    try {
      const meals = await fetchAvailableMeals();
      setAvailableMeals(meals);
    } catch (error) {
      setError({ message: error.message || 'Failed to fetch available meals'})
    }
  })

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]) */

  // oppure, per evitare un ulteriore lavoro non necessario
  
  
  useEffect(() => {
    const fetchMeals = async() => {
      try {
        const meals = await fetchAvailableMeals();
        setAvailableMeals(meals);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch available meals'})
      }
    }

    fetchMeals();
  }, [])
  
  
  return (
    <>
      <Header />
      <Meals 
        meals={availableMeals}
      />
    </>
  );
}

export default App;
