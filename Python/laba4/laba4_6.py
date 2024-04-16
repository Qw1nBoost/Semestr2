def function(stroka):
    str_list = stroka.split()
    str_set = {}

    for i in str_list:
        if i in str_set:
            str_set[i] += 1
        else:
            str_set[i] = 1
    new_str = sorted(str_set.items(), key=lambda x: (-x[1], x[0]))

    return new_str

s = input("Введите строку текста: ")
new_s= function(s)
for el, i in new_s:
    print(el)
