// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/164?category=1035308

function solution(sizes) {
  // row가 항상 더 크게 설정
  var row = Math.max(sizes[0][0], sizes[0][1]);
  var col = Math.min(sizes[0][0], sizes[0][1]);

  for (let i = 1; i < sizes.length; i++) {
    var max = Math.max(sizes[i][0], sizes[i][1]);
    var min = Math.min(sizes[i][0], sizes[i][1]);
    if (row < max) {
      //현재 row값 보다 큰 경우 변경해준다
      row = max;
    }
    if (col < min) {
      //현재 col값 보다 큰 경우 변경해준다
      col = min;
    }
  }
  return row * col;
}
