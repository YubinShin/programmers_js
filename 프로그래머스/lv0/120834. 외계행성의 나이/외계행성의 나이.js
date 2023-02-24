function solution(age) {
  var answer = '';
  let str = 'abcdefghij'
  age = `${age}`.split('')
  answer = age.map((item) => { return str[+item] }).join('')
  return answer;
}