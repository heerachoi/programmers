function solution(n) {
    return Number([...(n+"")].sort((a,b) => b-a).map((x) => Number(x)).join(""));
}