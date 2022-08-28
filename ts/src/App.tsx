import React from 'react';
import './App.css';
import Greeter from "./Greeter"

function App() {
  return (
    <div className="App">
      <Greeter person="Rina"/>
      <Greeter person="Alex"/>
      <Greeter person="Simona"/>
    </div>
  );
}

export default App;
