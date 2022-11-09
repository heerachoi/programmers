# 문제 링크 & 코드 리뷰: https://codesign.tistory.com/262

def solution(s):
    s = list(s)
    s.sort()
    s.reverse()
    return "".join(s)