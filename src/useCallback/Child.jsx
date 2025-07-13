import React, { memo } from "react";

function Child({ text, onClick }) {
  console.log("Child is rendered", text);

  return <button onClick={onClick}>{text}</button>;
}

export default memo(Child);
