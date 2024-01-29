#pragma once

class   Tetrahedron
{
private:
    float a;
public:
    Tetrahedron(float side) : a(side)
    {
    }
    void S();
    void V();
};