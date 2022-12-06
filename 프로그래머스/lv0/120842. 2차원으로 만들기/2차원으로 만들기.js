function solution(num_list, n) {
    var answer = [];
    let tmp = [];
    let cnt = 0;
    for (let i = 0; i < num_list.length; i++){
        cnt++;
        tmp.push(num_list[i])
        if (cnt == n) {
            answer.push(tmp);
            cnt = 0;
            tmp = [];
        }
    }
    return answer;
}