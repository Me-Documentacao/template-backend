# Template Backend – Padrão Profissional

Template backend em **Node.js + TypeScript** focado em **qualidade, padronização, segurança e escalabilidade**. Este repositório serve como base para iniciar novos projetos já com as melhores práticas aplicadas desde o primeiro commit.

> **Objetivo**: reduzir retrabalho, evitar inconsistências e elevar o nível profissional dos projetos backend.

---

## 🚀 Stack e Tecnologias

* **Node.js** + **TypeScript**
* **ESLint** (configuração rigorosa)
* **Prettier** (formatação padronizada)
* **Husky** + **lint-staged**
* **Jest** (testes unitários e integração)
* **Zod** (validação de dados e ambiente)
* **Swagger / OpenAPI** (documentação automática)
* **Logger estruturado** (Pino ou Winston)

---

## 📁 Estrutura de Pastas

```text
src/
├─ domain/            # Entidades e regras centrais do negócio
├─ application/       # Casos de uso (services / use cases)
├─ infrastructure/    # Banco de dados, APIs externas, providers
├─ interfaces/        # Controllers, rotas e DTOs
├─ shared/            # Logger, erros, helpers, configs
├─ env.ts             # Validação de variáveis de ambiente (Zod)
└─ server.ts          # Bootstrap da aplicação
```

### Princípios adotados

* Clean Architecture
* SOLID
* Separação clara de responsabilidades
* Regras de negócio independentes de frameworks

---

## ⚙️ Como usar este template

### Opção 1 – Clonar diretamente

```bash
git clone https://github.com/Me-Documentacao/template-backend.git
cd template-backend
npm install
```

### Opção 2 – Usar como template

* Clique em **Use this template** no GitHub
* Crie um novo repositório a partir deste

---

## ▶️ Scripts disponíveis

```bash
npm run dev        # Executa em modo desenvolvimento
npm run build      # Build para produção
npm run start      # Executa build
npm run lint       # Verifica padrões de código
npm run test       # Executa testes
npm run test:cov   # Testes com cobertura
```

---

## 🧪 Testes

* **Framework**: Jest
* **Cobertura mínima**: 90%
* Prioridade para:

  * Regras de negócio
  * Casos de erro
  * Fluxos críticos

> Cobertura não substitui qualidade de testes.

---

## ✅ Validação de dados

* **Zod** como única fonte de verdade
* Validação de:

  * Body
  * Params
  * Query
  * Variáveis de ambiente

A aplicação **não inicia** se variáveis obrigatórias não estiverem definidas.

Arquivo obrigatório:

```text
.env.example
```

---

## 📘 Documentação da API

* Swagger / OpenAPI
* Geração automática via `zod-to-openapi`
* Documentação sempre sincronizada com o código
* Exemplos de request e response

Acesse:

```text
http://localhost:PORT/docs
```

---

## 🪵 Logs & Observabilidade

* Logger estruturado (sem `console.log`)
* Níveis de log:

  * info
  * warn
  * error

Logs devem conter:

* requestId
* módulo ou serviço
* stack trace (quando aplicável)

❌ Nunca expor dados sensíveis.

---

## 🔐 Segurança

* Validação obrigatória de todos os inputs
* Rate limit para endpoints sensíveis
* Headers de segurança
* Nunca versionar secrets ou tokens

---

## 🚦 CI/CD (Recomendado)

Pipeline mínimo:

1. Lint
2. Testes
3. Build

Falha em qualquer etapa deve bloquear o merge.

---

## 🧭 Boas Práticas

* Conventional Commits
* Semantic Versioning
* `.gitignore` bem configurado
* Evitar código morto

---

## 📌 Quando usar este template

* APIs REST
* Backends corporativos
* Projetos que exigem manutenção e escalabilidade

> Pode ser adaptado conforme o contexto do projeto.

---

## 📈 Evolução

Este template é vivo e deve evoluir conforme a maturidade técnica dos projetos.

Sugestões e melhorias são bem-vindas 🚀
