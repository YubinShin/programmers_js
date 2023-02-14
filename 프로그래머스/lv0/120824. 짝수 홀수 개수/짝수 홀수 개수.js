function solution(num_list) {
    var answer = [];
    let 홀수 = [];
    let 짝수 = [];
    num_list.map((i) => {
        if (i % 2 == 0) {
            짝수.push(i)
        } else { 홀수.push(i) }
    })
    answer.push(짝수.length, 홀수.length);
    console.log(answer);
    return answer;
}