n = int(input("Введите число: "))
s = [str(i) for i in range(1, n+1)]
for i in range(n):
    print("".join(s))
    s = s[:len(s)-1]
