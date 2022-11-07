def solution(age):
    answer = ''
    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    numbers = str(age)
    for i in range(len(numbers)):
        answer += alphabet[int(numbers[i])]
    return answer