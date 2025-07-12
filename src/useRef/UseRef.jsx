import React, { useEffect, useRef } from "react";

export default function UseRef() {
  const countVal = useRef(0);
  const h3Reference = useRef();
  const inputRef = useRef();

  function handleClick() {
    countVal.current++;
    console.log(countVal);
    console.log(countVal.current);
  }

  useEffect(() => {
    const getH3Reference = h3Reference.current;
    console.log(getH3Reference);
  }, []);

  useEffect(() => {
    inputRef.current.focus();
    console.log(inputRef.current);
  }, []);
  console.log(inputRef.current);

  return (
    <div>
      <h2>UseRef</h2>
      <button onClick={handleClick}>click me</button>
      <h3 ref={h3Reference}>some thing something</h3>
      <input type="text" placeholder="enter some points" ref={inputRef} />
    </div>
  );
}
