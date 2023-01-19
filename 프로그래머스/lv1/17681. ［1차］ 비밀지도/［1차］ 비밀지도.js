function solution(n, arr1, arr2) {
    return answer = arr1.map((a,i) => (a|arr2[i]).toString(2).padStart(n,0).replace(/1|0/g, v => +v ? '#' : ' '));
}

