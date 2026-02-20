# Teamtailor API Data Exporter

A React + TypeScript application built with Vite that fetches candidate and application data from the [Teamtailor API](https://open.teamtailor.com), processes/merges the datasets, and enables exporting the final results to a CSV file.

## 🚀 Features

- **Data Integration**: Fetches and merges Candidates and Applications data using relational mapping.
- **Efficient State Management**: Uses **React Query (TanStack Query)** for optimized caching, loading states, and error handling.
- **CSV Export**: Custom utility to transform JSON objects into downloadable CSV files with **UTF-8 BOM** for Excel compatibility.
- **Type Safety**: Fully written in **TypeScript** with custom interfaces for Teamtailor resources.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://reactjs.org)
- **Build Tool**: [Vite](https://vitejs.dev)
- **Package Manager**: [pnpm](https://pnpm.io)
- **HTTP Client**: [Axios](https://axios-http.com)
- **Data Fetching**: [TanStack Query (React Query)](https://tanstack.com)
- **Language**: [TypeScript](https://www.typescriptlang.org)

## 📋 Prerequisites

Before running the project, ensure you have:# Teamtailor API Data Exporter

A Fullstack application (Node.js + React) built to fetch, synchronize, and export candidate data from the [Teamtailor API](https://open.teamtailor.com). The system processes relational data between candidates and job applications, stores them locally, and enables seamless CSV export.

## 🚀 Features

- **Fullstack Proxy Architecture**: Express.js backend securely handles Teamtailor API keys, preventing exposure on the frontend.
- **Data Synchronization**: Custom logic to merge Candidate profiles with their specific Job Application timestamps.
- **Local JSON Persistence**: Backend saves processed data to a local JSON file to improve performance and reduce API rate-limiting.
- **Modern State Management**: Uses **TanStack Query (React Query)** for optimized fetching, caching, and error handling.
- **CSV Export**: Integrated utility to transform JSON data into Excel-compatible CSV files.
- **Adaptive UI**: Responsive design with automatic **Dark/Light Mode** support based on system preferences.

## 🛠️ Tech Stack

### Backend (Server)

- **Runtime**: [Node.js](https://nodejs.org)
- **Framework**: [Express.js](https://expressjs.com)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Environment**: [dotenv](https://github.com/motdotla/dotenv) for secret management.
- **HTTP Client**: Axios

### Frontend (Client)

- **Framework**: [React 18](https://reactjs.org) (Vite)
- **Data Fetching**: [TanStack Query](https://tanstack.com)
- **HTTP Client**: Axios
- **Styling**: Standard CSS3 with CSS Variables for themes.

## 📋 Prerequisites

- [Node.js](https://nodejs.org) (v18.0.0 or higher)
- [pnpm](https://pnpm.io) or npm
- Teamtailor API Key (with Admin/Read permissions)

## ⚙️ Configuration

### 1. Backend Configuration

Create a `.env` file in the backend directory:

```env
PORT=7777
API_TOKEN=your_api_key_here

- [Node.js](https://nodejs.org) (v18+ recommended)
- [pnpm](https://pnpm.io) installed
- A Teamtailor API Key (Admin access required)

```
