# Let Me Ask

Projeto desenvolvido durante o evento **NLW (Next Level Week)** da Rocketseat.

## 📋 Sobre o Projeto

Let Me Ask é uma aplicação web para criação e gerenciamento de salas de perguntas e respostas, permitindo que usuários criem salas e participem de sessões de Q&A.

## 🛠️ Tecnologias Utilizadas

### Core

- **React 19** - Biblioteca para construção de interfaces com hooks e componentes funcionais
- **TypeScript 5.8** - Superset do JavaScript com tipagem estática e IntelliSense avançado
- **Vite 7** - Build tool ultra-rápido com HMR (Hot Module Replacement) e configuração zero

### Styling & UI

- **Tailwind CSS 4** - Framework CSS utilitário com sistema de design tokens e dark mode
- **Radix UI** - Biblioteca de componentes headless, acessíveis e customizáveis (Slot, Button)
- **Lucide React** - Biblioteca de ícones SVG otimizados e customizáveis
- **Class Variance Authority (CVA)** - Sistema de variantes para componentes com TypeScript
- **clsx & tailwind-merge** - Utilitários para composição condicional de classes CSS

### State Management & Data Fetching

- **TanStack Query 5** - Biblioteca para gerenciamento de estado do servidor, cache inteligente e sincronização automática

### Routing

- **React Router DOM 7** - Roteamento client-side com lazy loading e nested routes

### Development Tools

- **Biome 2.0** - Linter e formatter unificado (substituindo ESLint + Prettier) com configuração Ultracite
- **Ultracite** - Preset de configuração otimizada para projetos React/TypeScript
- **tw-animate-css** - Plugin para animações CSS com Tailwind

## 📁 Estrutura do Projeto

```
src/
├── components/
│   └── ui/           # Componentes base (Button, etc.)
├── pages/            # Páginas da aplicação
├── lib/              # Utilitários e helpers
├── app.tsx           # Componente principal
└── main.tsx          # Entry point
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão especificada no `.nvmrc`)
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre na pasta do projeto
cd web

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build

```bash
# Gere o build de produção
npm run build

# Visualize o build localmente
npm run preview
```

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build localmente

## 🎨 Padrões de Projeto

- **Componentes UI Reutilizáveis** - Sistema de componentes baseado em Radix UI
- **Roteamento** - React Router para navegação entre páginas
- **State Management** - TanStack Query para gerenciamento de estado do servidor
- **Styling** - Tailwind CSS com sistema de design tokens
- **TypeScript** - Tipagem estática em todo o projeto
- **Code Quality** - Biome para linting e formatação

## 🔧 Configurações

- **Vite** configurado com alias `@` para `./src`
- **Tailwind CSS 4** com configuração otimizada
- **Biome** com preset Ultracite para linting
- **TypeScript** com configurações estritas

---

Desenvolvido com 🩵 por [Jessica Castro](https://github.com/jessicacastro) durante o NLW da Rocketseat
