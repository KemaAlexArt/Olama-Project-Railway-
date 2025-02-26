#!/bin/bash

# Загружаем модели (раскомментируйте нужные)
echo "Загрузка моделей..."
ollama pull llama2  # Пример загрузки модели llama2
# ollama pull mistral
# ollama pull gemma:7b

# Запускаем ollama на переднем плане
echo "Запуск Ollama..."
ollama serve
