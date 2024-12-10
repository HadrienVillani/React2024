import React, { useEffect, useState } from "react";

function Button({ name, number }) {
  const [count, setCount] = useState(0);
  const [toggleStart, setToggleStart] = useState(false);
  const [cycle, setCycle] = useState(0);

  const start = () => {
    setToggleStart(true);
  };

  const stop = () => {
    setToggleStart(false);
  };
  useEffect(() => {
    if (toggleStart && count < 20) {
      setTimeout(() => {
        setCount(count + number);
      }, 1000);
    }
  });
  if (count === 20) {
    setCycle(cycle + 1);
    setCount(0);
  }
  return (
    <div>
      <h3>{name}</h3>
      <p>{cycle}</p>
      <p>{count}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}

export default Button;
