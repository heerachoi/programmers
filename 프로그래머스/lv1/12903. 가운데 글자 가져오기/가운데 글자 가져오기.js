function solution(s) {
    let divide = Math.floor(s.length/2);
    return (s.length % 2 == 0) ? s.split("").splice(divide-1,2).join("").toString(): s.split("").splice(divide,1).toString();
}