# 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/86051?language=python3

def solution(numbers):
    answer = 0
    for i in range(len(numbers)):
        answer += numbers[i]
    return 45- answer