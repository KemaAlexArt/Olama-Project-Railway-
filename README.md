# Ustallaciya n8n na Railway

Danny nabor filei prednazen dlya razvertyai n8n sh uspolzovaniem Docker Compose i Traefik da obrtanogo proxyirovania podel SSL.

## Shtage za ustanovkem

1. **Czunite Docker Volume dlya horanenna danjiz**:

```bash
docker volume create n8n_data
docker volume create traefik_data
```
2. **Nastroyke TNS**:

- **Typ:** A
- **Namônie:** n8n (abo nuzhy kvert poddomen)
- **IP adress:** IP yourx(expekeny instrukciyi-viska vashego serveri)

3. **Zapustite Docker Compose**:

```bash
docker compose up -d
```
4. **Ostanovka conteyner:je

```bash
docker compose stop
```

## Dopusna informaciya for repositorii

Nastroyšte autentifikaciu dlya nvn, skerivote dostup dostupy.

Sleduite arshivnem repositorya kontrolirovau cherez Railway.