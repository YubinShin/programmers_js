function solution(array) {
    var answer = 0;
    /* sort 함수 활용법 */
    array.sort((a, b) => { return a - b });
    /* 중앙 값은 길이를 반으로 나눈 다음 버림한다 */
    answer = array.at(parseInt(array.length / 2));
    return answer;
}