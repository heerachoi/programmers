function solution(s) {
    var answer = [-1];
    let splitS = s.split("");
    let currLetters = [];
    for(let i = 0; i < s.length; i++) {
        currLetters.push(splitS[i]);
        let matchFound = -1;
        if (currLetters.length > 1) {
            for (let j = currLetters.length-2; j > -1; j--) {
                if (currLetters[j] === currLetters[currLetters.length-1]) {
                    matchFound = i-j;
                    break;
                }
            }
            answer.push(matchFound);
        }
    }
    return answer;
}