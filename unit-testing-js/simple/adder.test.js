import { adder } from "./adder";

describe("Adding returns correct values", () => {
  it("Adding positives 1 + 2 equals 3", () => {
    expect(adder(1, 2)).toBe(3);
  });

  it("Adding negatives -1 + (-2) equals -3", () => {
    expect(adder(-1, -2)).toBe(-3);
  });

  it("Adding zeroes results in a zero", () => {
    expect(adder(0, 0)).toBe(0);
  });

  it("Inserting string result in an error", () => {
    expect(adder("1", "2")).toBe("Please use numbers only");
  });
});

// Parametrized testing
describe("Adding returns correct values with parameters", () => {
  it.each([
    [1, 2, 3],
    [-1, -2, -3],
    [0, 0, 0],
    ["1", "2", "Please use numbers only"],
    [[1], 2, "Please use numbers only"],
    [{ 1: 1 }, 2, "Please use numbers only"],
  ])(`When given %p and %p it results to %p`, (a, b, result) => {
    expect(adder(a, b)).toBe(result);
  });
});
