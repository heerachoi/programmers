function solution(A,B){
    let sortB = B.sort((a,b) => b-a);
    return A.sort((a,b) => a-b).reduce((acc, curr, index) => acc + (curr * sortB[index]),0);
}