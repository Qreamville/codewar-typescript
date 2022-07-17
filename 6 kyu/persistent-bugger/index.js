"use strict";
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)
const persistence = (num) => {
  let strNum = String(num);
  let persistenceNum = 0;
  for (let i = strNum.length; strNum.length !== 1; i--) {
    let calc = eval(strNum.split("").join("*"));
    strNum = String(calc);
    persistenceNum += 1;
  }
  return persistenceNum;
};

module.exports = persistence;
