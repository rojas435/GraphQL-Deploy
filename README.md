# Aromalife Candles API

Welcome to the **Aromalife Candles API** repository. This API powers the backend of the Aromalife platform, which offers personalized aromatic candles based on emotional states, decorative needs, and gift intentions. This document outlines the key features, architecture, and functionalities of the system.

---

## 🧩 Project Structure

The codebase follows a modular architecture, separating concerns into well-defined modules. Each module includes:

* **Controllers**: Handle HTTP requests and responses
* **Services**: Contain business logic
* **Entities**: Define database models
* **DTOs**: Manage data transfer between layers

This separation ensures maintainability, scalability, and clean code practices.

---

## 🚀 Key Features

* **👤 User Management**
  Full CRUD for user accounts, including login, registration, and role-based access control.

* **🕯️ Custom Candles**
  Create and manage personalized candles with associated containers, fragrances, and emotional categories.

* **📦 Orders & Subscriptions**
  Manage orders and subscriptions with detailed tracking of payment methods, statuses, and user data.

* **🔐 Authentication & Authorization**
  Secure authentication with **JWT** and fine-grained access control based on user roles.

* **🗃️ Database Persistence**
  Uses **PostgreSQL** to ensure reliable, consistent, and performant data storage.

* **✅ Testing & Quality Assurance**
  Automated tests cover key modules and use cases to ensure robustness and prevent regressions.

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Deployment

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
