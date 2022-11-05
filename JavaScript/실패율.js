// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/170

function solution(N, stages) {
  var answer = [];
  var ppl = Array(N + 1).fill(0);
  var failure = [];
  var left = stages.length;
  for (let i = 0; i < stages.length; i++) {
    ppl[stages[i]]++;
  }
  for (let i = 1; i < N + 1; i++) {
    failure.push([i, ppl[i] / left]);
    // 실패한 사람 제외
    left -= ppl[i];
  }
  answer = failure.sort((a, b) => b[1] - a[1]);
  return answer.map((a) => a[0]);
}
