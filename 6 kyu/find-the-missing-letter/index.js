"use strict";
function findMissingLetter(array) {
    for (let i = 0; i < array.length; i++) {
        let strNumber = array[i].charCodeAt(0);
        if (strNumber !== array[i + 1].charCodeAt(0) - 1) {
            return String.fromCharCode(strNumber + 1);
        }
    }
    return "";
}
module.exports = findMissingLetter;
