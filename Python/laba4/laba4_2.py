s1 = {1, 10, 223, 413, 2}
s2 = {1, 10, 223, 413, 2}

def Subset(set1, set2):
    if set1 == set2: return False
    return (all(i in set2 for i in set1))

print(Subset(s1, s2))