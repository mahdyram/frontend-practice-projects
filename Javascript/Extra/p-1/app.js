const form1 = document.querySelector("#form");
const title1 = document.querySelector("#title");
const price1 = document.querySelector("#price");
const products = document.querySelector("#products");

const addProduct = (event) => {
  event.preventDefault();

  const productItem = document.createElement("li");
  const productInfo = document.createTextNode(
    `${title1.value} - ${price1.value} `
  );

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.style.padding = "0 4px";
  deleteBtn.style.fontSize = "20px";
  deleteBtn.style.cursor = "pointer";
  deleteBtn.style.position = "absolute";
  deleteBtn.style.right = "10px";

  deleteBtn.addEventListener("click", () => {
    products.removeChild(productItem);
  });

  productItem.appendChild(productInfo);
  productItem.appendChild(deleteBtn);

  products.appendChild(productItem);

  title1.value = "";
  price1.value = "";
};

form1.addEventListener("submit", addProduct);
