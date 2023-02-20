function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    /*분자의 합*/
    let 분자 = numer1 * denom2 + numer2 * denom1;
    /*분모의 합*/
    let 분모 = denom1 * denom2;
    /*최대공약수 구하기*/
    let 최대공약수;
    for (let i = 1; i <= 분자; i++) {
        if (분자 % i == 0 && 분모 % i == 0) {
            최대공약수 = i
        }
    }
    /*답*/
    answer.push(분자 / 최대공약수, 분모 / 최대공약수)
    return answer;
}