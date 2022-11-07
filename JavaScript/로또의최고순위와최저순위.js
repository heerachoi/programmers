// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/172

function solution(lottos, win_nums) {
  var answer = [];
  var points = [6, 5, 4, 3, 2, 1];
  let match = 0;
  let zero = 0;
  for (let i = 0; i < win_nums.length; i++) {
    zero = lottos.filter((x) => x === 0).length;
    for (let j = 0; j < 6; j++) {
      if (win_nums[i] != 0 && win_nums[i] == lottos[j]) {
        match++;
      }
    }
  }
  var max = match + zero;
  if (match < 1) {
    match = 1;
  }
  if (max < 1) {
    max = 1;
  }
  for (let i = 0; i < points.length; i++) {
    if (points[i] == match) {
      answer.push(i + 1);
    }
    if (points[i] == max) {
      answer.push(i + 1);
    }
  }
  console.log(match);
  return answer;
}
