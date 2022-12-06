function solution(keyinput, board) {
    var answer = [0,0];
    let keys = {
        left: [-1,0],
        right: [1,0],
        up: [0,1],
        down: [0,-1],
    }
    for (let i = 0; i < keyinput.length; i++) {
        if((answer[0]+keys[keyinput[i]][0] <= Math.floor(board[0]/2)) && 
            (answer[0]+keys[keyinput[i]][0] >= (-1 *Math.floor(board[0]/2))) &&
            (answer[1]+keys[keyinput[i]][1] <= Math.floor(board[1]/2)) &&
            (answer[1]+keys[keyinput[i]][1] >= (-1 *Math.floor(board[1]/2)))
           ) {
            answer[0]+=keys[keyinput[i]][0]
            answer[1]+=keys[keyinput[i]][1]
            }
    }
    return answer;
}