import { useEffect, useState } from "react";

export default function useFetch(url) {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        const resp = await fetch(url, { signal: controller.signal });
        if (!resp.ok) throw new Error("Failed to fetch data");
        const result = await resp.json();
        setData(result);
      } catch (err) {
        if (err.name !== "CanceledError") setError(err.message);
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort(); //? Cancel the request when the component unmounts or the URL changes
  }, [url]);

  return { data, loading, error };
}
