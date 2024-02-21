n = int(input("Введите число: "))
s = [str(i) for i in range(1, n+1)][::-1] + [str(i) for i in range(2, n+1)]
k = 1
for i in range(n):
    print(" " * k, "".join(map(str, s)))
    s = s[1:len(s)-1]
    k += 1