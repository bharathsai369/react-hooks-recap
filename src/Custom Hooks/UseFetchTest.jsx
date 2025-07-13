import React from "react";
import UseFetchHook from "./UseFetchHook";

export default function UseFetchTest() {
  const { data, loading } = UseFetchHook("https://dummyjson.com/quotes", {});

  console.log(data, loading);

  return (
    <div>
      <h2>UseFetch Hook Test</h2>
      <ul>
        {data  && data.length > 0 ? (
          data.map((quote) => <li>{quote.quote}</li>)
        ) : (
          <h3>No Data from fetching?</h3>
        )}
      </ul>
    </div>
  );
}
