// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/188

function solution(n) {
  let ones = n
    .toString(2)
    .split('')
    .filter((x) => x == 1).length;
  let check = 0;
  while (ones != check) {
    n++;
    check = n
      .toString(2)
      .split('')
      .filter((x) => x == 1).length;
    if (ones == check) {
      return n;
    }
  }
}
