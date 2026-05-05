# 🐾 Adoption API

API REST desarrollada con Node.js y Express para la gestión de adopciones.  
Incluye tests funcionales, documentación con Swagger y dockerización completa.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- Jest + Supertest
- Swagger
- Docker

---

## 📁 Estructura del proyecto

```bash
Backend-III/
├── src/
│   ├── app.js
│   ├── server.js
│   ├── routes/
│   │   └── adoption.router.js
│   ├── controllers/
│   │   └── adoption.controller.js
│   ├── services/
│   │   └── adoption.service.js
│   └── docs/
│       └── swagger.js
├── test/
│   └── adoption.test.js
├── Dockerfile
├── .dockerignore
├── .gitignore
├── package.json
├── package-lock.json
└── README.md