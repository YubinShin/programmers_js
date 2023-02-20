function solution(n) {
    var answer = [];
    for (let i = n; i > 0; i--) {
        i % 2 == 1 ? answer.push(i) : null
    }
    answer.sort((a, b) => a - b)
    return answer;
}