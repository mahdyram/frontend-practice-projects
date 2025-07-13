// ========================================
// CallBack

const getData = function (url) {
  const req = new XMLHttpRequest();
  req.open("GET", url);

  req.onload = function () {
    if (req.status !== 200) return console.log("not found...");
    console.log(JSON.parse(req.responseText));
  };

  req.send();
};

getData("data.json");

getData("https://jsonplaceholder.typicode.com/todos/66");

const url3 = "https://jsonplaceholder.typicode.com/todos";
getData(url3);

// ----------------------------------------

const getData2 = function (url, callback) {
  const req = new XMLHttpRequest();
  req.open("GET", url);

  req.onload = function () {
    if (req.status !== 200) return console.log("not found...");
    const data = JSON.parse(req.responseText);
    callback(data);
  };

  req.send();
};

getData2("data.json", function (data) {
  console.log("second user:", data[1].lName); // second user: kazemi
});

// ----------------------------------------

const getData3 = function (url, callback) {
  const req = new XMLHttpRequest();
  req.open("GET", url);

  req.onload = function () {
    if (req.status !== 200) return callback(new Error("not found..."), null);
    const data = JSON.parse(req.responseText);
    callback(null, data);
  };

  req.onerror = function () {
    callback(new Error("Network error"), null);
  };

  req.send();
};

const url4 = "https://jsonplaceholder.typicode.com/todos/4";
const url5 = "https://jsonplaceholder.typicode.com/todos/5";
const url6 = "https://jsonplaceholder.typicode.com/todos/6";

getData3(url4, function (err, data) {
  if (err) {
    console.error("Error object 4:", err.message);
  } else {
    console.log("Data 4:", data);
  }
});

getData3(url5, function (err, data) {
  if (err) {
    console.error("Error object 5:", err.message);
  } else {
    console.log("Data 5:", data);
  }
});

getData3(url6, function (err, data) {
  if (err) {
    console.error("Error object 6:", err.message);
  } else {
    console.log("Data 6:", data);
  }
});

// in 3 lozooman tartibi nadarnd hengame namayesh dar condole, request ha
// dade mishavad va harkodam ke zodtar beresad, an namayesh dade mishavad.

// --------------------
// baraye inke betartib delkhahe ma namayesh dade shavad (callBack-Hell):

getData3(url4, function (err, data) {
  if (err) {
    console.error("Error object 4.2:", err.message);
  } else {
    console.log("Data 4.2:", data);
    getData3(url5, function (err, data) {
      if (err) {
        console.error("Error object 5.2:", err.message);
      } else {
        console.log("Data 5.2:", data);
        getData3(url6, function (err, data) {
          if (err) {
            console.error("Error object 6.2:", err.message);
          } else {
            console.log("Data 6.2:", data);
          }
        });
      }
    });
  }
});
