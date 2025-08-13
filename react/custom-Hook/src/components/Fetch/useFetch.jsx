import { useEffect, useState } from "react";

export default function useFetch(url) {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Failed to fetch data");
        }
        return resp.json();
      })
      .then((result) => setData(result))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
