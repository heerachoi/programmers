// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/120956?language=javascript
// 코드 리뷰: https://codesign.tistory.com/202?category=1035308
function solution(babbling) {
  var answer = 0;
  var words = ['aya', 'ye', 'woo', 'ma'];
  for (let i = 0; i < babbling.length; i++) {
    let keepCheck = '';
    while (babbling[i] != '') {
      let find = false;
      for (let j = 0; j < 4; j++) {
        let existIndex = babbling[i].search(words[j]);
        if (existIndex == 0 && words[j] != keepCheck) {
          let removeMatch = babbling[i].replace(words[j], '');
          babbling[i] = removeMatch;
          keepCheck = words[j];
          find = true;
        }
      }
      if (babbling[i] == '') {
        answer += 1;
        break;
      }
      if (find == false) {
        break;
      }
    }
  }
  return answer;
}
