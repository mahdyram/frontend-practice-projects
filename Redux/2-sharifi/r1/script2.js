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

store.dispatch({ type: "ADD-TO-CART", payload: "apple" });
store.dispatch({ type: "ADD-TO-SHOP", payload: "stor1" });
console.log(store.getState());
