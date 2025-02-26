FROM ollama/ollama:latest

WORKDIR /app

# Копируем скрипт для загрузки моделей при запуске (опционально)
COPY start.sh /app/start.sh
RUN chmod +x /app/start.sh

# Устанавливаем необходимые переменные окружения
ENV OLLAMA_HOST=0.0.0.0
ENV OLLAMA_MODELS_PATH=/root/.ollama/models

# Открываем порт для API
EXPOSE 11434

# Запускаем скрипт start.sh при старте контейнера
CMD ["/app/start.sh"]
