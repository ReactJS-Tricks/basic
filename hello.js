console.log("hello world")
console.log("hello world again");
import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }, []); // <- Empty dependency array means "run only once"

  return <h1>I've rendered {count} times!</h1>;
}
function Counter() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
  
    useEffect(() => {
      setCalculation(() => count * 2);
    }, [count]); // <- We're watching the count variable here
  
    return (
      <>
        <p>Count: {count}</p>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
        <p>Calculation: {calculation}</p>
      </>
    );
  }
  