function solution(myString) {
  const str = myString.split('x');

  const answer = [];
  for (let i = 0; i < str.length; i++) {
    const count = str[i].length;
    answer.push(count);
  }
  return answer;
}