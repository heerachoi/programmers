// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/206?category=1035308

function solution(numlist, n) {
  let numbers = new Map();
  numlist.forEach((item) => numbers.set(item, 0));
  for (let i = 0; i < numlist.length; i++) {
    numbers.set(numlist[i], Math.abs(numlist[i] - n));
  }
  const mapToNumbers = [...numbers];
  mapToNumbers.sort((a, b) => b[0] - a[0]);
  mapToNumbers.sort((a, b) => a[1] - b[1]);
  let answer = mapToNumbers.map((number) => number[0]);
  return answer;
}
