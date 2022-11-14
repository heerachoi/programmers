// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/190

function solution(arr1, arr2) {
  var answer = [];
  var tmpAnswer = [];
  var sum = 0;
  for (let k = 0; k < arr1.length; k++) {
    for (let i = 0; i < arr2[0].length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        sum += arr1[k][j] * arr2[j][i];
      }
      tmpAnswer.push(sum);
      sum = 0;
    }
    answer.push(tmpAnswer);
    tmpAnswer = [];
  }
  return answer;
}
