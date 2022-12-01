function solution(numbers) {
    return 45 - numbers.reduce((acc, val, index) => acc+val);
}