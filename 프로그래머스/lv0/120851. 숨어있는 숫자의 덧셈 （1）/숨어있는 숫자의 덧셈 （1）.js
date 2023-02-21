function solution(my_string) {
  var answer = 0;
  let 배열 = my_string.split('')
  배열 = 배열.sort().filter((글자) => 글자 < 10);
  answer = 배열.reduce((이전값, 지금값) => {
    return parseInt(이전값) + parseInt(지금값);
  });
  return answer;
}

//일단 NaN은 "not a number"의 약자가 맞고 "숫자가 아님"을 나타내는 연산의 반환 값입니다.
//그 뜻은 실제 숫자로 정의되지는 않았지만 Number의 객체의 한 속성이기도 합니다.
//reduce 함수는 안에 콜백함수를 받습니다.
// 글자와 숫자를 구분하려면 비교연산자를 사용해보자