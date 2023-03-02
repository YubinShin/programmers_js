function solution(array) {
  var answer = [];

  answer = array.join('').split('').filter((item) => { return parseInt(item) === 7 });

  return answer.length;
}