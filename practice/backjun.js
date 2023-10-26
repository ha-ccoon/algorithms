// const input = fs.readFileSync('/dev/stdin');

const fs = require('fs');
const input = fs
  .readFileSync('./practice/question.txt')
  .toString()
  .trim()
  .split(' ');

const sum = input.reduce((prev, curr) => prev + curr * curr, 0);

console.log(sum % 10);
