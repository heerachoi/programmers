// 문제 링크 & 코드 리뷰: https://codesign.tistory.com/218?category=1035308
function solution(price) {
  let discount = 0;
  if (price >= 500000) {
    discount = price * 0.2;
  } else if (price >= 300000) {
    discount = price * 0.1;
  } else if (price >= 100000) {
    discount = price * 0.05;
  }
  return price - Math.ceil(discount);
}
