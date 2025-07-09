import React, { useEffect, useState } from "react";

export default function UseEffectExTwo() {
  const [quoteList, setQuoteList] = useState([]);
  async function fetchData() {
    const data = await fetch("https://dummyjson.com/quotes");
    const result = await data.json();
    // console.log(result.quotes);
    // console.log(result.quotes[0]);
    setQuoteList(result.quotes);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h2>useEffect Hook</h2>

      {quoteList.map((i) => (
        <ul key={i.id}>
          <li>id:{i.id}</li>
          <li>quote:{i.quote}</li>
          <li>author:{i.author}</li>
        </ul>
      ))}
    </div>
  );
}
