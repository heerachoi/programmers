function solution(n, words) {
    var used = [words[0]];
    var curTurn = 1;
    for (let i = 1; i < words.length; i++) {
        // 현재 n번호
        if (curTurn == n) {
            curTurn = 1;
        } else {
            curTurn++;
        }
        used.push(words[i]);
     
        // 이미 쓴 단어인지 확인
        var checkMatch = used.filter((val, x) => val == words[i]);
        if (checkMatch.length >= 2) {
            return [ curTurn, Math.ceil((i+1)/n)];
        }
        // 시작알파벳이 전단어의 알파벳과 같은지 체크
        if (words[i-1].split("").slice(-1) != words[i].split("")[0]) {
            return [ curTurn, Math.ceil((i+1)/n)];
        }
    }
    return [0, 0];
}