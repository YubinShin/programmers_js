function solution(my_string, letter) {
    var answer = '';
    let arr = my_string.split('');
    answer = arr.filter(item => item != letter).join('');
    return answer;
}