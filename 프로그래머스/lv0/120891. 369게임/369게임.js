function solution(order) {
  var answer = 0;
  order = order.toString();
  for (let i = 0; i < order.length; i++) {
    if (order[i] === '3') {
      console.log(order[i], answer += 1)
    }
    if (order[i] === '6') {
      console.log(order[i], answer += 1)
    }
    if (order[i] === '9') {
      console.log(order[i], answer += 1)
    }
  }
  console.log(answer);
  return answer;
}