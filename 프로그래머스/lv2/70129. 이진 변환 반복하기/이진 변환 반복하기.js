function solution(s) {
    var answer = [0,0];
    
    while(s.length > 1) {
        answer[0]++;
        let remove = (s.split("").map((x) => Number(x)).filter((x) => x !== 0));
        let cntZero = s.length - remove.length;
        answer[1] += cntZero;
        s = (remove.length).toString(2);        
    }
    return answer;
}