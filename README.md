# Teamtailor API Data Exporter

A React + TypeScript application built with Vite that fetches candidate and application data from the [Teamtailor API](https://open.teamtailor.com), processes/merges the datasets, and enables exporting the final results to a CSV file.

## 🚀 Features

- **Data Integration**: Fetches and merges Candidates and Applications data using relational mapping.
- **Efficient State Management**: Uses **React Query (TanStack Query)** for optimized caching, loading states, and error handling.
- **Vite Native Env**: Secure API access management using Vite's built-in environment variable handling.
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

Before running the project, ensure you have:

- [Node.js](https://nodejs.org) (v18+ recommended)
- [pnpm](https://pnpm.io) installed
- A Teamtailor API Key (Admin access required)

## ⚙️ Configuration

Create a `.env` file in the root directory. You can use the provided `.env.example` as a template:
