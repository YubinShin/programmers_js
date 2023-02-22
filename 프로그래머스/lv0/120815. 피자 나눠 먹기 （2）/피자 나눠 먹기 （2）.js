function solution(n) {
  let 피자한판 = 6;
  //while은 반복 횟수가 정해져있지 않을때 사용
  while (피자한판 % n !== 0) {
    피자한판 += 6
  };
  console.log(피자한판 / 6);
  return 피자한판 / 6
}