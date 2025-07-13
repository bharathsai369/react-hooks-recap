import React, { useEffect, useMemo, useState } from "react";

export default function UseMemo() {
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState(false);

  async function fetchData() {
    const response = await fetch("https://dummyjson.com/products");
    const result = await response.json();

    result && result.products ? setData(result.products) : null;
  }

  useEffect(() => {
    fetchData();
  }, []);

  //   console.log(data);

  const filterProductsByPrice = (getProducts) => {
    console.log("this is getting called");
    return getProducts && getProducts.length > 0
      ? getProducts.filter((item) => item.price > 50)
      : [];
  };

  //   console.log(filterProductsByPrice(data));

  const memorizeFilterProductsByPrice = useMemo(
    () => filterProductsByPrice(data),
    [data]
  );

  return (
    <div>
      <h2>UseMemo</h2>
      {/* <ul>
        {filterProductsByPrice(data).map((item) => (
          <li>{item.title}</li>
        ))}
      </ul> */}
      <ul>
        {memorizeFilterProductsByPrice.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
      <button onClick={() => setTheme(!theme)}>toggle theme</button>
      {theme ? <h3>hello bitches!!!!</h3> : null}
    </div>
  );
}
