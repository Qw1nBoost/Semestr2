#include <SFML/Graphics.hpp>﻿
#include <iostream>
#include <iostream>

int main()
{
    float DeltaTime;
    float moveSpeed = 500.f;
    sf::Vector2f movement(0.f, 0.f);
    sf::Clock* clock = new sf::Clock;

    sf::RenderWindow window(sf::VideoMode(1920, 1080), "SFML figures");
    sf::Texture backgroundTexture;
    sf::Texture tankTexture;
    sf::Sprite backround;
    sf::Sprite tank;

    if (!backgroundTexture.loadFromFile("Assets\\background.jpg")) {
        std::cout << "Fail while loading file 'Assets\\background.jpg'" << std::endl;
        return 0;
    }

    if (!tankTexture.loadFromFile("Assets\\tank.png")) {
        std::cout << "Fail while loading file 'Assets\\tank.png'" << std::endl;
        return 0;
    }

    backround.setTexture(backgroundTexture);
    tank.setTexture(tankTexture);

    backround.setPosition(0, 0);
    tank.setPosition(100, 100);

    while (window.isOpen())
    {
        DeltaTime = clock->restart().asSeconds();

        sf::Event event;
        while (window.pollEvent(event))
        {
            if (event.type == sf::Event::Closed)
                window.close();
        }

        if (sf::Keyboard::isKeyPressed(sf::Keyboard::W))
            tank.move(0.0f, -moveSpeed * DeltaTime);
        if (sf::Keyboard::isKeyPressed(sf::Keyboard::S))
            tank.move(0.0f, moveSpeed * DeltaTime);
        if (sf::Keyboard::isKeyPressed(sf::Keyboard::A))
            tank.move( -moveSpeed * DeltaTime, 0.0f);
        if (sf::Keyboard::isKeyPressed(sf::Keyboard::D))
            tank.move(moveSpeed * DeltaTime, 0.0f);


        window.clear();
        window.draw(backround);
        window.draw(tank);
        window.display();
    }

    return 0;
}