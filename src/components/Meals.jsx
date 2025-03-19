import useHttp from "../hooks/useHttp";
import MealItem from "./MealItem";

// evita la ricreazione a ogni render
const requestConfig = {};

export default function Meals() {
  // const [availableMeals, setAvailableMeals] = useState([]);
  // const [error, setError] = useState([]);

  // useEffect(() => {
  //   const fetchMeals = async () => {
  //     try {
  //       const meals = await fetchAvailableMeals();
  //       setAvailableMeals(meals);
  //     } catch (error) {
  //       setError({
  //         message: error.message || "Failed to fetch available meals",
  //       });
  //     }
  //   };

  //   fetchMeals();
  // }, []);

  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if(isLoading){
    return <p className="center">Fetching meals...</p>
  }
  
  if(error){
    return <Error title="Failed to fetch meals" messagge={error} />
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
