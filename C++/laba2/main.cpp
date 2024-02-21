#include <iostream>
#include "func.h"

using namespace std;


int main() {
    float side;

    cout << "Enter side: ";
    cin >> side;

    Tetrahedron tetrahedron(side);
    tetrahedron.S();
    tetrahedron.V();

	return 0;
}