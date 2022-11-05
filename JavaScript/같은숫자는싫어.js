// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/166?category=1035308

function solution(arr) {
  var answer = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] != arr[i]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}
