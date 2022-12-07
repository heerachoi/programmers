function solution(quiz) {
    var answer = [];
    for (let i = 0; i < quiz.length; i++) {
        let formula = quiz[i].split(" ");
        if (formula[1] == '-') {
            if (Number(formula[0]) - Number(formula[2]) == Number(formula[4])) {
                answer.push('O');
            } else {
                answer.push('X');
            }
        } else {
            if (Number(formula[0]) + Number(formula[2]) == Number(formula[4])) {
                answer.push('O');
            } else {
                answer.push('X');
            }
        }
    }
    return answer;
}