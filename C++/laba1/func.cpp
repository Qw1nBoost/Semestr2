#include "func.h"
#include <ctime>
#include <chrono>
#include <fstream>

namespace al {
    void writeTimeToFile(const std::string& filename) {
        std::ofstream file(filename, std::ios_base::app);

        if (file.is_open()) {
            auto now = std::chrono::system_clock::now(); //�������� ������� �����
            std::time_t now_c = std::chrono::system_clock::to_time_t(now); //����������� ����� � ��� std::time_t(���-�� ������ � ������ �����)
            file << std::ctime(&now_c); //����� ������� � ����
            file.close();
        }
    }
}