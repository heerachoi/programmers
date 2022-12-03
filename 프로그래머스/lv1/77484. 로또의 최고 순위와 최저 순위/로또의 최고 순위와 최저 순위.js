function solution(lottos, win_nums) {
    let point = {
        6:1,
        5:2,
        4:3,
        3:4,
        2:5,
        1:6,
        0:6
    }
    let tmp = lottos;
    let cnt = 0;
    for (let i = 0; i < win_nums.length; i++) {
        for (let j = 0; j < lottos.length; j++) {
            if (win_nums[i] == lottos[j])  {
                cnt++;
                tmp = tmp.slice(0,j);
                lottos = tmp.concat(lottos.slice(j+1,lottos.length));
                tmp = lottos;
            }
        }
    }
    let zeros = lottos.filter((x) => x == 0);
    return [point[cnt + zeros.length] , point[cnt]];
}