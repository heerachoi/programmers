function solution(N, stages) {
    var answer = [];
    var ppl = Array(N+1).fill(0);
    var failure =  [];
    var left = stages.length;
    for (let i = 0; i < stages.length; i++) {
        ppl[stages[i]]++;
    }
    for (let i = 1; i <= N+1; i++) {
        failure.push([i, (ppl[i]/left)]);
        left-=ppl[i];
    }
    failure.pop();
    answer = failure.sort((a,b) => b[1] - a[1]);
    return answer.map( a => a[0]);   
}