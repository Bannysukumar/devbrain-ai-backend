<div align="center">

# 🚀 Devbrain AI Backend

**An Intelligent AI Assistant Powered by RAG Technology**

*Transform your documentation, GitHub issues, and READMEs into an intelligent knowledge base*

[![Python](https://img.shields.io/badge/Python-3.11+-blue.svg)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.114+-green.svg)](https://fastapi.tiangolo.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)](https://www.docker.com/)

[Documentation](https://docs.ragpi.io) • [API Reference](https://docs.ragpi.io/api) • [Contributing](CONTRIBUTING.md)

</div>

---

## ✨ Overview

**Ragpi** is an open-source, production-ready AI assistant that leverages Retrieval-Augmented Generation (RAG) to provide intelligent, context-aware answers from your documentation. Built with FastAPI and designed for scalability, Ragpi seamlessly integrates with multiple LLM providers and offers flexible deployment options.

### 🎯 What Makes Ragpi Special?

- **🧠 Agentic RAG System** - Dynamic document retrieval with intelligent context understanding
- **🔌 Multi-Provider Support** - Works with OpenAI, Ollama, Deepseek, and any OpenAI-compatible API
- **📦 Multiple Connectors** - Import from documentation sites, GitHub, REST APIs, and more
- **💬 Built-in Integrations** - Discord, Slack, and Web Widget support out of the box
- **🐳 Docker-Ready** - Deploy anywhere with containerized architecture
- **⚡ Production-Grade** - Built with FastAPI, Redis, Celery, and PostgreSQL

---

## 🎨 Key Features

| Feature | Description |
|---------|-------------|
| 📚 **Knowledge Base Builder** | Automatically builds searchable knowledge bases from docs, GitHub issues, and READMEs |
| 🤖 **Intelligent RAG** | Agentic system for dynamic document retrieval and context-aware responses |
| 🔌 **Provider Flexibility** | Supports OpenAI, Ollama, Deepseek & OpenAI-Compatible models |
| 💬 **Multi-Channel Support** | Discord and Slack integrations for seamless community support |
| 🌐 **Web Widget** | Embed the assistant directly into your website |
| 🚀 **API-First Design** | RESTful API with comprehensive documentation |
| 🐳 **Easy Deployment** | Docker Compose configurations for development and production |

---

## 🚀 Quick Start

### Prerequisites

- Python 3.11+
- Docker and Docker Compose (recommended)
- Redis (for caching and task queue)
- PostgreSQL with pgvector extension (optional, for vector storage)

### Installation

#### Using Docker (Recommended)

```bash
# Clone the repository
git clone <repository-url>
cd ragpi

# Start all services
docker-compose up -d

# The API will be available at http://localhost:8000
```

#### Manual Installation

```bash
# Install dependencies
poetry install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Run the application
poetry run uvicorn src.main:app --reload
```

---

## 📖 Usage Guide

### 1️⃣ Create a Source

Set up a knowledge source using one of the available connectors:

```bash
curl -X POST "http://localhost:8000/sources" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "my-documentation",
    "description": "Project documentation and guides",
    "connector": {
      "type": "sitemap",
      "sitemap_url": "https://docs.example.com/sitemap.xml"
    }
  }'
```

**Response:**
```json
{
  "id": "source-123",
  "name": "my-documentation",
  "status": "syncing",
  "created_at": "2024-01-15T10:00:00Z"
}
```

### 2️⃣ Monitor Synchronization

Track the sync progress through the tasks endpoint:

```bash
curl "http://localhost:8000/tasks/{task_id}"
```

**Response:**
```json
{
  "id": "task-456",
  "status": "completed",
  "source_id": "source-123",
  "documents_synced": 150,
  "progress": 100
}
```

### 3️⃣ Chat with Your Assistant

Query the AI assistant using your configured sources:

```bash
curl -X POST "http://localhost:8000/chat" \
  -H "Content-Type: application/json" \
  -d '{
    "sources": ["my-documentation"],
    "messages": [
      {
        "role": "user",
        "content": "How do I deploy this project to production?"
      }
    ]
  }'
```

**Response:**
```json
{
  "response": "To deploy the project to production, follow these steps:\n1. Set up your environment variables...",
  "sources_used": ["my-documentation"],
  "confidence": 0.95
}
```

---

## 🔌 Connectors

Ragpi supports multiple connector types for importing knowledge:

| Connector | Description | Use Case |
|-----------|-------------|----------|
| **🌐 Sitemap** | Crawls documentation websites via sitemap.xml | Documentation sites, blogs |
| **🐙 GitHub Issues** | Imports GitHub repository issues | Project Q&A, bug reports |
| **📄 GitHub README** | Extracts README files from repositories | Project documentation |
| **📑 GitHub PDF** | Processes PDF files from GitHub | Technical documentation |
| **🔗 REST API** | Fetches data from REST endpoints | Custom data sources |

📚 [Explore all connectors →](https://docs.ragpi.io/connectors)

---

## 🤖 LLM Providers

Configure your preferred LLM provider for generating responses:

| Provider | Status | Configuration |
|----------|--------|---------------|
| **OpenAI** | ✅ Default | API key required |
| **Ollama** | ✅ Supported | Local/remote instance |
| **Deepseek** | ✅ Supported | API key required |
| **OpenAI-Compatible** | ✅ Supported | Custom endpoint |

⚙️ [Configure providers →](https://docs.ragpi.io/providers/overview)

---

## 🔗 Integrations

### Discord Bot

Add Ragpi to your Discord server for community support:

```
/invite @RagpiBot
```

📖 [Discord Integration Guide →](https://docs.ragpi.io/integrations/discord)

### Slack App

Install the Slack app for team-wide AI assistance:

```
/slack install ragpi
```

📖 [Slack Integration Guide →](https://docs.ragpi.io/integrations/slack)

### Web Widget

Embed the assistant directly into your website:

```html
<script src="https://cdn.ragpi.io/widget.js"></script>
<div id="ragpi-widget"></div>
```

📖 [Web Widget Guide →](https://docs.ragpi.io/integrations/web-widget)

---

## 🏗️ Architecture

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│   FastAPI   │────▶│    Redis     │────▶│  PostgreSQL │
│   Server    │     │  (Cache/Queue)│     │  (Vector DB)│
└─────────────┘     └──────────────┘     └─────────────┘
       │                    │
       │                    │
       ▼                    ▼
┌─────────────┐     ┌──────────────┐
│   Celery    │     │   Connectors │
│   Workers   │     │   (Sync)     │
└─────────────┘     └──────────────┘
```

---

## 📁 Project Structure

```
ragpi/
├── src/
│   ├── chat/           # Chat endpoints and services
│   ├── connectors/     # Data source connectors
│   ├── document_store/ # Vector storage backends
│   ├── llm_providers/  # LLM provider integrations
│   ├── sources/        # Source management
│   └── tasks/          # Task tracking
├── tests/              # Test suite
├── docker-compose.yml  # Docker configuration
└── pyproject.toml      # Python dependencies
```

---

## 🧪 Development

### Running Tests

```bash
# Run all tests
poetry run pytest

# Run with coverage
poetry run pytest --cov=src --cov-report=html

# Run specific test file
poetry run pytest tests/unit/test_chat.py
```

### Code Quality

```bash
# Format code
poetry run ruff format .

# Lint code
poetry run ruff check .

# Type checking
poetry run mypy src
```

### Pre-commit Hooks

```bash
# Install pre-commit hooks
poetry run pre-commit install
```

---

## 🐳 Deployment

### Docker Compose (Production)

```bash
docker-compose -f docker-compose.prod.yml up -d
```

### AA Panel Deployment

See [DEPLOYMENT-AAPANEL.md](DEPLOYMENT-AAPANEL.md) for detailed instructions.

---

## 📚 Documentation

- 📖 [Full Documentation](https://docs.ragpi.io)
- 🔌 [API Reference](https://docs.ragpi.io/api)
- 🐙 [Connectors Guide](https://docs.ragpi.io/connectors)
- 🤖 [Providers Guide](https://docs.ragpi.io/providers/overview)
- 💬 [Integrations Guide](https://docs.ragpi.io/integrations)

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### How to Contribute

1. 🍴 Fork the repository
2. 🌿 Create a feature branch (`git checkout -b feature/amazing-feature`)
3. 💻 Make your changes
4. ✅ Run tests and ensure code quality
5. 📝 Commit your changes (`git commit -m 'Add amazing feature'`)
6. 🚀 Push to the branch (`git push origin feature/amazing-feature`)
7. 🔄 Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with [FastAPI](https://fastapi.tiangolo.com/)
- Vector storage powered by [pgvector](https://github.com/pgvector/pgvector)
- Task queue managed by [Celery](https://docs.celeryq.dev/)

---

<div align="center">

**Made with ❤️ by the Ragpi Team**

[⭐ Star us on GitHub](https://github.com/your-repo) • [📧 Report an Issue](https://github.com/your-repo/issues) • [💬 Join Discord](https://discord.gg/ragpi)

</div>
