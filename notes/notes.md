
---

# 🧠 React Hooks - Beginner Notes

## ⏱️ `useState` (0:40)

### ✅ What is it?

* Allows you to add **state** in functional components.

### 📦 When to use?

* For storing and updating values like counters, inputs, toggles, etc.

### 🧪 Example

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // count is state

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```

---

## 🎯 `useEffect` (12:42)

### ✅ What is it?

* Lets you run **side effects** (like API calls, event listeners, timers).

### 📦 When to use?

* When something should happen after render (like fetch data, DOM update).

### 🧪 Example

```jsx
import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(interval); // cleanup
  }, []);

  return <p>Time: {seconds}s</p>;
}
```

---

## 🌐 `useContext` (22:15)

### ✅ What is it?

* Lets you **share values** between components without prop drilling.

### 📦 When to use?

* When you need to access global data (theme, auth, etc.) across components.

### 🧪 Example

```jsx
const ThemeContext = React.createContext();

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Navbar />
    </ThemeContext.Provider>
  );
}

function Navbar() {
  const theme = React.useContext(ThemeContext);
  return <p>Theme: {theme}</p>;
}
```

---

## ⚙️ `useReducer` (32:32)

### ✅ What is it?

* Like `useState`, but for **complex state logic** (like in Redux).

### 📦 When to use?

* When state has multiple values or transitions.

### 🧪 Example

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = React.useReducer(reducer, { count: 0 });

  return (
    <button onClick={() => dispatch({ type: "increment" })}>
      {state.count}
    </button>
  );
}
```

---

## 🔍 `useRef` (40:58)

### ✅ What is it?

* Stores a **mutable reference** that doesn’t cause re-renders.

### 📦 When to use?

* For DOM access or keeping value across renders (like prev value or timers).

### 🧪 Example

```jsx
function InputFocus() {
  const inputRef = React.useRef();

  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
}
```

---

## 🖼️ `useLayoutEffect` (46:29)

### ✅ What is it?

* Like `useEffect` but **runs synchronously** after DOM mutations.

### 📦 When to use?

* When you need to **measure layout or apply styles** before browser paints.

### 🧪 Example

```jsx
useLayoutEffect(() => {
  // measure something or apply CSS fixes
}, []);
```

---

## 🧠 `useMemo` (52:20)

### ✅ What is it?

* **Memoizes a value** to avoid expensive recalculations.

### 📦 When to use?

* When calculations are heavy and depend on specific values.

### 🧪 Example

```jsx
const expensiveResult = useMemo(() => computeExpensive(x), [x]);
```

---

## 🔁 `useCallback` (59:00)

### ✅ What is it?

* **Memoizes a function** so it doesn't get recreated every render.

### 📦 When to use?

* Useful when passing callbacks to child components.

### 🧪 Example

```jsx
const handleClick = useCallback(() => {
  console.log("clicked");
}, []);
```

---

## 🌐 `useFetch` (1:03:32)

### ✅ What is it?

* A **custom hook** to handle data fetching.

### 📦 When to use?

* To **re-use logic** for fetching API data.

### 🧪 Example

```jsx
function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url).then(res => res.json()).then(setData);
  }, [url]);

  return data;
}
```

---
