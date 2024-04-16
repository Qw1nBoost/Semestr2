nums = list(map(int, input('Введите числа через пробел: ').split(' ')))
set_ = {i for i in nums}
print('Кол-во уникальных чисел: ', len(set_))