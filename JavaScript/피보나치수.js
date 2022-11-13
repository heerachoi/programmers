// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/187

function solution(n) {
  let numbers = [0, 1];
  if (n == 0) return 0;
  if (n == 1) return 1;
  for (let i = 2; i <= n; i++) {
    numbers.push((numbers[i - 1] + numbers[i - 2]) % 1234567);
  }
  return numbers[n];
}
