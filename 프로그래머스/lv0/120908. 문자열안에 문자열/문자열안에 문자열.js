function solution(str1, str2) {
  var answer = 0;
  str1.includes(str2) ? answer = 1 : answer = 2;
  console.log(str1.includes(str2));
  return answer
}
//문자열.includes() 포함되어있는지 알기
//정규식은 /이문자가/.test(여기포함되어있니)