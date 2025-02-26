#!/bin/bash

# Запускаем ollama в фоновом режиме
ollama serve &
OLLAMA_PID=$!

# Ждем запуска сервиса
sleep 5

# Загружаем модели (раскомментируйте нужные)
# ollama pull llama2
# ollama pull mistral
# ollama pull gemma:7b

# Остаемся в активном состоянии и перенаправляем логи
wait $OLLAMA_PID
