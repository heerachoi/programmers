// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/195

function solution(x, n) {
  var answer = [x];
  var original = x;
  for (let i = 1; i < n; i++) {
    answer.push((x += original));
  }
  return answer;
}
