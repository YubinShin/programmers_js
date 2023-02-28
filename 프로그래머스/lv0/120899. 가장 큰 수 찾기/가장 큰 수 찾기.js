function solution(array) {
  var answer = [];
  let maxNum = 0;
  array.forEach((item) => { if (item > maxNum) { maxNum = item } })
  answer.push(maxNum, array.indexOf(maxNum));
  return answer;
}

//반복문으로 제일 큰 수 찾기