# Ragpi

An open-source AI assistant that answers questions using your documentation. Ragpi enables you to build a RAG (Retrieval-Augmented Generation) system that can ingest content from various sources and provide intelligent answers based on your documents.

## Features

- 🔌 **Multiple Connectors**: Support for various data sources including:
  - Sitemap crawling
  - GitHub Issues
  - GitHub README files
  - GitHub PDF files
  - REST API endpoints

- 🧠 **RAG-Powered Chat**: Intelligent question-answering using retrieval-augmented generation
- 📊 **Flexible Storage**: Choose between PostgreSQL (with pgvector) or Redis for document storage
- ⚡ **Background Processing**: Asynchronous task processing with Celery
- 🔍 **Vector Search**: Semantic search capabilities with configurable embedding models
- 🔐 **API Key Authentication**: Secure API access
- 📈 **Observability**: Optional OpenTelemetry integration for monitoring
- 🐳 **Docker Support**: Easy deployment with Docker Compose

## Quick Start

### Prerequisites

- Python 3.11+
- Docker and Docker Compose
- Poetry (for dependency management)
- OpenAI API key (or compatible provider)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ragpi/ragpi.git
   cd ragpi
   ```

2. **Install dependencies**:
   ```bash
   poetry install
   ```

3. **Configure environment variables**:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your API keys:
   ```env
   OPENAI_API_KEY=sk-your-api-key-here
   RAGPI_API_KEY=your-secure-api-key
   ```

4. **Start services with Docker Compose**:
   ```bash
   docker compose up -d
   ```

   This starts:
   - Redis on port 6378
   - PostgreSQL with pgvector on port 5433
   - FastAPI application on port 8000
   - Celery worker for background tasks

5. **Access the API**:
   - API Documentation: http://localhost:8000/docs
   - Health Check: http://localhost:8000/healthcheck

## Usage

### Creating a Source

Add a data source to your Ragpi instance:

```bash
curl -X POST "http://localhost:8000/sources" \
  -H "X-API-Key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "my-docs",
    "connector_type": "sitemap",
    "connector_config": {
      "url": "https://example.com/sitemap.xml"
    }
  }'
```

### Chatting with Your Documents

Ask questions about your ingested documents:

```bash
curl -X POST "http://localhost:8000/chat" \
  -H "X-API-Key: your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "message": "What is the main feature of this project?",
    "source_names": ["my-docs"]
  }'
```

## Configuration

### Environment Variables

Key configuration options (see `src/config.py` for full list):

| Variable | Description | Default |
|----------|-------------|---------|
| `OPENAI_API_KEY` | OpenAI API key for chat and embeddings | Required |
| `RAGPI_API_KEY` | API key for securing your Ragpi instance | Optional |
| `REDIS_URL` | Redis connection URL | `redis://localhost:6379` |
| `POSTGRES_URL` | PostgreSQL connection URL | `postgresql://localhost:5432/ragpi` |
| `DOCUMENT_STORE_BACKEND` | Storage backend (`postgres` or `redis`) | `postgres` |
| `CHAT_PROVIDER` | LLM provider for chat | `openai` |
| `EMBEDDING_PROVIDER` | Provider for embeddings | `openai` |
| `DEFAULT_CHAT_MODEL` | Chat model to use | `gpt-4o` |
| `EMBEDDING_MODEL` | Embedding model to use | `text-embedding-3-small` |
| `CHUNK_SIZE` | Document chunk size | `512` |
| `CHUNK_OVERLAP` | Chunk overlap | `50` |
| `WORKERS_ENABLED` | Enable background workers | `true` |

### Supported LLM Providers

Ragpi supports multiple LLM providers:

- **OpenAI**: Default provider for chat and embeddings
- **Ollama**: Local LLM support
- **DeepSeek**: Alternative provider
- **OpenAI-Compatible APIs**: Use any OpenAI-compatible endpoint

See the [provider documentation](https://docs.ragpi.io/providers/overview) for configuration details.

## Connector Types

### Sitemap Connector

Crawl websites using their sitemap:

```json
{
  "name": "website-docs",
  "connector_type": "sitemap",
  "connector_config": {
    "url": "https://example.com/sitemap.xml"
  }
}
```

### GitHub Issues Connector

Ingest GitHub repository issues:

```json
{
  "name": "repo-issues",
  "connector_type": "github_issues",
  "connector_config": {
    "owner": "owner",
    "repo": "repository",
    "labels": ["documentation"]
  }
}
```

### GitHub README Connector

Extract README files from GitHub repositories:

```json
{
  "name": "repo-readme",
  "connector_type": "github_readme",
  "connector_config": {
    "owner": "owner",
    "repo": "repository"
  }
}
```

### GitHub PDF Connector

Extract PDF files from GitHub repositories:

```json
{
  "name": "repo-pdfs",
  "connector_type": "github_pdf",
  "connector_config": {
    "owner": "owner",
    "repo": "repository",
    "path": "docs"
  }
}
```

### REST API Connector

Ingest data from REST API endpoints:

```json
{
  "name": "api-docs",
  "connector_type": "rest_api",
  "connector_config": {
    "base_url": "https://api.example.com",
    "endpoints": ["/docs", "/api/v1/guides"]
  }
}
```

## API Endpoints

### Sources

- `GET /sources` - List all sources
- `POST /sources` - Create a new source
- `GET /sources/{source_name}` - Get source details
- `PUT /sources/{source_name}` - Update a source
- `DELETE /sources/{source_name}` - Delete a source
- `GET /sources/{source_name}/documents` - List documents in a source
- `GET /sources/{source_name}/search` - Search documents in a source

### Chat

- `POST /chat` - Send a chat message and get AI response

### Tasks

- `GET /tasks/{task_id}` - Get task status

### Health

- `GET /healthcheck` - Health check endpoint

See the interactive API documentation at `/docs` for detailed request/response schemas.

## Development

### Setup

1. **Install development dependencies**:
   ```bash
   poetry install
   poetry run pre-commit install
   ```

2. **Run tests**:
   ```bash
   poetry run pytest
   ```

3. **Run linting**:
   ```bash
   poetry run ruff check .
   poetry run mypy .
   ```

### Project Structure

```
ragpi/
├── src/
│   ├── chat/           # Chat service and endpoints
│   ├── connectors/     # Data source connectors
│   ├── document_store/ # Document storage backends
│   ├── sources/        # Source management
│   ├── tasks/          # Background task management
│   ├── llm_providers/  # LLM provider integrations
│   └── main.py         # FastAPI application
├── tests/              # Test suite
├── docker-compose.yml  # Development Docker setup
└── pyproject.toml      # Project dependencies
```

## Deployment

### Production Deployment

For production deployments, use the production Docker Compose file:

```bash
docker compose -f docker-compose.prod.yml up -d
```

### aaPanel Deployment

See [DEPLOYMENT-AAPANEL.md](DEPLOYMENT-AAPANEL.md) for detailed instructions on deploying to aaPanel servers.

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:

- Reporting bugs
- Suggesting features
- Submitting pull requests
- Development setup

## License

This project is licensed under the MIT License.

## Version

Current version: **v0.3.x**

## Documentation

For more detailed documentation, visit [https://docs.ragpi.io](https://docs.ragpi.io)

## Support

- GitHub Issues: [https://github.com/ragpi/ragpi/issues](https://github.com/ragpi/ragpi/issues)
- Documentation: [https://docs.ragpi.io](https://docs.ragpi.io)

---

Built with ❤️ using FastAPI, PostgreSQL, Redis, and modern AI technologies.

