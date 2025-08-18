# Capstone Backend Project (Node.js + Express + MongoDB)

Production-ready backend starter combining auth, CRUD, uploads, analytics, security, and docs hooks.

## Features
- JWT Auth, Roles (user/admin)
- Users / Products / Orders APIs
- File Uploads (multer) + static serve
- Search/Filter/Sort/Pagination on products
- Analytics (monthly sales via aggregation)
- Security: Helmet, CORS, Rate Limiting
- Config via `.env` + centralized config file
- Swagger hook (Day 69) ready

## Quick Start
```bash
cp .env.example .env
npm install
npm run dev
```