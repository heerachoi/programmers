function solution(phone_number) {
    return '*'.repeat(phone_number.length-4)+phone_number.split("").splice(-4).join("");
}