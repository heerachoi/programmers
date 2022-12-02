function solution(n,a,b)
{
    var answer = 0;
    let cnt = 0;
    while (n > 0) {
        cnt++;
        if ((a%2 != 0 && a+1 == b) || (b%2 != 0 && b+1 == a)) {
            break;
        }
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        n /= 2;
    }   
    return cnt;
}