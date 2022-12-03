function solution(n) {
    var answer = 1;
    let remain = 0;
    while (remain != 1) {
        answer++;
        remain = n%answer;
    }
    return answer;
}