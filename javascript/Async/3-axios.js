// ========================================
// Fetch

async function getAdvice() {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const advice = await res.json();
    console.log(advice);
  } catch (err) {
    console.error(err.message);
  } finally {
    console.log("\n✅ Promise done");
  }
}

getAdvice();

// ========================================
// Axios

// import axios from "axios";
const axios = require("axios");

async function getAdvice() {
  try {
    const advice = await axios.get("https://api.adviceslip.com/advice");
    console.log(advice.data);
  } catch (err) {
    console.error("Axios request failed:", err);
  } finally {
    console.log("\n✅ Promise done");
  }
}

getAdvice();

// ----------------------------------------
// Abort

const axios = require("axios");
const controller = new AbortController();

(async () => {
  try {
    const { data } = await axios("https://api.adviceslip.com/advice", {
      signal: controller.signal,
    });
    console.log(data);
  } catch (err) {
    if (err.name === "CanceledError") console.log("Aborted:", err.message);
    else console.error(err.message);
  } finally {
    console.log("\n✅ Promise done");
  }
})();

controller.abort();

// ----------------------------------------
// Params

const axios = require("axios");

(async () => {
  try {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=21fc2482aa83b37cee190acef671137a&language=en-US&with_genres=28&page=7"
    );

    console.log(data.results);
  } catch (err) {
    console.error("Axios request failed:", err);
  }
})();

// --------------------
//* better patern

const axios = require("axios");

(async () => {
  try {
    const { data } = await axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "21fc2482aa83b37cee190acef671137a",
        language: "en-US",
        with_genres: 28,
        page: 7,
      },
    });

    console.log(data.results[1]);
  } catch (err) {
    console.error("Axios request failed:", err);
  }
})();

// ----------------------------------------
// Instance

const axios = require("axios");

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "21fc2482aa83b37cee190acef671137a",
    language: "en-US",
  },
});

// first request
(async () => {
  try {
    const { data } = await instance.get("/discover/movie", {
      params: { with_genres: 28, page: 7 },
    });
    console.log("Action Movie:", data.results[1].title);
  } catch (err) {
    console.error("Axios request failed:", err);
  }
})();

// second request
(async () => {
  try {
    const { data } = await instance.get("/movie/popular", {
      params: { with_genres: 35, page: 2 },
    });
    console.log("Popular Movie:", data.results[0].title);
  } catch (err) {
    console.error("Axios request failed:", err);
  }
})();

// --------------------

const axios = require("axios");

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "21fc2482aa83b37cee190acef671137a",
    language: "fa-FA",
  },
});

(async () => {
  try {
    // first request
    const { data } = await instance.get("/discover/movie", {
      params: { with_genres: 28, page: 4 },
    });
    console.log("Action Movie:", data.results[1].title);

    // second request
    const { data: data2 } = await instance.get("/movie/popular", {
      params: { with_genres: 35, page: 2 },
    });
    console.log("Popular Movie:", data2.results[0].title);
  } catch (err) {
    console.error("Axios request failed:", err);
  }
})();
