const closestMultiple = require("./index.ts");

describe("Testing solutions", () => {
  test("Multiple of 10", () => {
    expect(closestMultiple(25)).toBe(30);
  });
});
