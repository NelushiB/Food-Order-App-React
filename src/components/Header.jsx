import { useContext } from 'react'
import logo from '../assets/logo.jpg'
import Button from './ui/Button'
import CartContext from '../store/CartContext'

 export default function Header() {
  const {items} = useContext(CartContext);

  /* Funzione reduce
  array.reduce((accumulatore, elementoCorrente(singolo oggetto dell'array)) => { ... }, valoreIniziale)
  */
  const totalCartItems = items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  return (
    <header id='main-header'>
        <div id='title'>
            <img src={logo} alt="A restaurant" />
            <h1>React food</h1>
        </div>
        <nav>
            <Button textOnly>Cart ({totalCartItems})</Button>
        </nav>
    </header>
  )
}
