const store = {
  state: { cart: [], shop: [] },

  getState() {
    return this.state;
  },

  dispatch(action) {
    if (action.type == "ADD-TO-CART") {
      this.state.cart.push(action.payload);
    } else if (action.type == "ADD-TO-SHOP") {
      this.state.shop.push(action.payload);
    }
  },
};

function addToCart(product) {
  return { type: "ADD-TO-CART", payload: product };
}

function addToShop(store) {
  return { type: "ADD-TO-SHOP", payload: store };
}

store.dispatch(addToCart("apple"));
store.dispatch(addToShop("store1"));
console.log(store.getState());
