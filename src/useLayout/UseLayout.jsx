import React, { useEffect, useLayoutEffect, useRef } from "react";

export default function UseLayout() {
  const h3Ref = useRef();
  const inputRef = useRef();

  console.log(inputRef.current);

  useEffect(() => {
    console.log("useeffect called");
    // const getH3Ref = h3Ref.current;
    // getH3Ref.style.opacity = 1;

    // setTimeout(() => {
    //   getH3Ref.style.opacity = 1;
    //   console.log(getH3Ref);
    // }, 3000);

    inputRef.current.value = "damn you";
    console.log(inputRef.current);
  }, []);

  useLayoutEffect(() => {
    console.log("uselayouteffect called");
    // console.log(h3Ref.current);

    const getH3Ref = h3Ref.current;
    // console.log(getH3Ref);

    getH3Ref.style.opacity = 0;

    setTimeout(() => {
      getH3Ref.style.opacity = 1;
      getH3Ref.style.color - "red";
    }, 3000);
  }, []);

  return (
    <div>
      <h2>UseLayout</h2>
      <h3 ref={h3Ref}>using useRef</h3>
      <input type="text" value={"duck you"} ref={inputRef} />
    </div>
  );
}
