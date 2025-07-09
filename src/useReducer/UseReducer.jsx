import React, { useReducer } from "react";

const initialState = {
  count: 0,
  showCountFlag: true,
};

function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "add":
      return {
        ...state,
        count: state.count + 1,
      };
    case "substract":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "showcount":
      return {
        ...state,
        showCountFlag: !state.showCountFlag,
      };
    default:
      return state;
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>useReducer Hook</h2>
      {state.showCountFlag && <h2>count is {state.count}</h2>}{" "}
      <div style={{ display: "flex", gap: "5px", flexDirection: "column" }}>
        <button onClick={() => dispatch({ type: "add" })}>
          increase count
        </button>
        <button onClick={() => dispatch({ type: "substract" })}>
          decrease count
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>reset count</button>
        <button onClick={() => dispatch({ type: "showcount" })}>
          show count
        </button>
      </div>
    </div>
  );
}
