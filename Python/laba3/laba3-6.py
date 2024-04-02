def acronym(string):
    string = string.title()
    words = string.split()
    abbrev = ''.join([word[0] for word in words])
    return abbrev


s = input("Введите что-нибудь: ")
print(acronym(s))