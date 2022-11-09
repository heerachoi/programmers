// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/133499?language=javascript#

function solution(babbling) {
  var answer = 0;
  var words = ['aya', 'ye', 'woo', 'ma'];
  for (let i = 0; i < babbling.length; i++) {
    let keepCheck = '';
    while (babbling[i] != '') {
      let find = false;
      for (let j = 0; j < 4; j++) {
        let existIndex = babbling[i].search(words[j]); // 매칭되는 단어의 index return
        if (existIndex == 0 && words[j] != keepCheck) {
          //매칭되는 단어가 첫글자이고 전단어와 같지 않을때
          let removeMatch = babbling[i].replace(words[j], ''); // 말한단어는 없애준다
          babbling[i] = removeMatch;
          keepCheck = words[j]; //현재단어를 저장한다. 단어의 남은 부분이 같은 단어를 연속으로 말하는지 체크하기 위함
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
