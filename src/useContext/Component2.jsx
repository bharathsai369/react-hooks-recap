import React, { useContext } from "react";
import { GlobalContext } from "../globalContext";

export default function Component2() {
  const { theme } = useContext(GlobalContext);
  return (
    <div>
      <h2>Login</h2>
      <button style={{ backgroundColor: theme === "blue" ? "red" : "blue" }}>
        Login
      </button>
    </div>
  );
}
