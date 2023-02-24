function solution(emergency) {
  var answer = [];
  var array = new Array();
  var copy = [...emergency]
  array = copy.sort((a, b) => { return b - a })
  answer = emergency.map((item) => {
    return array.indexOf(item) + 1
  })

  return answer;
}
