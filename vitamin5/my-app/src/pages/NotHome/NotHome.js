import React, { useState, useEffect } from "react";

const NotHome = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    // 计数器不能低于0
    if (count < 0) {
      setCount(0);
    }

    if (count > 5) {
      setMessage("You passed 5!");
    } else {
      setMessage("");
    }
  }, [count]); 

  return (
    <div>
      <h1>This is the NotHome Page</h1>
      <h2>Counter: {count}</h2>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default NotHome;
