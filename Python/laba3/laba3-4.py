
def count_string_repetitions(strings_list):
    reps = []
    s = []
    for string in strings_list:
        if string in s:
            continue
        else:
            s.append(string) 
            reps.append(strings_list.count(string))
    return reps


a = ['abc', 'bcd', 'abc', 'abd', 'abd', 'dcd', 'abc']
result = count_string_repetitions(a)

print(result)  