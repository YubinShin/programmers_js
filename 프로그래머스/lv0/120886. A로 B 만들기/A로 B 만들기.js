function solution(before, after) {
  let answer = 0
  before = before.split('').sort();
  console.log(before);
  after = after.split('').sort();
  console.log(after);
  if (before.join() === after.join()) {
    answer = 1
  } else { answer = 0 }
  return answer;
}