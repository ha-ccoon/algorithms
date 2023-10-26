// 풀이 2

const fs = require('fs');
const input = fs.readFileSync('./practice/question.txt');

const number = parseInt(input);
let starTree = '';

for (i = 0; i < number; i++) {
  for (j = 0; j < number; i++) {
    starTree += ' ';
  }
  for (k = 0; k < number; i++) {
    starTree += '*';
  }

  console.log(starTree);
}
