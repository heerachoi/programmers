# 문제 링크 & 코드 리뷰: https://codesign.tistory.com/261

def solution(a, b):
    answer = 0
    for i in range(len(a)):
        answer += a[i] * b[i]
    return answer