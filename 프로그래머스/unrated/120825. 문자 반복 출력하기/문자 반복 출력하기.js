function solution(my_string, n) {
  const toArr = [...my_string].map((item) => item.repeat(n)).join('');
  return toArr;
}


