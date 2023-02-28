function solution(num, k) {
  var answer = -1;
  num = num.toString();
  console.log(num);
  for (let i = 0; i < num.length; i++) {
    if (num[i] === k.toString()) {
      answer = i + 1;
      break;
    }
  }
  console.log(answer);
  return answer;
}