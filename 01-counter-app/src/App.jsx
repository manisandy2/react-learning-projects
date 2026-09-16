import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 5);
  };

  const decrement = () => {
  setCount((previousCount) => {
    if (previousCount === 0) {
      return 0;
    }

    return previousCount - 1;
  });
};

  const reset = () => {
    setCount(0);
  };

  const doubleCount = () => {
  setCount((previousCount) => previousCount * 2);
};



  return (
    <>
      <div className="Counter-container">
        <h1>Counter App</h1>

      <h2>{count}</h2>

      <div className="buttons">
        <button onClick={decrement}>-</button>

        <button onClick={reset}>Reset</button>

        <button onClick={increment}>+</button>
        <button onClick={doubleCount}>double</button>
      </div>

      </div>
    </>
  );
}

export default App;