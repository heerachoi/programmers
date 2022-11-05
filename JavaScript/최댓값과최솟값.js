// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/177

function solution(s) {
  var answer = s
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  return answer[0] + ' ' + answer[answer.length - 1];
}
