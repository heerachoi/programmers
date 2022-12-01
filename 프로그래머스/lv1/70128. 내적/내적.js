function solution(a, b) {
    var answer = a.reduce((acc, val, index) => acc + (val * b[index]),0);
    return answer;
}