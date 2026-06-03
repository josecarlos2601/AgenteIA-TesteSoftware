# Documentação de Testes de Software - Agente IA SmartConnect
**Responsável Técnico:** José Carlos Lourenço Neto
**Data:** 31 de Maio de 2026

---

## 1. Identificador do Plano de Teste
Plano de Teste de Software (PTS) - Versão 1.0 - Projeto Agente IA.

## 2. Introdução
Este documento descreve o planejamento, execução e resultados dos testes realizados no servidor do Agente de IA. O sistema é uma API baseada em Node.js/Express que integra com a API Groq para processamento de linguagem natural e execução de ferramentas (tools).

## 3. Itens de Teste
- `server.js`: Core da aplicação.
- Ferramentas do Agente: `getTime`, `calculate`, `help`.
- Integração com API Groq (mockada nos testes).

## 4. Características a serem testadas
- Resposta correta a mensagens do usuário.
- Execução segura da ferramenta `calculate`.
- Retorno de horário via `getTime`.
- Validação de entrada de dados (body validation).
- Rota de verificação de integridade (`/health`).
- Persistência de sessão em memória.

## 5. Características não a serem testadas
- Frontend (agente UI) - fora do escopo desta bateria de testes de backend.
- Estabilidade real da API Groq (serão usados mocks).

## 6. Abordagem (Estratégia)
- **Testes Unitários:** Foco nas funções de ferramentas.
- **Testes de Integração:** Verificação dos endpoints da API.
- **Testes Funcionais:** Fluxo completo mensagem -> resposta (com mocks).
- **TDD:** Desenvolvimento guiado por testes para a nova ferramenta `help`.

## 7. Critérios de Passagem/Falha
- **Passagem:** Todos os testes Jest retornam "pass" e cobertura de código > 80%.
- **Falha:** Qualquer erro de segurança (como eval inseguro) ou falha em rotas críticas.

## 8. Critérios de Suspensão e Requisitos de Retomada
Testes serão suspensos se o servidor não iniciar ou se houver falha crítica de conexão. Serão retomados após correção do `env` ou código base.

## 9. Entregas de Teste
- Plano de Teste (este documento).
- Suíte de testes Jest em `tests/`.
- Histórico de commits no GitHub.

## 10. Tarefas de Teste
1. Configuração do ambiente Jest/Supertest.
2. Escrita de testes unitários.
3. Escrita de mocks para Axios (Groq).
4. Execução e geração de relatórios.

## 11. Necessidades Ambientais
- Node.js v18+.
- Pacotes: express, axios, uuid, jest, supertest.
- Variável de ambiente `GROQ_API_KEY`.

## 12. Responsabilidades
- **Desenvolvedor/QA:** José Carlos Lourenço Neto.

## 13. Equipe e Necessidades de Treinamento
- Equipe: 1 pessoa.
- Treinamento: Conhecimento em Jest e testes de API REST.

## 14. Cronograma
- **31/05/2026 17:00:** Início da refatoração e correção de bugs.
- **31/05/2026 17:30:** Implementação dos testes unitários e integração.
- **31/05/2026 18:00:** Finalização da documentação.

## 15. Riscos e Contingências
- Risco: API Groq fora do ar. Contingência: Uso de mocks/stubs.
- Risco: Falha de segurança no `eval`. Contingência: Sanitização por Regex e uso de `Function`.

## 16. Aprovações
Aprovado por: José Carlos Lourenço Neto.

## 17. Casos de Teste (Unitários)
- `tools.getTime()`: Deve retornar string com data válida.
- `tools.calculate("2+2")`: Deve retornar "4".
- `tools.calculate("malicious_code")`: Deve retornar "Expressão inválida".

## 18. Casos de Teste (Integração)
- `GET /health`: Status 200, JSON `{ status: "ok" }`.
- `POST /chat`: Erro 400 se `message` for omitida.

## 19. Casos de Teste (Funcionais)
- Fluxo de chat: Mock de resposta da Groq sendo repassada ao usuário.
- Chamada de Tool via Chat: Groq retornando comando `TOOL:` e servidor processando corretamente.

## 20. Casos de Teste (E2E/Aceitação)
- O usuário envia "Quanto é 5*5" e recebe "🛠️ Resultado: 25".

## 21. Relatório de Execução (Evidências)
*Nota: Resultados obtidos via execução local do Jest.*
- **Unit Tests:** 4/4 passed.
- **Integration Tests:** 3/3 passed.
- **Functional Tests:** 2/2 passed.
- **Total:** 9 testes realizados com sucesso.

## 22. Conclusão
O servidor foi corrigido e todos os bugs críticos (PORT, Eval, Validação) foram sanados. A suíte de testes garante que novas alterações não quebrem funcionalidades existentes (regressão). O código está pronto para deploy.
