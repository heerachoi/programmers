function solution(s, n) {
    // 소문자 97, 122
    // 대분자 65, 90
    var answer = '';
    for (let i = 0 ; i < s.length; i++) {
        let current = s[i].charCodeAt(0);
        let add = n;
        if (current == 32) {
            answer += " ";
        }
        else if (current <= 90 ) { //대문자 (65~90)
            if (current + n > 90) {
                add = current + n - 90;
                current = 64;
            } 
            answer +=  String.fromCharCode(current + add);         

        } else if (current <= 122) { // 소문자 (97~122)
            if (current + n > 122) {
                add = current + n - 122;
                current = 96;
            }
            answer +=  String.fromCharCode(current + add);
        }
    }
    // ascii value로 전환
    // 현재 단어의 위치에서 이동
        // 확인: 122 | 90 보다 클경우 97 | 65로 더큰만큼 이동
    // 글씨로 변환
    return answer;
}