// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/192

function solution(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .map((x) => Number(x));
}
