function solution(number) {
    var answer = 0;
    let add = 0;
    for(let i = 0; i < number.length; i++) {
        for (let j = i+1; j < number.length; j++) {  
            for (let k = j + 1; k < number.length; k++) {
                add = number[i] + number[j] + number[k];
                if (add === 0) {
                    answer++;
                }
            }
        }
    }
    return answer;
}