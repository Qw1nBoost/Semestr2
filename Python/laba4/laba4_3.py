def Game():
    n = int(input('Введите кол-во городов: '))
    set_ = set()
    while n:
        city = input('Введите название города: ')
        if city in set_:
            print('REPEAT')
        else:
            print('OK')
            set_.add(city)
            n -= 1

Game()
