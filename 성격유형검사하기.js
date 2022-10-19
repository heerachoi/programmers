// 문제링크 : https://school.programmers.co.kr/learn/courses/30/lessons/118666
// 블로그 정리: https://codesign.tistory.com/m/205

function solution(survey, choices) {
  let pointsList = [0, 3, 2, 1, 0, 1, 2, 3];
  let types = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  for (let i = 0; i < survey.length; i++) {
    let [leftType, rightType] = survey[i].split('');
    if (choices[i] <= 4) {
      types[leftType] += pointsList[choices[i]];
    } else if (choices[i] > 4) {
      types[rightType] += pointsList[choices[i]];
    }
  }
  const pointsOfMbti = (a_type, b_type) =>
    types[a_type] >= types[b_type] ? a_type : b_type;
  return (
    pointsOfMbti('R', 'T') +
    pointsOfMbti('C', 'F') +
    pointsOfMbti('J', 'M') +
    pointsOfMbti('A', 'N')
  );
}
