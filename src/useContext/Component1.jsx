import React, { useContext } from "react";
import { GlobalContext } from "../globalContext";

export default function Component1() {
  const { theme } = useContext(GlobalContext);
  return (
    <div>
      <h2>register</h2>
      <button style={{ backgroundColor: theme === "red" ? "blue" : "red" }}>
        register
      </button>
    </div>
  );
}
