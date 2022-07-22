function isNegativeZero(n: number): boolean {
  return Object.is(Math.sign(n), -0);
}

// module.exports = isNegativeZero
