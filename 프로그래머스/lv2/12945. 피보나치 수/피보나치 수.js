function solution(n) {
  var a = 0, b = 1, f = 1;
  for (var i = 2; i <= n; i++) {
    f = (a + b)%1234567;
    a = b;
    b = f;
  }
  return f;
}

console.log(solution(3))