import React, { useState } from "react";

const initialState = false;

export default function UseStateExOne() {
  const [toggleText, setToggleText] = useState(initialState);
  console.log(toggleText);

  return (
    <div>
      <h1>UseStateHook</h1>
      {toggleText ? <p>konnichiwa!</p> : <p>sayonara</p>}
      <button onClick={() => setToggleText(!toggleText)}>toggle text</button>
    </div>
  );
}
