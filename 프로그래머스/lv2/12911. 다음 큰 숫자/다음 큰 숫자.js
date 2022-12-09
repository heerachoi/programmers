function solution(n) {
    var curr = n.toString(2).split("").filter((x) => x == 1).length;
    let cnt = 0;
    while(curr !== cnt ){
        n+=1;
        cnt = n.toString(2).split("").filter((x) => x == 1).length;
    }
    return n;
}