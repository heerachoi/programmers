function solution(a, b, n) {
    var answer = 0;
    // a: 콜라위해 마트에 주어야 할 개수
    // b: a만큼 주면 b만큼 콜라를 준다
    // c: 빈병의 개수 n
    // n/a = cola받은수
    // cola * b
    let cola = 0;
    while (n >= a) {
        let extra = 0;
        if (n%a != 0) {
            extra =  n - (a * Math.floor(n/a));
            console.log(extra)
        }
        cola = Math.floor(n/a); // 받은 콜라 수
        answer += cola*b; 
        n = cola * b + extra 
    }
    
    return answer;
}

