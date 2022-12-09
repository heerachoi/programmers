function solution(n, arr1, arr2) {
    var answer = Array(n).fill("");

    for (let i = 0; i < arr1.length; i++) {
        var radix1 = arr1[i].toString(2);
        var radix2 = arr2[i].toString(2);

        var final1 = radix1.split("");
        var final2 = radix2.split("");

        while (final1.length < n) {
            final1.unshift("0");
        }
        while (final2.length < n) {
            final2.unshift("0");
        }

        for (let j = 0; j <= n; j++) {
            if (final1[j] == '1' || final2[j] == '1') {
                answer[i] += "#";
            } else if (final1[j] == '0' || final2[j] == '0') {
                answer[i] += " ";
            }
        }
    }
    return answer;
}