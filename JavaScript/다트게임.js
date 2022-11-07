// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/171

function solution(dartResult) {
  var answer = 0;
  var points = [];
  dartResult = dartResult.split('');

  while (dartResult.length > 0) {
    var result = dartResult.shift();
    // isNaN 설정뒤에
    var future = isNaN(dartResult[0]);
    if (result == 1 && future == false) {
      result = 10;
      dartResult.shift();
    }
    if (result == '*') {
      if (points.length >= 2) {
        points[points.length - 1] *= 2;
        points[points.length - 2] *= 2;
      } else {
        points[0] *= 2;
      }
    } else if (result == '#') {
      points[points.length - 1] *= -1;
    } else {
      var letter = dartResult.shift();
      if (letter == 'S') {
        result = result ** 1;
      } else if (letter == 'D') {
        result = result ** 2;
      } else if (letter == 'T') {
        result = result ** 3;
      }
      points.push(result);
    }
  }
  return points.reduce((acc, cur) => acc + cur);
}
