# Shopify Merchant Analytics App

Analytics dashboard for Shopify merchants: products, customers, orders and sales insights.

## Tech stack

| Part | Tech |
| --- | --- |
| Backend | NestJS (TypeScript) |
| Frontend | React + Vite (TypeScript) |
| Database | PostgreSQL + Prisma |
| Shopify | Admin GraphQL API via `@shopify/shopify-api` |
| Hosting | Render (API + static site), Neon (Postgres) |

## Project structure

```bash
shopify-merchant-analytics-app/
├── backend/    # NestJS REST API + Shopify integration
└── frontend/   # React dashboard
```

## Requirements

- Node.js 24 LTS
- PostgreSQL 18 (local development)
- A Shopify Partner account and a development store

## Getting started

```bash
# Backend: http://localhost:3000
cd backend
npm install
npm run start:dev

# Frontend: http://localhost:5173
cd frontend
npm install
npm run dev
```
