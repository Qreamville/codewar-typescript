const persistences = require("./index.ts");

test("Multiplication tests", () => {
  expect(persistences(999)).toBe(4);
});

test("Multiplication tests", () => {
  expect(persistences(39)).toBe(3);
});

test("Multiplication tests", () => {
  expect(persistences(4)).toBe(0);
});

test("Multiplication tests", () => {
  expect(persistences(25)).toBe(2);
});

// "npm run test" to run test
