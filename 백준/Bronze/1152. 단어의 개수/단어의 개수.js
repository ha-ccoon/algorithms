const fs = require('fs');
const input = fs.readFileSync('/dev/stdin');
const switchToArr = input.toString().trim().split(' ');
const removeZeroException = switchToArr[0] === '' ? 0 : switchToArr.length;

console.log(removeZeroException);