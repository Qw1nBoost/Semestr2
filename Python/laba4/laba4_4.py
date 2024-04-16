# stroka = 'one two one two three one one one four'

stroka = input('Введите строку текста по типу "one two one two three": ')
st_list = stroka.split(' ')
new_list = []

for i in range(len(st_list)):
    new_list.append(st_list[:i+1].count(st_list[i]) - 1)
print(' '.join(map(str, new_list)))