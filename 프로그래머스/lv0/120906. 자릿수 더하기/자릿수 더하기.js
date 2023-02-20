function solution(n) {
  var answer = 0;
  const 문자열 = n.toString();
  const stringArray = 문자열.split("");
  const numberArray = new Array();
  for (item of stringArray) {
    numberArray.push(parseInt(item));
  }
  answer = numberArray.reduce((이전값, 지금값) => {
    return 이전값 + 지금값;
  });
  console.log(answer);
  return answer;
}
/*map 함수를 쓸수 없는 이유.. https://spookyjelly.tistory.com/52*/
