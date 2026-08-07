# Wallet Watchlist

Full-stack Wallet Watchlist application built with React (Vite + TypeScript) and native PHP backend.

## Requirements

Before running the project, make sure you have installed:

- Node.js v20+
- PHP 8+
- MySQL

---

## Frontend

Navigate to the frontend folder:

cd frontend

Install dependencies:

npm install

Start the development server:

npm run dev

Frontend will be available at:

http://localhost:5173/

---

## Backend

From the project root run:

php -S localhost:8000 -t backend/public

Backend API will be available at:

http://localhost:8000

---

## Configuration

### Frontend configuration

Create a `.env` file inside the `/frontend` directory:

VITE_API_URL=http://localhost:8000

This variable defines the backend API URL used by the React application.

---

### Backend configuration

Backend configuration is located in:

backend/config/config.php

This file contains:

- Database connection settings
- Allowed frontend URL for CORS

Example:

define('DB_HOST', 'localhost');
define('DB_NAME', 'react_wallet_watchlist');
define('DB_USER', 'root');
define('DB_PASSWORD', '');

define('FRONTEND_URL', 'http://localhost:5173');

Update these values according to your local environment.

---

## Database

Import the SQL file located at:

database/react_wallet_watchlist.sql

Make sure the database credentials in:

backend/config/config.php

match your local MySQL setup.

---
