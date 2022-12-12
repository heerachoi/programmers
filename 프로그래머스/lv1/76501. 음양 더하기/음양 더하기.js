function solution(absolutes, signs) {
    var answer = absolutes.reduce((acc,curr,index) => acc + (curr * (signs[index] ? 1 : -1)), 0);
    return answer;
}