# 🚀 E-commerce API (NestJS + TypeORM + PostgreSQL + Docker)

API de gerenciamento de pedidos (mini e-commerce) construída com foco em **boas práticas de arquitetura backend**.

---

## 🧱 Tecnologias

* NestJS
* TypeORM
* PostgreSQL
* Docker

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido para praticar:

* Arquitetura em camadas (Controller, Service, Repository)
* Uso de DTOs
* Relacionamentos com banco de dados
* Regras de negócio reais (ex: criação de pedidos)
* Configuração com variáveis de ambiente
* Containerização com Docker

---

## 📁 Estrutura do Projeto

```
src/
 ├── modules/
 │    ├── users/
 │    │    ├── dto/
 │    │    ├── entities/
 │    │    ├── users.controller.ts
 │    │    ├── users.service.ts
 │    │    ├── users.repository.ts
 │    │
 │    ├── products/
 │    │    ├── dto/
 │    │    ├── entities/
 │    │    ├── products.controller.ts
 │    │    ├── products.service.ts
 │    │    ├── products.repository.ts
 │    │
 │    ├── orders/
 │    │    ├── dto/
 │    │    ├── entities/
 │    │    ├── orders.controller.ts
 │    │    ├── orders.service.ts
 │    │    ├── orders.repository.ts
 │    │
 │    ├── order-items/
 │    │    ├── dto/
 │    │    ├── entities/
 │    │    ├── order-items.controller.ts
 │    │    ├── order-items.service.ts
 │    │    ├── order-items.repository.ts
 │
 ├── shared/
 │    ├── database/
 │    │    ├── typeorm.config.ts
 │    ├── utils/
 │
 ├── app.module.ts
 └── main.ts
```

---

## ⚙️ Configuração do Ambiente

### 1. Clonar o projeto

```bash
git clone <repo-url>
cd ecommerce-api
```

---

### 2. Criar arquivo `.env`

```
DB_HOST=localhost
DB_PORT=5433
DB_USER=postgres
DB_PASS=docker
DB_NAME=ecommerce-api
```

---

### 3. Subir o banco com Docker

```bash
docker-compose up -d
```

---

### 4. Instalar dependências

```bash
npm install
```

---

### 5. Rodar a aplicação

```bash
npm run start:dev
```

---

## 🔌 Endpoints principais

### 👤 Users

* `POST /users`
* `GET /users`
* `GET /users/:id`

---

### 📦 Products

* `POST /products`
* `GET /products`
* `PATCH /products/:id/stock`

---

### 🧾 Orders

* `POST /orders`
* `GET /orders`
* `GET /orders/:id`

---

## 🧠 Regras de Negócio

* Total do pedido é calculado no **Service**
* Estoque é validado antes de criar um pedido
* Email de usuário é único
* Senhas não são retornadas na resposta

---

## 🐳 Docker

O projeto utiliza Docker para subir o banco de dados PostgreSQL.

```bash
docker-compose up -d
```

---

## ⚠️ Observações

* `synchronize: true` está habilitado apenas para desenvolvimento
* Em produção, usar migrations

---

## 🚀 Próximos passos

* [ ] Criar módulo de autenticação (JWT)
* [ ] Adicionar validação com class-validator
* [ ] Implementar migrations
* [ ] Melhorar tratamento de erros
* [ ] Testes automatizados

---

## 👨‍💻 Autor

Desenvolvido para estudo e prática de backend com NestJS.
