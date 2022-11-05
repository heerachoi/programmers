// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/178

function solution(s) {
  var answer = '';
  var words = s.toLowerCase().split(''); // s를 모두 소문자로 변환시켜준다.
  words[0] = words[0].toUpperCase(); //문장의 첫글자를 대문자로 변경시켜준다.
  for (let i = 0; i < words.length; i++) {
    // words의 배열에서
    var temp = i + 1;
    // 현재 배열이 " "일때 그리고 다음 배열이 존재한다면
    if (words[i] == ' ' && temp < words.length) {
      words[temp] = words[temp].toUpperCase(); // 대분자로 변환시켜준다.
    }
  }
  return words.join(''); //배열을 join()해준뒤 string으로 출력한다.
}
