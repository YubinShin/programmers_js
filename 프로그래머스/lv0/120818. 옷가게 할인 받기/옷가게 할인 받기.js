function solution(price) {
    var answer = 0;
    if (price < 100000) { answer = price }
    if (price >= 100000) {
        answer = price - price * 0.05
    }
    if (price >= 300000) {
        answer = price - price * 0.1
    }
    if (price >= 500000) {
        answer = price - price * 0.2
    }
    return parseInt(answer);
}