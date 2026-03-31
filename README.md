# Next.js Issue Tracker

A high-performance, full-stack issue management application inspired by Linear. This project demonstrates modern web patterns using **Next.js 15**, Serverless Postgres, and type-safe ORM integration.

## 🚀 Tech Stack

* **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Server Components)
* **Database:** [PostgreSQL](https://www.postgresql.org/) via [Neon](https://neon.tech/) (Serverless)
* **ORM:** [Drizzle ORM](https://orm.drizzle.team/) for type-safe queries and schema management
* **Auth:** Custom JWT-based authentication using `jose` and `bcrypt`
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [Lucide React](https://lucide.dev/)
* **Validation:** [Zod](https://zod.dev/) for schema-first data validation
* **Testing:** [Vitest](https://vitest.dev/) and React Testing Library

## ✨ Features

* **Full CRUD:** Create, update, and manage issues with optimized server-side rendering.
* **Secure Auth:** Robust Sign-up/Sign-in flow with protected API routes and middleware.
* **Type Safety:** End-to-end TypeScript integration from the database schema to the UI components.
* **Responsive UI:** A modern interface optimized for speed and all device sizes.

## 🛠️ Getting Started

### 1. Prerequisites
* Node.js 22+
* A [Neon.tech](https://neon.tech/) or local PostgreSQL instance

### 2. Installation
```bash
git clone [repo-url]
cd next-js-fundamentals
npm install