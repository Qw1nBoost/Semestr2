import math

n = int(input("Введите число n: "))

def formula(n, k):
    return int(math.factorial(n)/(math.factorial(k)*(math.factorial(n - k))))
triangle = []
for i in range(n):
    row = []
    for el in range(i + 1):
        row.append(formula(i, el))
    triangle.append(row)
for i in range(n):
    print(" " * n, *triangle[i], sep=" ")
    n -= 1