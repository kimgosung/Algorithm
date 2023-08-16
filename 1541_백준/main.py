num = input().split('-')
ans = 0
for i in num[0].split('+'):
    ans += int(i)
for i in num[1:]:
    for j in i.split('+'):
        ans -= int(j)

print(ans)

