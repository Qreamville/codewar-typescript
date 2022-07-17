"use strict";
function persistence(num) {
    let strNum = String(num);
    let persistenceNum = 0;
    for (let i = strNum.length; strNum.length !== 1; i--) {
        let calc = eval(strNum.split("").join("*"));
        strNum = String(calc);
        persistenceNum += 1;
    }
    return persistenceNum;
}
console.log(persistence(39));
console.log(persistence(6));
console.log(persistence(25));
