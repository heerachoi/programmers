function solution(price, money, count) {
    var total = 0;
    while (count > 0) {
        total += count * price;
        count--;
    }
    return (total - money >= 0) ? total-money : 0;
}