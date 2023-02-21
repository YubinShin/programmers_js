function solution(my_string) {
  var answer = '';
  let result = [];
  for (let item of my_string) {
    if (item === item.toLowerCase()) {
      result.push(item.toUpperCase())
    };
    if (item === item.toUpperCase()) {
      result.push(item.toLowerCase())
    };
  };
  answer = result.join('')
  return answer
}
// 왜 정규식으로는 안됐을까?