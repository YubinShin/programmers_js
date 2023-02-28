function solution(my_string) {
  var answer = [];
  answer = [...my_string].filter((item, index) => {
    return my_string.indexOf(item) === index
  }).join('')
  return answer;
}
// 배열.filter(()=>{})
// 반복해서 조건에 맞는 것들만 리턴해준다.
// index는 첫번째 등장하는 알파벳에 부여된다.