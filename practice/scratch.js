// const input = fs.readFileSync('/dev/stdin')

const fs = require('fs');
const input = fs.readFileSync('./practice/question.txt');
const switchToArr = input.toString().trim().split(' ');
const checkLength = switchToArr.length;

console.log(typeof checkLength);
