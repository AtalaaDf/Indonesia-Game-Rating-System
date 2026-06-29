# Indonesia Game Rating System (IGRS) - Backend

Backend server for Indonesia Game Rating System built with Express.js, Prisma ORM, and MySQL.

## Prerequisites

- Node.js (v18+)
- MySQL database (e.g., via Laragon, XAMPP, or native install)

## Setup & Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables:
   Copy `.env.example` to `.env` (already done if `.env` exists) and modify the `DATABASE_URL` to match your MySQL connection details.

3. Run Prisma migrations to create the database schema:
   ```bash
   npx prisma migrate dev --name init
   ```

4. (Optional) Seed the database with mock games:
   ```bash
   npm run seed
   ```

5. Run development server:
   ```bash
   npm run dev
   ```
   The backend server will start at `http://localhost:5000`.
