import React, { useEffect, useState } from "react";

export default function UseFetchHook(url, options) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    const response = await fetch(url, { ...options });
    const result = await response.json();
    // console.log(result.quotes);
    if (result) {
      setLoading(false);
      setData(result.quotes);
    }
    return { data };
  }

  useEffect(() => {
    fetchData();
  }, []);
  return { data, loading };
}
