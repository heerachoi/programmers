function solution(s) {
    var regex = s.replace(/[^0-9]/g, "").toString();
    return (regex.length === s.length && (s.length == 4 || s.length == 6)) ? true : false;
}