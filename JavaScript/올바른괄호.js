// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/181

function solution(s) {
  var bracket = s.split('');
  var start = 0;

  if (bracket[0] == ')') {
    return false;
  }
  for (let i = 0; i < bracket.length; i++) {
    if (bracket[i] == '(') {
      start++;
    } else if (start >= 1 && bracket[i] == ')') {
      start--;
    }
  }
  return start == 0 ? true : false;
}
