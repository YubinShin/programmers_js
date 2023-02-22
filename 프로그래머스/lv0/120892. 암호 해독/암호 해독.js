function solution(cipher, code) {
  let answer = [...cipher].filter((item, index) => {
    return (index + 1) % code == 0
  }).join('');
  return answer;
}
//배수를 이용하는 문제라면 %code == 0 을 활용하자
//join()에 아무것도 넣지않으면 ,를 넣어준다.
//문자열을 배열로 만들고 싶을때도 [...string] 쓰면 좋다
//n번째 글자는 0부터 시작하기때문에 index + 1