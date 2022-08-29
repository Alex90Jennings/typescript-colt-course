import React, {useState} from 'react';
import './App.css';
import Greeter from "./components/Greeter"
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';
import Item from "./models/Item"
import {v4 as getId} from "uuid"

function App() {
  const [items, setItems] = useState<Item[]>([])

  const onAddItem = (product: string, quantity: number) => {setItems([...items, {id: Number(getId()), product: product, quantity: quantity}])}

  return (
    <div className="App">
      <Greeter person="Rina"/>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={onAddItem}/>
    </div>
  );
}

export default App;
