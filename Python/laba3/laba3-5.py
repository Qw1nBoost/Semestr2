def printm(m):
    for i in m: print(i)

def linearly_independent(matrix):
    """Проверяет, является ли столбец матрицы линейно независимым."""
    if len(matrix) != 3 or len(matrix[0]) != 3:
        return "Матрица не является размером 3x3."

    if matrix[0][0] * (matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1]) - matrix[0][1] * (matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0]) + \
            matrix[0][2] * (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0]) == 0:
        return "Столбцы матрицы являются линейно зависимыми"
    else:
        return "Столбцы матрицы не являются линейно зависимыми"

mat = []
# mat = [
#     [10, 20, 30],
#     [40, 50, 60],
#     [70, 80, 80]
# ]
for i in range(3):
    row = []
    for j in range(3):
        val = int(input(f"Введите значение для элемента {i} строки и {j} столбца: "))
        row.append(val)
    mat.append(row)

answer = linearly_independent(mat)

print(answer)
printm(mat)

