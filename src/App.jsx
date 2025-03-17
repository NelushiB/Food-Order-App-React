import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";

function App() {
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

  return (
    <CartContextProvider>
      <Header />
      <Meals  />
    </CartContextProvider>
  );
}

export default App;
