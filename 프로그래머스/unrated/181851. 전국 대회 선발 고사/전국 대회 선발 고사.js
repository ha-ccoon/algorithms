function solution(rank, attendance) {
  const getRank = rank.filter((element, i) => attendance[i]);
  getRank.sort((a, b) => a - b);

  const rankIdx = getRank.map((element, i) =>
    rank.findIndex((r) => r === element)
  );
  const calculation = rankIdx[0] * 10000 + rankIdx[1] * 100 + rankIdx[2];
  return calculation;
}