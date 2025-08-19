import axios from "axios";

(async () => {
  try {
    const {data} = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=21fc2482aa83b37cee190acef671137a&language=en-US&with_genres=28&page=7"
    );

    console.log(data.results);
  } catch (err) {
    console.error("Axios request failed:", err);
  }
})();

// --------------------

//* better patern
(async () => {
  try {
    const {data} = await axios.get("https://api.themoviedb.org/3/discover/movie", {
      params: {
        api_key: "21fc2482aa83b37cee190acef671137a",
        language: "en-US",
        with_genres: 28,
        page: 7,
      },
    });
    console.log(data.results);
  } catch (err) {
    console.error("Axios request failed:", err);
  }
})();
