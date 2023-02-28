function solution(i, j, k) {
  let answer = new Array(j + 1 - i).fill(0).map((num, index) => {
    return num = i + index
  }).join('');
  //i부터 j까지 채운 array를 만든 후, 문자열로 만든다.

  answer = answer.split('').filter((str) => { return str === k + '' });
  //문자열을 1글자씩 잘라서 배열로 만든 후, k와 동일한 값을 찾는다.

  return answer.length
}

//fill().map()
// 숫자 + '' => 문자자료형
