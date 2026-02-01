# Deploy Ragpi on aaPanel (Linux)

Follow these steps on your server after cloning the repo to `/www/wwwroot/malaysiantradenets.com/ragpi`.

## 1. Install Docker and Docker Compose

On your aaPanel server:

- **Option A – aaPanel App Store:** Install **Docker** and **Docker Compose** from the App Store if available.
- **Option B – Command line:**

```bash
# Install Docker (Ubuntu/Debian)
curl -fsSL https://get.docker.com | sh
systemctl enable docker && systemctl start docker

# Install Docker Compose plugin
apt-get update && apt-get install -y docker-compose-plugin
```

Verify:

```bash
docker --version
docker compose version
```

## 2. Create environment file

```bash
cd /www/wwwroot/malaysiantradenets.com/ragpi

cp .env.example .env
nano .env   # or use aaPanel File Manager to edit
```

Set at least your OpenAI API key (required for chat and embeddings):

```env
OPENAI_API_KEY=sk-your-actual-openai-api-key
```

If port **8000** is already in use on the server, add (use another free port if 8001 is taken):

```env
DOCKER_API_PORT_MAPPING=127.0.0.1:8001:8000
```

Then point your reverse proxy to `http://127.0.0.1:8001` instead of 8000.

Optional (recommended for production):

```env
POSTGRES_USER=postgres
POSTGRES_PASSWORD=your-strong-password
POSTGRES_DB=ragpi
```

If you use GitHub connectors, add:

```env
GITHUB_TOKEN=your-github-personal-access-token
```

Save and exit (`Ctrl+O`, `Enter`, `Ctrl+X` in nano).

## 3. Start Ragpi with Docker Compose

From the project directory:

**If ports 6379 or 5432 are already in use** (common on aaPanel), use the **standalone** aaPanel compose file (Redis and Postgres are not exposed on the host; API defaults to 8001):

```bash
cd /www/wwwroot/malaysiantradenets.com/ragpi

docker compose -f docker-compose.aapanel.yml up -d
```

Otherwise:

```bash
docker compose -f docker-compose.prod.yml up -d
```

This starts:

- **Redis** (port 6379, localhost only)
- **PostgreSQL** with pgvector (port 5432, localhost only)
- **Ragpi API** (port 8000, localhost only)
- **Task worker** (Celery) for syncing sources

Check that all containers are running (use the same compose file as above):

```bash
docker compose -f docker-compose.aapanel.yml ps
```

You should see `redis`, `postgres`, `api`, and `task-worker` with status “Up”.

## 4. Expose the API with aaPanel (Nginx reverse proxy)

1. In **aaPanel**, go to **Website** and open the site **malaysiantradenets.com** (or add it if needed).
2. Go to **Settings** → **Reverse proxy** (or **Proxy**).
3. Add a reverse proxy:
   - **Proxy name:** e.g. `Ragpi API`
   - **Target URL:** `http://127.0.0.1:8000`
   - **Send domain:** usually leave as default (your domain)
4. If you want the API under a path (e.g. `https://malaysiantradenets.com/ragpi/`), set:
   - **Proxy directory:** `/ragpi`
   - **Target URL:** `http://127.0.0.1:8000`
   - Then in Ragpi you may need to set a base path (see docs).

Alternatively, use a subdomain (e.g. `api.malaysiantradenets.com`) and point it to `http://127.0.0.1:8000`.

5. Enable **SSL** in aaPanel for the site/subdomain if you use HTTPS.

## 5. Test the deployment

```bash
# From the server (using the aaPanel port 8001)
curl http://127.0.0.1:8001/healthcheck
```

Or in a browser: `https://malaysiantradenets.com/healthcheck` (or the path you configured).

You should get a healthy response. Then:

- **API docs:** `https://malaysiantradenets.com/docs` (or your base URL + `/docs`)
- Create sources and chat via the API or the docs UI.

## 6. Useful commands

| Task              | Command                                                                 |
|-------------------|-------------------------------------------------------------------------|
| View logs         | `docker compose -f docker-compose.aapanel.yml logs -f`                  |
| API logs only     | `docker compose -f docker-compose.aapanel.yml logs -f api`             |
| Stop all          | `docker compose -f docker-compose.aapanel.yml down`                   |
| Restart API       | `docker compose -f docker-compose.aapanel.yml restart api`             |
| Update and restart| `git pull && docker compose -f docker-compose.aapanel.yml pull && docker compose -f docker-compose.aapanel.yml up -d` |

## 7. Optional: Discord / Slack / reCAPTCHA

To run Discord, Slack, or reCAPTCHA gateway with the aaPanel stack, use profiles:

```bash
# With Discord
docker compose -f docker-compose.aapanel.yml --profile discord up -d

# With Slack
docker compose -f docker-compose.aapanel.yml --profile slack up -d

# With reCAPTCHA gateway (e.g. for web widget; host port 8002)
docker compose -f docker-compose.aapanel.yml --profile recaptcha-gateway up -d
```

Add the required env vars in `.env` as per [Ragpi docs](https://docs.ragpi.io).

## Troubleshooting

- **API not reachable:** Ensure Nginx reverse proxy target is `http://127.0.0.1:8001` and that the `api` container is running (`docker compose -f docker-compose.aapanel.yml ps`).
- **502 Bad Gateway:** Start Ragpi first (see step 3 above), then configure the reverse proxy.
- **Sync or tasks failing:** Check `docker compose -f docker-compose.aapanel.yml logs task-worker` and that `OPENAI_API_KEY` (and `GITHUB_TOKEN` if used) are set in `.env`.
- **Port already in use (8000, 6379, 5432):** Use the standalone `docker-compose.aapanel.yml` (API on 8001 by default); point Nginx to `http://127.0.0.1:8001`.

For more details see [Ragpi documentation](https://docs.ragpi.io).
