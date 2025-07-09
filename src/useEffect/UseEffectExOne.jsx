import React, { useEffect, useState } from "react";

export default function UseEffectExOne() {
  const [count, setCount] = useState(0);
  const [showText, setShowtext] = useState(false);

  useEffect(() => {
    console.log("run only once at the start");
  }, []);

  useEffect(() => {
    console.log("run whenver count value is rendered");

    count !== 5 ? setShowtext(false) : setShowtext(!showText);
  }, [count]);

  return (
    <div>
      <h2>UseEffect Hook</h2>
      {showText ? <h2>i am the text</h2> : null}
      <h3>Count : {count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
