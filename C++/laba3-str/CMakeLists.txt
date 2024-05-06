cmake_minimum_required (VERSION 3.8)

set(PROJECT_NAME laba3-str)
project("${PROJECT_NAME}")

set(CMAKE_CXX_STANDART 17)
set(CMAKE_CXX_EXSTENSIONS OFF)
set(CMAKE_CXX_STANDART_REQUIRED TRUE)

add_executable("${PROJECT_NAME}" main.cpp)
