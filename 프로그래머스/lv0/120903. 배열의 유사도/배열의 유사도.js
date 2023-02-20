function solution(s1, s2) {
    var answer = 0;
    answer = s1.filter((item) => s2.includes(item)).length;
    return answer;
}
