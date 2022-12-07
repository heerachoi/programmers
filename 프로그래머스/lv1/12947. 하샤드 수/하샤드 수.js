function solution(x) {
    var sum = (""+x).split("").reduce((acc, curr) => acc + Number(curr), 0);
    return (x % sum == 0) ? true : false;
}