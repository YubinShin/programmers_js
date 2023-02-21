function solution(my_string) {
  var answer = my_string.replace(/[aeiou]/g, '');
  console.log(answer);
  return answer;
}
//replace(이거를,이걸로 바꿔줘)
/**
[]	괄호안의 문자들 중 하나. or 처리 묶음 보면 된다.
/[abc]/ : "a" 또는 "b" 또는 "c" 를 포함하는
[다-바] : 다 or 라 or 마 or 바
*/
// 정규표현식 https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%A0%95%EA%B7%9C%EC%8B%9D-RegExp-%EB%88%84%EA%B5%AC%EB%82%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC