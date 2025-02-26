onValueChange={(value) => updateSettings({ presencePenalty: value[0] })}
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="ollama">
            <div className="space-y-4">
              <div>
                <Label htmlFor="ollamaUrl">URL сервера Ollama</Label>
                <Input
                  id="ollamaUrl"
                  value={settings.ollamaUrl}
                  onChange={(e) => updateSettings({ ollamaUrl: e.target.value })}
                  placeholder="https://your-ollama-url.up.railway.app"
                />
              </div>
              <div>
                <Label htmlFor="ollamaModel">Модель Ollama</Label>
                <Input 
                  id="ollamaModel" 
                  value={settings.model} 
                  onChange={(e) => updateSettings({ model: e.target.value })}
                  placeholder="llama2, mistral, gemma:7b и т.д."
                />
              </div>
              <div>
                <Label htmlFor="temperature">Температура: {settings.temperature}</Label>
                <Slider
                  id="temperature"
                  min={0}
                  max={1}
                  step={0.1}
                  value={[settings.temperature]}
                  onValueChange={(value) => updateSettings({ temperature: value[0] })}
                />
              </div>
              <div>
                <Label htmlFor="maxTokens">Максимальное количество токенов: {settings.maxTokens}</Label>
                <Slider
                  id="maxTokens"
                  min={1}
                  max={2048}
                  step={1}
                  value={[settings.maxTokens]}
                  onValueChange={(value) => updateSettings({ maxTokens: value[0] })}
                />
              </div>
              <div>
                <Label htmlFor="topP">Top P: {settings.topP}</Label>
                <Slider
                  id="topP"
                  min={0}
                  max={1}
                  step={0.1}
                  value={[settings.topP]}
                  onValueChange={(value) => updateSettings({ topP: value[0] })}
                />
              </div>
            </div>
          </TabsContent>
          
          <div className="mt-4">
            <Label htmlFor="systemPrompt">Системный промпт</Label>
            <Textarea
              id="systemPrompt"
              value={settings.systemPrompt}
              onChange={(e) => updateSettings({ systemPrompt: e.target.value })}
              rows={3}
            />
          </div>
        </Tabs>
      </CardContent>
    </Card>
  )
}
