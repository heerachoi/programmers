function solution(n, arr1, arr2) { // 9:20
    var answer = Array(n).fill("");
    for (let i = 0; i < arr1.length; i++) {
        let str1 = "";
        let str2 = "";
        let num1 = arr1[i].toString(2);
        let num2 = arr2[i].toString(2);
        if (num1.length < n) {
            let len1 = num1.split("").length;
            num1 = "0".repeat(n-len1) + num1;
        }
        if (num2.length < n) {
            let len2 = num2.split("").length;
            num2 = "0".repeat(n-len2) + num2;
        }

        for (let j = 0; j < n; j++) {
            if (num1[j] == "1" || num2[j] == "1") {
                answer[i] += "#";
            } else {
                answer[i] += " ";
            }
        }
    }
    return answer;
}