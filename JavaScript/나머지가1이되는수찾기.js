// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/196

function solution(n) {
  var remain = 0;
  var answer = 0;
  while (remain != 1) {
    answer++;
    remain = n % answer;
  }
  return answer;
}
