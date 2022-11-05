// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/208

function solution(s) {
  var answer = [];
  for (let i = 0; i < s.length; i++) {
    if (answer[answer.length - 1] === s.charAt(i)) {
      answer.pop();
    } else {
      answer.push(s.charAt(i));
    }
  }
  return answer.length == 0 ? 1 : 0;
}
