import functools

num = int(input("Введите число: "))

def create_triangle(n):

    def generate_row(m, i):
        x = " " * (2 ** i)
        return [f"{x}{d}{x}" for d in m] + [f"{d} {d}" for d in m]
    return functools.reduce(generate_row, [i for i in range(n)], ["*"])
    #применяем generate_row() к каждому элементу [i for i in range(n)] начиная с "*"

for i in create_triangle(num):
    print(i)
