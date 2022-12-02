function solution(n)
{
    return [...(n+"")].reduce((acc, val,index) => acc + parseInt(val), 0);
}