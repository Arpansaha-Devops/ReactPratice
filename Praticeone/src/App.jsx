import React, { useState } from 'react';
import Picture from "./Download.jpg";
import './App.css';

function App() {

 
  const [username, setUsername] = useState("");

  function name() {
   setUsername(prev => (prev ? "" : "Arpan"));
  }

  function Sum(a, b) {
    return a + b;
  }

  return (
    <>
      <h1>Fortuner Image</h1>

      <img src={Picture} alt="Fortuner" />

      <ul>
        <li>This is Indian brand Car</li>
        <li>The name of this Car is Fortuner</li>
        <li>This Car price is : {Sum(3000000, 4000000)}</li>
      </ul>

      <button onClick={name}>Click me</button>

     
      {username && <h2>Hello, {username}</h2>}
    </>
  );
}

export default App;
