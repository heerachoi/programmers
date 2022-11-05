// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/161?category=1035308

function solution(absolutes, signs) {
  var answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] == false) {
      answer += absolutes[i] * -1;
    } else {
      answer += absolutes[i];
    }
  }
  return answer;
}
