export function decrement() {
  return { type: "DECREMENT" };
}

export function increment() {
  return { type: "INCREMENT" };
}

export function decrementByAmount(amount) {
  return {
    type: "DECREMENT_BY_AMOUNT",
    payload: amount,
  };
}

export function incrementByAmount(amount) {
  return {
    type: "INCREMENT_BY_AMOUNT",
    payload: amount,
  };
}
