// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/174?category=1035308

function solution(n) {
  return n
    .toString()
    .split('')
    .map(Number)
    .reduce((acc, cur, i) => (acc += cur), 0);
}
