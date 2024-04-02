alph = "qwertyuiopasdfghjklzxcvbnm"

s = input("Введите строку по типу g3H2Op3J4Y: ")
new_s = ''


for i in range(len(s)):
    if s[i].lower() in alph:
        new_s += s[i]
    else:
        new_s += s[i - 1] * (int(s[i]) - 1)
print(new_s)