import React, {useState} from 'react';
import './App.css';
import Greeter from "./components/Greeter"
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';

function App() {
  interface Item {
    id: number,
    product: string,
    quantity: number
  }

  interface ShoppingListProps {
    items: Item[]
  }

  const [items, setItems] = useState<Item[]>([])

  

  // const items = [
  //   {id: 1, product: "Sea Shoes", quantity: 2},
  //   {id: 2, product: "Pasta", quantity: 5}
  // ]

  return (
    <div className="App">
      <Greeter person="Rina"/>
      <ShoppingList items={items} ShoppingListProps={ShoppingListProps}/>
      <ShoppingListForm />
    </div>
  );
}

export default App;
