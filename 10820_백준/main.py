import sys

while True:
    s = sys.stdin.readline().rstrip("\n")

    if not s:
        break

    cnt_space = 0
    cnt_upper = 0
    cnt_lower = 0
    cnt_number = 0

    for i in s:
        if i.isspace():
            cnt_space += 1
        elif i.islower():
            cnt_lower += 1
        elif i.isupper():
            cnt_upper += 1
        elif i.isdigit():
            cnt_number += 1
    print(cnt_lower, cnt_upper, cnt_number, cnt_space)
