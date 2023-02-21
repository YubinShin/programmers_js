function solution(hp) {
  let 사냥감 = hp;
  let 장군개미 = Math.floor(사냥감 / 5);
  let 병정개미 = Math.floor((사냥감 - 장군개미 * 5) / 3);
  let 일개미 = Math.floor((사냥감 - 장군개미 * 5 - 병정개미 * 3));
  var answer = 장군개미 + 병정개미 + 일개미;
  return answer;
}