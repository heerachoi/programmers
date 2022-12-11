function solution(ingredient) {
    var answer = 0;
    let stack = [];
    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        if (stack.length >=4) {
            let find = stack.slice(-4).join("");
            if (find == '1231') {
                answer++;
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
            }
        }
    }
    return answer;
}