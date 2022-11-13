// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/182

function solution(numbers) {
  let toString = numbers.map((num) => num + '');
  const answer = toString.sort((a, b) => b + a - (a + b)).join('');
  return answer[0] === '0' ? '0' : answer;
}
