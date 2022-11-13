// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/189

https: function solution(brown, yellow) {
  let tmpBrown = 0;
  let x = 0;
  let y = 1;
  while (brown != tmpBrown) {
    if (yellow % y == 0) {
      x = yellow / y;
      tmpBrown = x * 2 + y * 2 + 4;
      if (tmpBrown == brown) {
        break;
      }
    }
    y++;
  }
  return [Math.max(x + 2, y + 2), Math.min(x + 2, y + 2)];
}
