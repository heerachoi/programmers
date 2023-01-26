function solution(citations) {
    var answer = 0;
    citations.sort((a,b) => b - a);
    console.log(citations)
    citations.map((x,i)=> {if (x >= i + 1) answer=i+1});
    return answer;
}