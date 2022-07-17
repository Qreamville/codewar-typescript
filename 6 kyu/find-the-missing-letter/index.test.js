const findMissingLetter = require("./index.js");

test("Missing letters tests", () => {
  expect(findMissingLetter(["a", "b", "c", "d", "f"])).toBe("e");
});

// "npm run test" to run test
