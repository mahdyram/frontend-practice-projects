const form1 = document.querySelector("#form");
const title1 = document.querySelector("#title");
const price1 = document.querySelector("#price");
const products = document.querySelector("#products");

const addProduct = (e) => {
  e.preventDefault();

  const productItem = document.createElement("li");
  const productInfo = document.createTextNode(
    `${title1.value} - ${price1.value}`
  );

  productItem.appendChild(productInfo);
  products.appendChild(productItem);

  title1.value = "";
  price1.value = "";
};

form1.addEventListener("submit", addProduct);
