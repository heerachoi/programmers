// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/163?category=1035308

function solution(s) {
  var answer = s.split('').sort().reverse().join('');
  return answer;
}
