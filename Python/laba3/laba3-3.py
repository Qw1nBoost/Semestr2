from num2words import num2words

old_int = int(input("Введите число от 1 до 1000: "))
new_int = num2words(old_int, lang='ru')

print(f'Вы ввели число: {new_int}')