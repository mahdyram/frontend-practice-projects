export function addUser(userName) {
  return { type: "ADD_USER", payload: userName };
}

export function addProduct(productName) {
  return { type: "ADD_PRODUCT", payload: productName };
}
