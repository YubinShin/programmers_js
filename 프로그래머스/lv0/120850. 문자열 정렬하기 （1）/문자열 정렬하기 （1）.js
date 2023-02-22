function solution(my_string) {
  let 배열 = my_string.split('').sort();
  배열 = 배열.filter((item) => {
    return item >= 0;
  })
  배열 = 배열.map((item) => { return +item });
  return 배열;
}

//filter() 와 map() 은 return 이 필요하다.
// 변수에 +를 붙이면 숫자 자료형이 된다.