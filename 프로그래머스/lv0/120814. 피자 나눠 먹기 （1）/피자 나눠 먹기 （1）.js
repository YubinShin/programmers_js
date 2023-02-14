function solution(n) {
    var answer = 0;
    answer = n % 7 == 0 ? n / 7 : Math.floor(n / 7) + 1;
    console.log(answer)
    return answer;
}