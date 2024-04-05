#include "func.h"
#include <ctime>
#include <chrono>
#include <fstream>

namespace al {
    void writeTimeToFile(const std::string& filename) {
        std::ofstream file(filename, std::ios_base::app);

        if (file.is_open()) {
            auto now = std::chrono::system_clock::now(); //получаем текущее время
            std::time_t now_c = std::chrono::system_clock::to_time_t(now); //преобразуем время в тип std::time_t(кол-во секунд с начала эпохи)
            file << std::ctime(&now_c); //вывод времени в файл
            file.close();
        }
    }
}