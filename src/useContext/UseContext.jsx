import React, { useContext } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
import { GlobalContext } from "../globalContext";

export default function UseContext() {
  const { setTheme, theme } = useContext(GlobalContext);

  console.log(theme);
  return (
    <div>
      <h1>useContext Hook</h1>
      <button onClick={() => setTheme(theme === "blue" ? "red" : "blue")}>
        change theme
      </button>
      <Component1 />
      <Component2 />
    </div>
  );
}
