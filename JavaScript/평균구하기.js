// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/175

function solution(arr) {
  var sum = arr.reduce((acc, cur) => (acc += cur));
  return sum / arr.length;
}
