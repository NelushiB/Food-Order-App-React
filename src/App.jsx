import Cart from "./components/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

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
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
