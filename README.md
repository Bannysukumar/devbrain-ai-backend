# Ragpi

An open-source AI assistant that answers questions using your documentation. Ragpi enables you to build a RAG (Retrieval-Augmented Generation) system that can ingest content from various sources and provide intelligent answers based on your documents.

[![License](https://img.shields.io/github/license/Bannysukumar/devbrain-ai-backend)](https://github.com/Bannysukumar/devbrain-ai-backend/blob/main/LICENSE) [![Stars](https://img.shields.io/github/stars/Bannysukumar/devbrain-ai-backend)](https://github.com/Bannysukumar/devbrain-ai-backend/stargazers) [![Last commit](https://img.shields.io/github/last-commit/Bannysukumar/devbrain-ai-backend)](https://github.com/Bannysukumar/devbrain-ai-backend/commits/main) [![Build](https://img.shields.io/github/actions/workflow/status/Bannysukumar/devbrain-ai-backend/ci.yml)](https://github.com/Bannysukumar/devbrain-ai-backend/actions)

## Overview

An open-source AI assistant that answers questions using your documentation. Ragpi enables you to build a RAG (Retrieval-Augmented Generation) system that can ingest content from various sources and provide intelligent answers based on your documents.


What is actually in the repository: `.github/`, `New folder (22)/`, `ece fest/`, `ragpi/`, `src/`, `tests/`. GitHub reports the primary language as Python.

## Features


- 🔌 Multiple Connectors: Support for various data sources including:
- 🧠 RAG-Powered Chat: Intelligent question-answering using retrieval-augmented generation
- 📊 Flexible Storage: Choose between PostgreSQL (with pgvector) or Redis for document storage
- ⚡ Background Processing: Asynchronous task processing with Celery
- 🔍 Vector Search: Semantic search capabilities with configurable embedding models
- 🔐 API Key Authentication: Secure API access
- 📈 Observability: Optional OpenTelemetry integration for monitoring
- 🐳 Docker Support: Easy deployment with Docker Compose
- Admin Page
- App Dashboard Page
- Login Page
- Register Page

## Tech Stack

| Technology | Where it shows up |
|---|---|
| React | User interface |
| Vite | Frontend build tool |
| Firebase | Backend services used by this repository |
| Python | Application or script code |
| Tailwind CSS | Styling |

## Project Structure

```text
devbrain-ai-backend/
├── .github/
├── New folder (22)/
├── ece fest/
├── ragpi/
├── src/
├── tests/
├── .env.example
├── .pre-commit-config.yaml
├── DEPLOYMENT-AAPANEL.md
├── Dockerfile
├── VERIFICATION-REPORT.md
├── docker-compose.aapanel.yml
├── docker-compose.prod.yml
├── docker-compose.yml
├── pyproject.toml
```

## Getting Started

```bash
git clone https://github.com/Bannysukumar/devbrain-ai-backend.git
cd devbrain-ai-backend
# Copy .env.example to .env and fill in the values that file lists.
```

Scripts defined in package.json:

- `npm run dev` — `vite`
- `npm run build` — `tsc -b && vite build`
- `npm run lint` — `eslint .`

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## License

Licensed under MIT. See [LICENSE](LICENSE).

## Author

[Banny Sukumar](https://github.com/Bannysukumar)

- GitHub: [@Bannysukumar](https://github.com/Bannysukumar)
- Portfolio: [adepu-sukumar.vercel.app](https://adepu-sukumar.vercel.app/)
- LinkedIn: [Adepu Sukumar](https://www.linkedin.com/in/adepu-sukumar-59b423351)
