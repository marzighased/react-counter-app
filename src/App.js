import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  
  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h2>Counter App</h2>
      <button className="counter-button" onClick={increase}>+</button>
      <h1 className="counter-display">{count}</h1>
      <button className="counter-button" onClick={decrease}>-</button>
      
    </div>
  );
}

export default App;