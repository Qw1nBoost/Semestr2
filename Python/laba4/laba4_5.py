class Customer():
    def __init__(self, id, product, productCnt):
        self.id = id
        self.product = product
        self.productCnt = productCnt
        
    def returnId(self):
        return self.id
    
    def returnProduct(self):
        return self.product
    
    def returnProdCnt(self):
        return self.productCnt
    
list_ = []
n = int(input('Введите количество записей о покупках: '))
for i in range(n):
    wr = input('Введите запись о покупке (ID Покупателя, Товар, Количество): ').split()
    customer = Customer(wr[0], wr[1], wr[2])
    list_.append(customer)

for cus in list_:
    print(f"ID покупателя:{cus.returnId()}, Товар:{cus.returnProduct()}, Кол-во:{cus.returnProdCnt()}")