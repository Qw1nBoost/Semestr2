#include <iostream>
#include <cstring>

class String {
private:
	char* str;
public:
    String(const char* s = "") {
        str = new char[strlen(s) + 1];
        //(str, s);
        strcpy(str, s);
    }

    String(const String& other) {
        str = new char[strlen(other.str) + 1];
        strcpy(str, other.str);
    }

    String& operator=(const String& other) {
        if (this != &other) {
            delete[] str;
            str = new char[strlen(other.str) + 1];
            strcpy(str, other.str);
        }
        return *this;
    }

    ~String() { //Деструктор
        delete[] str;
    }

    void print() {
        std::cout << str << std::endl;
    }
};

int main() {

    setlocale(LC_ALL, "Russian");

    String s1("Hello World!");
    String s2 = s1;
    String s3;
    s3 = s2;

    s1.print();
    s2.print();
    s3.print();

    return 0;
}