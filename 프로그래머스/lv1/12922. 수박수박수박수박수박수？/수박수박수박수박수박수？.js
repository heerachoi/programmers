function solution(n) {
    var answer = [];
    for (let i = 0; i <n ; i++) {
     answer.push((i % 2) !== 0 ? "박" : "수");
    }
    return answer.join("");
}