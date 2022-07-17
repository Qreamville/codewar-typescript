const findMissingLetter = require("./index.js");

test("Missing letters tests", () => {
  expect(findMissingLetter(["a", "b", "c", "d", "f"])).toBe("e");
});

test("Missing letters tests", () => {
  expect(findMissingLetter(["A", "B", "C", "E"])).toBe("D");
});

test("Missing letters tests", () => {
  expect(findMissingLetter(["O", "Q", "R", "S"])).toBe("P");
});

// "npm run test" to run test
