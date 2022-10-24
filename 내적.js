// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/162?category=1035308

function solution(a, b) {
  answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}
