# Let Me Ask

Projeto desenvolvido durante o evento **NLW (Next Level Week)** da Rocketseat.

## 📋 Sobre o Projeto

Let Me Ask é uma aplicação backend que gerencia salas de perguntas e respostas, desenvolvida com tecnologias modernas e seguindo boas práticas de desenvolvimento.

## 🛠️ Tecnologias Utilizadas

- **Node.js** com Typescript nativo (experimental strip types)
- **Fastify** - Framework web rápido e eficiente
- **Drizzle ORM** - ORM moderno para PostgreSQL
- **PostgreSQL** com extensão pgvector para vetores
- **Zod** - Validação de schemas
- **Docker** - Containerização do banco de dados
- **Biome** - Linting e formatação de código

## 🏗️ Arquitetura e Padrões

- **Separação de responsabilidades** entre rotas, schemas e conexões com banco
- **Validação de schemas** com Zod para type safety
- **ORM type safe** com Drizzle para operações de banco de dados
- **Validação de variáveis de ambiente** centralizadas

## 🚀 Setup e Configuração

### Pré-requisitos

- Node.js (versão especificada no `.nvmrc`)
- Docker e Docker Compose

### Instalação

### 1. **Clone o repositório**

```bash
git clone <repository-url>
cd server
```

### 2. **Instale as dependências**

```bash
npm install
```

### 3. **Configure as variáveis de ambiente**

```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
```

### 4. **Inicie o banco de dados**

```bash
docker-compose up -d
```

### 5. **Execute as migrações do banco**

```bash
npx drizzle-kit migrate
```

### 6. **(Opcional) Popule o banco com dados de exemplo**

```bash
npm run db:seed
```

### 7. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

### 📚 Scripts Disponíveis

- `npm run dev` - Inicia o servidor em modo desenvolvimento com hot reload
- `npm run start` - Inicia o servidor em modo de produção
- `npm run db:seed` - Popula o banco de dados com dados fictícios

## 🌐 Endpoints

A API estará disponível em `http://localhost:3333`

- `GET /healthcheck`- Health check da aplicação
- `GET /rooms` - Lista as salas disponíveis
- `GET /rooms/:roomId/questions`- Lista as perguntas de uma sala
- `POST /rooms` - Cria uma sala de perguntas
- `POST /rooms/:roomId/questions`- Cria perguntas em uma sala específica

---

Desenvolvido com 🩵 por [Jessica Castro](https://github.com/jessicacastro) durante o NLW da Rocketseat
