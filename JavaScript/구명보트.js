// 문제 링크 & 코드 리뷰:

function solution(people, limit) {
  var answer = 0;
  let curr = 0;
  let last = people.length - 1;
  people.sort((a, b) => b - a);
  while (curr < last) {
    let kg = people[curr] + people[last];
    if (kg > limit) {
      curr++;
    } else {
      curr++;
      last--;
    }
    answer++;
  }
  if (curr == last) answer++;
  return answer;
}
