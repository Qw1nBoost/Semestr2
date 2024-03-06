s = input("Введите строку по типу YYYhhJJkkkkkkAB: ")
new_s = ''

for i in range(len(s)):
    if s[i] in new_s:
        continue
    if s.count(s[i]) == 1: new_s += s[i]
    else: new_s += s[i] + str(s.count(s[i]))
print(new_s)
