const store = {
  state: { cart: [], shop: [] },

  getState() {
    return this.state;
  },

  SpeechSynthesisUtterance(product) {
    this.state.cart.push(product);
  },
};

store.SpeechSynthesisUtterance("apple");
store.SpeechSynthesisUtterance("banana");
console.log(store.getState());
