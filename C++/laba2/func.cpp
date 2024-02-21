#include <math.h>
#include <iostream>
#include "func.h"

void Tetrahedron::S()
{
	if (a < 0) {
		std::cout << "Negative side" << std::endl;
		return;
	}
	std::cout << "Square: " << sqrt(3) * pow(a, 2) << std::endl;
}

void Tetrahedron::V()
{
	if (a < 0) {
		std::cout << "Negative side" << std::endl;
		return;
	}
	std::cout << "Volume: " << sqrt(2) / 12 * pow(a, 3) << std::endl;
}
