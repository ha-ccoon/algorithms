const fs = require('fs');

const input = fs.readFileSync('/dev/stdin');
const switchToStr = input.toString().split(' ');
const a = parseInt(switchToStr[0]);
const b = parseInt(switchToStr[1]);

console.log(a - b);
