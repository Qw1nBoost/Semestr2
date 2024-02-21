a, b, c = map(int, input("Введите три числа: ").split())
maxi = a
mini = a
  
if b > maxi: 
    maxi = b
if c > maxi :
    maxi = c;
if b < mini: 
    mini = b;
if c < mini: 
    mini = c;

print(mini, maxi)