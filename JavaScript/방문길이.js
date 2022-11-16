// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/284

function solution(dirs) {
  let count = 0;
  let current = [0, 0];
  const direction = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };
  let visited = [];
  for (let i = 0; i < dirs.length; i++) {
    let [x, y] = direction[dirs[i]];
    let start = current;
    let end = [Number([current[0] + x]), Number(current[1] + y)];
    if (end[0] > 5 || end[0] < -5 || end[1] > 5 || end[1] < -5) {
      continue;
    }
    const isVisited = visited.find((item) => {
      if (
        (item[0][0] === start[0] &&
          item[0][1] === start[1] &&
          item[1][0] === end[0] &&
          item[1][1] === end[1]) ||
        (item[0][0] === end[0] &&
          item[0][1] === end[1] &&
          item[1][0] === start[0] &&
          item[1][1] === start[1])
      ) {
        return true;
      }
    });
    if (!isVisited) {
      ++count;
      visited.push([start, end]);
    }
    current = end;
  }
  return count;
}
