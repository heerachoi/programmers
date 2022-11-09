// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/264

function solution(a, b, n) {
  var answer = 0;
  let cola = 0;
  while (n >= a) {
    let extra = 0;
    if (n % a != 0) {
      extra = n - a * Math.floor(n / a);
    }
    cola = Math.floor(n / a);
    answer += cola * b;
    n = cola * b + extra;
  }
  return answer;
}
