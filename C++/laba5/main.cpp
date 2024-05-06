#include <SFML/Graphics.hpp>
#include <Circle.h>
#include <Game.h>


int main()
{
    la::Game game(1500, 900, "Circles bounce game!!!!!!!");
    game.Setup(10);

    game.LifeCycle();

    return 0;
}