import "./App.css";
import UseFetchHook from "./Custom Hooks/UseFetchHook";
import UseFetchTest from "./Custom Hooks/UseFetchTest";
import UseCallback from "./useCallback/UseCallback";
import UseContext from "./useContext/UseContext";
import UseEffectExOne from "./useEffect/UseEffectExOne";
import UseEffectExTwo from "./useEffect/UseEffectExTwo";
import UseLayout from "./useLayout/UseLayout";
import UseMemo from "./useMemo/UseMemo";
import UseReducer from "./useReducer/UseReducer";
import UseRef from "./useRef/UseRef";
import UseStateExOne from "./useState/UseStateExOne";
import UseStateExTwo from "./useState/UseStateExTwo";

function App() {
  return (
    <>
      <h1>React Hooks</h1>
      {/* <UseStateExOne /> */}
      {/* <UseStateExTwo /> */}
      {/* <UseEffectExOne /> */}
      {/* <UseEffectExTwo /> */}
      {/* <UseContext /> */}
      {/* <UseReducer /> */}
      {/* <UseRef /> */}
      {/* <UseLayout /> */}
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      <UseFetchTest />
    </>
  );
}

export default App;
