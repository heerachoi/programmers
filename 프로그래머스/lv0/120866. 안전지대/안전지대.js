function solution(board) {
    var answer = board.length * board.length;
    let dx = [-1,-1,-1,0,+1,+1,+1,0];
    let dy = [-1,0,+1,+1,+1,0,-1,-1];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] == 1) {
                answer--;
                for (let direction = 0; direction < 8; direction++) {
                    let nx = i + dx[direction];
                    let ny = j + dy[direction];                    
                    if (nx >= 0 && ny >= 0 && nx < board.length && ny < board.length) {
                        if (board[nx][ny] == 0) {
                            answer--;
                            board[nx][ny] = "*";
                        }
                    }
                }
            }
        }
    }
    return answer;
}