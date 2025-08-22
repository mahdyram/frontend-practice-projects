import axios from "axios";
import { useEffect, useState } from "react";

export default function useMovieDB({ page, with_genres }) {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    async function loadData() {
      try {
        const { data } = await axios.get(
          "https://api.themoviedb.org/3/discover/movie",
          {
            params: {
              api_key: "21fc2482aa83b37cee190acef671137a",
              language: "en-US",
              with_genres,
              page,
            },
            signal: controller.signal,
          }
        );
        setData(data.results);
      } catch (err) {
        if (err.name !== "CanceledError") setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadData();
    return () => controller.abort();
  }, [page, with_genres]);

  return { data, loading, error };
}
