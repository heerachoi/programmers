# 문제 링크 & 코드 리뷰: https://codesign.tistory.com/263

def solution(sizes):
    max_x, max_y = 0, 0
    for x, y in sizes:
        x, y = max(x,y), min(x,y)
        max_x, max_y = max(max_x, x), max(max_y, y)
    return max_x * max_y