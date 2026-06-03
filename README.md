# Agente IA SmartConnect 🤖

Este projeto é um Agente de Inteligência Artificial baseado em Node.js e Express, integrado com a API da Groq (Llama 3.1) e com capacidades de execução de ferramentas (Function Calling).

O sistema foi desenvolvido com foco em qualidade de software, utilizando **TDD (Test Driven Development)** e seguindo rigorosos padrões de segurança.

## 🚀 Funcionalidades

- **Chat Inteligente:** Conversa natural integrada com LLM.
- **Ferramentas (Tools):**
  - `getTime`: Retorna o horário atual do sistema.
  - `calculate`: Executa cálculos matemáticos de forma segura.
  - `help`: Lista as ferramentas disponíveis.
- **Segurança:** Sanitização de expressões matemáticas para evitar ataques de injeção de código.
- **Frontend:** Interface React moderna para interação com o agente.

## 🛠️ Tecnologias Utilizadas

- **Backend:** Node.js, Express, Axios, Jest, Supertest.
- **Frontend:** React, TypeScript, Vite.
- **IA:** Groq Cloud API (Llama 3.1).

## 📋 Pré-requisitos

- Node.js (v18 ou superior)
- NPM ou Yarn
- Uma chave de API da [Groq Cloud](https://console.groq.com/)

## 🔧 Instalação e Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/josecarlos2601/AgenteIA-TesteSoftware.git
   cd AgenteIA-TesteSoftware
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do projeto e adicione:
   ```env
   PORT=3000
   GROQ_API_KEY=sua_chave_aqui
   ```

## 🚀 Como Executar

Para iniciar o servidor backend:
```bash
npm start
```
O servidor estará rodando em `http://localhost:3000`.

## 🧪 Testes

O projeto possui uma suíte completa de testes automatizados cobrindo testes unitários, de integração e funcionais.

Para rodar os testes:
```bash
npm test
```

### Casos de Teste Cobertos:
- ✅ **Unitários:** Validação das funções de ferramentas (`tools.js`).
- ✅ **Integração:** Validação das rotas de API (`/health` e `/chat`).
- ✅ **Funcionais:** Fluxo completo de conversa com mocks de IA.
- ✅ **Segurança:** Bloqueio de execuções maliciosas no calculador.

## 📄 Documentação de Testes
Para detalhes técnicos sobre o plano de testes, consulte o arquivo [DOCUMENTACAO_TESTES.md](./DOCUMENTACAO_TESTES.md).

---
**Desenvolvedor:** José Carlos Lourenço Neto
**Data:** Junho de 2026
