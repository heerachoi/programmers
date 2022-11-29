// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/282

function solution(d, budget) {
  var answer = 0;
  let tmp = 0;
  d.sort((a, b) => a - b);
  while (tmp <= budget) {
    tmp += d[answer++];
  }
  return answer - 1;
}
