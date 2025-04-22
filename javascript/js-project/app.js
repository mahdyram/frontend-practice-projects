// DOM

// const form = document.getElementById("form");
// const container = document.getElementByClassName("container");
// const div = document.getElementByTagName("div");

const form1 = document.querySelector("#form");
const title1 = document.querySelector("#title");
const price1 = document.querySelector("#price");
const products = document.querySelector("#products");

const addProduct = (event) => {
  event.preventDefault();

  const productItem = document.createElement("li");
  const productInfo = document.createTextNode(
    `${title1.value} - ${price1.value}`
  );
  productItem.appendChild(productInfo);

  products.appendChild(productItem);

  title1.value = "";
  price1.value = "";
};

form.addEventListener("submit", addProduct);
