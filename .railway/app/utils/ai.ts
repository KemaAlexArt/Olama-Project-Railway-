// Интеграция Ollama с вашим существующим React приложением
// Добавьте этот код в app/utils/ai.ts

import { Settings } from "../hooks/useSettings"

interface OllamaResponse {
  model: string
  created_at: string
  response: string
  done: boolean
}

export async function generateOllamaResponse(
  settings: Settings,
  messages: { role: "user" | "assistant" | "system"; content: string }[],
) {
  // Получаем URL Ollama API из настроек или используем дефолтный
  const ollamaUrl = settings.ollamaUrl || "https://your-railway-ollama-url.up.railway.app"
  
  // Формируем запрос в формате Ollama API
  const ollamaMessages = messages.map(msg => ({
    role: msg.role,
    content: msg.content,
  }))
  
  // Добавляем системный промпт, если он есть
  if (settings.systemPrompt) {
    ollamaMessages.unshift({
      role: "system",
      content: settings.systemPrompt,
    })
  }
  
  try {
    const response = await fetch(${ollamaUrl}/api/chat, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: settings.model || "llama2",
        messages: ollamaMessages,
        stream: false,
        options: {
          temperature: settings.temperature,
          num_predict: settings.maxTokens,
          top_p: settings.topP,
        },
      }),
    })
    
    if (!response.ok) {
      throw new Error(Ошибка API: ${response.status} ${response.statusText})
    }
    
    const data: OllamaResponse = await response.json()
    return data.response
  } catch (error) {
    console.error("Ошибка при вызове Ollama API:", error)
    throw error
  }
}

// Модификация Settings интерфейса
// Добавьте в app/hooks/useSettings.ts

// export interface Settings {
//   apiKey: string
//   model: string
//   temperature: number
//   maxTokens: number
//   topP: number
//   frequencyPenalty: number
//   presencePenalty: number
//   systemPrompt: string
//   ollamaUrl: string  // Добавляем URL для Ollama
//   useOllama: boolean // Флаг для выбора между OpenAI и Ollama
// }

// Также добавьте эти поля в defaultSettings:
// const defaultSettings: Settings = {
//   ...
//   ollamaUrl: "https://your-railway-ollama-url.up.railway.app",
//   useOllama: false,
// }

// Модификация Chat.tsx для поддержки Ollama
// В функции handleSubmit замените вызов generateResponse на:

// try {
//   let response;
//   if (settings.useOllama) {
//     response = await generateOllamaResponse(settings, [...messages, userMessage]);
//   } else {
//     response = await generateResponse(settings, [...messages, userMessage]);
//   }
//   setMessages((prev) => [...prev, { role: "assistant", content: response }]);
//   addLog("Получен ответ от ИИ");
// } catch (error) {
//   addLog(Ошибка: ${error instanceof Error ? error.message : String(error)});
// }
