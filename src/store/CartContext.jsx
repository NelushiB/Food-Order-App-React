import { createContext } from "react";


const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
})

function cartReducer(state, action){
    if( action.type === "ADD_ITEM"){

    }
}

export function CartContextProvider() {
    return <CartContext></CartContext> // Se utilizziamo la versione 19 di react, non serve aggiungere .Provider
} 

export default CartContext;