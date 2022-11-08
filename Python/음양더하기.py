# 문제 링크 & 코드 리뷰: https://codesign.tistory.com/259

def solution(absolutes, signs):
    answer = 0
    for i in range(len(absolutes)):
        if signs[i] == False:
            answer += absolutes[i] * -1
        else:
            answer += absolutes[i] 
    return answer