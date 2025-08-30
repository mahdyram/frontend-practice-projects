const store = {
  state: { cart: [], shop: [] },

  getState() {
    return this.state;
  },

  dispatch(action) {
    this.state = reducer(this.state, action);
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD-TO-CART":
      return { ...state, cart: [...state.cart, action.payload] };

    case "ADD-TO-SHOP":
      return { ...state, shop: [...state.shop, action.payload] };

    default:
      return state;
  }
}

function addToCart(product) {
  return { type: "ADD-TO-CART", payload: product };
}

function addToShop(store) {
  return { type: "ADD-TO-SHOP", payload: store };
}

store.dispatch(addToCart("apple"));
store.dispatch(addToShop("store1"));
console.log(store.getState());
