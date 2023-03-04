function solution(sides) {
  var answer;
  //경우1) 만약 Math.max(...sides)가 가장 긴변이라면 
  // [3, 6, a] 3 + a > 6 // 4,5,6
  // [11, 7, a] 7 + a > 11 // 
  let 경우1 = []
  for (let a = 1; a <= Math.max(...sides); a++) {
    if (a + Math.min(...sides) > Math.max(...sides)) { 경우1.push(a) }
  }
  console.log(경우1)

  //경우2) 만약 a가 가장 긴 변이라면, sides의 합보다 작고, Math.max(...sides)보다 커야한다.
  // [3, 6, a] a는 6보다 크고 9보다 작아야한다. 7,8
  // [11, 7, a] a는 11보다 크고 18보다 작아야한다. 12,13,14,15,16,17

  let 경우2 = []
  for (let i = Math.max(...sides) + 1; i < Math.max(...sides) + Math.min(...sides); i++) {
    경우2.push(i)
  }
  console.log(경우2);
  let 중복제거 = new Set([...경우1, ...경우2]);
  answer = [...중복제거].length;
  console.log(answer)
  return answer;
}
