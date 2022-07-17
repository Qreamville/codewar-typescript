const persistence = require("./index.js");

test("Multiplication tests", () => {
  expect(persistence(999)).toBe(4);
});

test("Multiplication tests", () => {
  expect(persistence(39)).toBe(3);
});

test("Multiplication tests", () => {
  expect(persistence(4)).toBe(0);
});

test("Multiplication tests", () => {
  expect(persistence(25)).toBe(2);
});

// "npm run test" to run test
