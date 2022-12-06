function solution(n) {
    return n.toString().split("").map((element) => Number(element)).reverse();
}