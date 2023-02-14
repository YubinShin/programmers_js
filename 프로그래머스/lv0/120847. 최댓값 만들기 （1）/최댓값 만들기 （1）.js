function solution(numbers) {
    var answer = 0;
    numbers.sort(function (a, b) {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    });
    console.log(numbers);
    answer = numbers.at(-1) * numbers.at(-2);
    return answer;
}