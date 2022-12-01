function solution(n)
{
    return [...(n+"")].reduce((acc,val,index) => acc + Number(val), 0);
}