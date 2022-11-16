function solution(a, b) {
  var min = Math.min(a, b);
  var max = Math.max(a, b);
  var answer = 0;
  for (let i = min; i <= max; i++) {
    answer += i;
  }
  return answer;
}
