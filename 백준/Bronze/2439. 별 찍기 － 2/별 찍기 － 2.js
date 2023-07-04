const fs = require('fs');
const input = fs.readFileSync('/dev/stdin');

const number = parseInt(input);
let starTree = '';

for (i = 0; i < number; i++) {
  starTree += '*';

  const switchToString = starTree.toString();
  const startFromRight = switchToString.padStart(number);
  console.log(startFromRight);
}