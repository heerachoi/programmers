// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/180

function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((acc, cur, i) => acc + cur * B[i], 0);
}
