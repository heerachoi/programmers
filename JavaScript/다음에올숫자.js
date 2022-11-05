// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/207

function solution(common) {
  let n1 = common[0],
    n2 = common[1],
    n3 = common[2];
  return n2 - n1 === n3 - n2               
    ? common[common.length - 1] + n2 - n1
    : common[common.length - 1] * (n2 / n1);
}
