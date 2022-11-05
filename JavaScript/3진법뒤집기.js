// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/167

function solution(n) {
  var answer = 0;
  var numbers = [];
  while (n != 0) {
    numbers.push(n % 3);
    n = Math.floor(n / 3);
  }
  numbers.reverse(); // [ 1, 2, 0, 0 ]
  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i] * 3 ** i;
  }
  return answer;
}
