const rank = [3, 7, 2, 5, 4, 6, 1];
const attendance = [false, true, true, true, true, false, false];

function solution(rank, attendance) {
  const getRank = rank.forEach((element) => {
    console.log(element);
  });

  const getAttendance = attendance.forEach((element, index) => {
    console.log(index);
  });

  if (getAttendance == true) {
  }
  return getRank;
}

solution(rank, attendance);
