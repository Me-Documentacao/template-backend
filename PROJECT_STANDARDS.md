# 📌 Padrão de Qualidade para Projetos

Este documento define os **requisitos mínimos e recomendados** para o desenvolvimento de projetos futuros, com foco em **qualidade, manutenibilidade, escalabilidade, segurança e padronização**.

O objetivo é reduzir retrabalho, evitar inconsistências e elevar o nível profissional dos projetos desde o início.

---

## 1️⃣ Qualidade de Código

- **ESLint (rigoroso)**
  - Evitar uso de `any`
  - Proibir `console.log`
  - Padronização de imports
  - Regras alinhadas ao contexto do projeto
- **Prettier**
  - Formatação padronizada via `.prettierrc`
- **Husky + lint-staged** *(recomendado)*
  - Execução de lint e testes antes de commits

---

## 2️⃣ Validação & Tipagem

- **Zod**
  - Validação de dados de entrada (body, params, query)
  - Garantia de segurança em runtime
- **Integração Zod + Swagger**
  - Utilizar `zod-to-openapi` para gerar schemas OpenAPI
  - Evitar duplicação de validações e documentação
  - Zod como **única fonte de verdade** para schemas
- **Validação de variáveis de ambiente**
  - Arquivo `env.ts`
  - A aplicação **não deve iniciar** se faltar alguma variável obrigatória
- **.env.example**
  - Deve conter todas as variáveis necessárias ao projeto

---

## 3️⃣ Testes

- **Jest**
- **Cobertura mínima: 90%**
  - Cobertura não substitui qualidade dos testes
  - Prioridade para regras de negócio
- Tipos de teste:
  - Testes unitários
  - Testes de integração (quando aplicável)

---

## 4️⃣ Logs & Observabilidade

- Substituir completamente `console.log`
- Utilizar **logger estruturado** (Winston ou Pino)
- Níveis de log:
  - `info`
  - `warn`
  - `error`
- Logs devem conter contexto relevante:
  - requestId
  - serviço ou módulo
  - stack trace (quando aplicável)
- Nunca expor dados sensíveis em logs

---

## 5️⃣ Documentação

- **Swagger / OpenAPI**
  - Documentação completa da API
  - Exemplos de request e response
- Documentação deve estar **sempre sincronizada com o código**
- Preferir geração automática via Zod (`zod-to-openapi`)

---

## 6️⃣ Segurança

- Validação obrigatória de todos os inputs
- Rate limit para endpoints sensíveis
- Headers de segurança (ex: Helmet, quando aplicável)
- Nunca expor secrets, tokens ou variáveis sensíveis

---

## 7️⃣ Arquitetura

O projeto deve seguir os princípios da **Clean Architecture**, aplicando **SOLID** sempre que possível.

### Princípios adotados:
- Separação clara de responsabilidades
- Regras de negócio independentes de frameworks
- Dependências sempre apontam para o domínio

### Organização sugerida:
- **Controllers**
  - Entrada e saída de dados
  - Sem regra de negócio
- **Services (Use Cases)**
  - Regras de negócio
  - Orquestração de casos de uso
- **Repositories**
  - Acesso a dados
- **Domain / Entities**
  - Regras centrais do negócio

---

## 8️⃣ Tratamento de Erros

- Error handler global
- Padronização de erros (ex: `AppError`)
- Respostas de erro consistentes:
  - Código HTTP adequado
  - Mensagem clara
  - Detalhes controlados

---

## 9️⃣ DevOps

- **CI/CD**
  - Pipeline mínimo:
    - Lint
    - Testes
    - Build
- Falha em qualquer etapa deve bloquear merge

---

## 🔟 Boas Práticas Adicionais

- **Conventional Commits**
- **Semantic Versioning**
- `.gitignore` bem configurado
- Evitar código morto ou não utilizado

---

## ✅ Conclusão

Este padrão existe para:
- Reduzir bugs
- Facilitar manutenção
- Garantir consistência entre projetos
- Elevar o nível técnico e profissional do código

Este documento deve evoluir junto com a maturidade dos projetos.
