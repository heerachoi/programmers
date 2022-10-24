// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/160?category=1035308

function solution(numbers) {
  var answer = 0;
  var list = numbers.sort((a, b) => a - b);
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < numbers.length; i++) {
    if (list[0] == numbers[i]) {
      list.shift();
    } else {
      answer += numbers[i];
    }
  }
  return answer;
}
