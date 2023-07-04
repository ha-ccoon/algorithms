const fs = require('fs');
const input = fs.readFileSync('/dev/stdin');

const number = parseInt(input);

let stars = '';

for (i = 0; i < number; i++) {
  stars += '*';
  console.log(stars);
}