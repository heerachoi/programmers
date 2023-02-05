function solution(a, b) {
    const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const leapYearMonths = [31,29,31,30,31,30,31,31,30,31,30,31];
    let passedDays = b+4;
    for (let i = 0; i < a-1; i++) {
        passedDays += leapYearMonths[i];
    }
    return DAYS[passedDays % 7];
}