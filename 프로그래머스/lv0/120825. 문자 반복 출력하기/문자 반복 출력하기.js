function solution(my_string, n) {
    var answer = '';
    let string = my_string.split('');
    for (i = 0; i < string.length; i++) {
        string[i] = string[i].repeat(n)
    }
    answer = string.join('');
    return answer;

}