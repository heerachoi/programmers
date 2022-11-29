// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/200

function solution(board, moves) {
  var answer = 0;
  let numArr = [];
  for (let m = 0; m <= moves.length; m++) {
    for (let i = 0; i < board.length; i++) {
      var currentNum = board[i][moves[m] - 1];
      if (currentNum != 0) {
        if (numArr.length >= 1) {
          if (numArr[numArr.length - 1] == currentNum) {
            numArr.pop();
            board[i][moves[m] - 1] = 0;
            answer += 2;
          } else {
            numArr.push(currentNum);
            board[i][moves[m] - 1] = 0;
          }
        } else {
          numArr.push(currentNum);
          board[i][moves[m] - 1] = 0;
        }
        break;
      }
    }
  }
  return answer;
}
