function solution(n, numlist) {
  var answer = [];
  answer = numlist.filter(item => {
    return item % n === 0
  })
  return answer;
}