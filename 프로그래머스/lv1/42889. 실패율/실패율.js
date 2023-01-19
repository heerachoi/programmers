function solution(N, stages) {
    let people = Array(N+1).fill(0);
    let left = stages.length;
    let result = [];
    for (let i = 0; i < left; i++) {
        people[stages[i]]++;
    }
    for (let i = 1; i <= N; i++) {
        result.push([i, people[i]/left]);
        left-=people[i];
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0])
}