# Teamtailor API Data Exporter

A React + TypeScript application built with Vite that fetches candidate and application data from the [Teamtailor API](https://open.teamtailor.com), processes/merges the datasets, and enables exporting the final results to a CSV file.

## 🚀 Features

- **Data Integration**: Fetches and merges Candidates and Applications data.
- **Efficient State Management**: Uses **React Query (TanStack Query)** for caching, loading states, and error handling.
- **Secure API Access**: Environment variables management via **dotenv**.
- **CSV Export**: Custom utility to transform JSON objects into downloadable CSV files with Excel-friendly encoding (BOM).
- **Type Safety**: Fully written in **TypeScript** for robust development.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://reactjs.org)
- **Build Tool**: [Vite](https://vitejs.dev)
- **HTTP Client**: [Axios](https://axios-http.com)
- **Data Fetching**: [TanStack Query (React Query)](https://tanstack.com)
- **Language**: [TypeScript](https://www.typescriptlang.org)

## 📋 Prerequisites

Before running the project, ensure you have:
- Node.js (v16+ recommended)
- A Teamtailor API Key (Admin access required)

