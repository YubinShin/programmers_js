function solution(rsp) {
  var answer = '';
  rsp = rsp.split('');
  for (item of rsp) {
    if (item == '2') { answer += '0' };
    if (item == '0') { answer += '5' };
    if (item == '5') { answer += '2' };
  }
  return answer;
}