const negativeZero = require("./index.js");

describe("Testing solutions", () => {
  test("Negative zeros equates to true", () => {
    expect(negativeZero(-0)).toBeTruthy();
  });

  test("Negative zeros equates to true", () => {
    expect(negativeZero(0)).toBeFalsy();
  });

  test("Negative zeros equates to true", () => {
    expect(negativeZero(-9)).toBeFalsy();
  });

  test("Negative zeros equates to true", () => {
    expect(negativeZero(-8)).toBeFalsy();
  });

  test("Negative zeros equates to true", () => {
    expect(negativeZero(10)).toBeFalsy();
  });
});
