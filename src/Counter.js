import "./App.css";
import { useState } from "react";

const Counter = () => {
  const [age, setAge] = useState(0);
  let increaseAge = () => {
    setAge(age + 1);
  };
  let decreaseAge = () => {
    setAge(age - 1);
  };
  let resetAge = () => {
    setAge(0);
  };
  return (
    <div>
      <h1>{age}</h1>
      <div className="buttons">
        <button onClick={decreaseAge}>Deduct</button>
        <button onClick={resetAge}>Reset</button>
        <button onClick={increaseAge}>Add </button>
      </div>
    </div>
  );
};
export default Counter;
