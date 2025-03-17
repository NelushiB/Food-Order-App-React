import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    // verifico se l'elemento esiste già nell'array
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // Creo una copia del vecchio array
    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      // Recupero l'oggetto esistente
      const existingItem = state.items[existingCartItemIndex];
      //Creo un nuovo ogetto copiando le proprietà di existingItem e aggiorno la quantità
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      //Sostituisco l'elemento esiste con quello aggiornato
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // Aggiungo un nuovo elemento al carrello, con quantità 1
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    const updatedItems = [...state.items];

    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };

  console.log("cart context", cartContext)

  return(
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
