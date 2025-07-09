import { useState } from "react";
import { GlobalContext } from "./globalContext";

function GlobalState({ children }) {
  const [theme, setTheme] = useState("blue");
  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
