import { useState } from "react";
import "./RandomTask.css";

function RandomTask() {
  const [num, setNum] = useState(0);

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClick = () => {
    setNum(randomNumberInRange(1, 20));
  };

  return (
    <div className="wrapper">
      <h2 className="num">Your task is: {num}</h2>
      <button onClick={handleClick}>Pick for me</button>
    </div>
  );
}

export default RandomTask;
