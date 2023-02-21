function solution(n) {
  var answer = 0;
  Number.isInteger(Math.sqrt(n)) ? answer = 1: answer = 2;
  return answer;
}
//Math.sqrt(x) 함수는 x의 제곱근의 비음수 값을 계산합니다.
//Number.isInteger() 메서드는 주어진 값이 정수인지 판별합니다.