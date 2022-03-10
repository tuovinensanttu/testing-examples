const adder = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Please use numbers only";
  }
  return a + b;
};

export { adder };
