import React, { useCallback, useState } from "react";
import Child from "./Child";
export default function UseCallback() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const memorizeSetCountOneFunc = useCallback(
    () => setCount1(count1 + 1),
    [count1]
  );
  const memorizeSetCountTwoFunc = useCallback(
    () => setCount2(count2 + 1),
    [count2]
  );

  return (
    <div>
      <h2>UseCallback</h2>
      {count1}, {count2}
      <Child text={"btn one"} onClick={memorizeSetCountOneFunc} />
      <Child text={"btn two"} onClick={memorizeSetCountTwoFunc} />
    </div>
  );
}
