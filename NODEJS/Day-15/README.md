# Day-15:  Search, Filter, Sorting & Pagination (Node + Express + Mongoose)

Add powerful querying to your API using clean query parameters.

## ✨ Features
- Keyword search (regex or $text)
- Dynamic filtering (completed, user, date range)
- Multi-field sorting (e.g., `completed,-createdAt`)
- Pagination with meta (total, pages, hasNext/Prev)
- Field projection (`select=title,completed`)
- Useful MongoDB indexes for performance

## 📦 Endpoints
- `GET /api/todos` — list with search/filter/sort/pagination
- `POST /api/todos` — create
- `PATCH /api/todos/:id` — update
- `DELETE /api/todos/:id` — delete

## 🔎 Query Parameters
- `q` — keyword (title/description)
- `completed` — `true|false`
- `user` — userId
- `createdFrom`, `createdTo` — ISO date strings
- `sort` — e.g. `createdAt`, `-createdAt`, `completed,-createdAt`
- `page` — default `1`
- `limit` — default `10` (max 100)
- `select` — comma separated fields, e.g. `title,completed`

## 🛠 Setup
```bash
npm install
npm run dev
