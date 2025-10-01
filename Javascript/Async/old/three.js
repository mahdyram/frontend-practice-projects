// ========================================
// Promises

const getDataPromis = function (url) {
  return new Promise(function (resolve, reject) {
    const req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = function () {
      if (req.status !== 200) {
        reject(new Error("not found..."));
        return;
      }
      const data = JSON.parse(req.responseText);
      resolve(data);
    };

    req.onerror = function () {
      reject(new Error("Network error"));
    };

    req.send();
  });
};

// .then().catch()
getDataPromis("data.json")
  .then((data) => {
    console.log("getDataPromis(data-then.catch): ", data);
  })
  .catch((err) => {
    console.log("getDataPromis(error-then.catch): ", err.message);
  });

// async/await
(async function () {
  try {
    const data = await getDataPromis("data.json");
    console.log("getDataPromis(data-async/await): ", data);
  } catch (err) {
    console.error("getDataPromis(error-async/await):", err.message);
  }
})();

// ----------------------------------------

const getDataPromis2 = (url) => {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open("GET", url);

    req.onload = function () {
      const { status, responseText } = req;

      if (status !== 200) {
        return reject(new Error(`Request failed with status ${status}`));
      }

      try {
        const data = JSON.parse(responseText);
        resolve(data);
      } catch (err) {
        reject(new Error("Invalid JSON response"));
      }
    };

    req.onerror = function () {
      reject(new Error("Network error"));
    };

    req.send();
  });
};

// .then().catch()
getDataPromis2("data.json")
  .then(function (data) {
    console.log("getDataPromis2(data-then.catch): ", data);
  })
  .catch(function (err) {
    console.log("getDataPromis2(error-then.catch): ", err.message);
  });

// async/await
async function fetchData() {
  try {
    const data = await getDataPromis2("data.json");
    console.log("getDataPromis2(data-async/await): ", data);
  } catch (err) {
    console.error("getDataPromis2(error-async/await):", err.message);
  }
}
fetchData();

// --------------------
// toodartoo(baraye tartib)

const url4 = "https://jsonplaceholder.typicode.com/todos/4";
const url5 = "https://jsonplaceholder.typicode.com/todos/5";
const url6 = "https://jsonplaceholder.typicode.com/todos/6";

// then.catch:
getDataPromis2(url4)
  .then(function (data) {
    console.log("data url4: ", data);
    return getDataPromis2(url5);
  })
  .then(function (data) {
    console.log("data-url5: ", data);
    return getDataPromis2(url6);
  })
  .then(function (data) {
    console.log("data url6: ", data);
  })
  .catch(function (err) {
    console.log("getDataPromis2(error-then.catch): ", err.message);
  });

// async/await:
async function fetchData2() {
  try {
    const data1 = await getDataPromis2(url4);
    console.log("data url4:", data1);

    const data2 = await getDataPromis2(url5);
    console.log("data url5:", data2);

    const data3 = await getDataPromis2(url6);
    console.log("data url6:", data3);
  } catch (err) {
    console.log("getDataPromis2(error-async/await):", err.message);
  }
}
fetchData2();
