// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/176?category=1035308

function solution(n) {
  return parseInt(
    n
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}
