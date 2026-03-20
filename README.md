# ProComm Literary Site

Frontend: React + Vite

Backend: Express + MySQL

Deployment target: Netlify (frontend + backend via Netlify Functions)

## Local Development

1. Install frontend dependencies:

```bash
npm install
```

2. Install backend dependencies (server folder):

```bash
cd server
npm install
```

3. Start backend:

```bash
cd server
npm run dev
```

4. Start frontend in another terminal:

```bash
npm run dev
```

By default, frontend uses `http://localhost:5000` in development.

## Netlify Full-Stack Deployment

This repository now includes:

- `netlify.toml` for build + redirects
- `netlify/functions/api.js` as the serverless backend entry point

### 1. Push to GitHub

Push this project to a GitHub repository.

### 2. Create Netlify Site

1. Netlify Dashboard -> Add new site -> Import from Git
2. Select this repository
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

These values are already present in `netlify.toml`, so Netlify can auto-detect them.

### 3. Set Environment Variables in Netlify

**IMPORTANT:** Environment variables must be set in Netlify Site Settings, NOT as a `.env` file in the repository.

Steps:
1. Go to your Netlify Site Dashboard
2. Click **Site settings** (top-right)
3. Go to **Build & deploy** → **Environment**
4. Click **Edit variables**
5. Add each variable:

| Variable | Example | Required |
|----------|---------|----------|
| `DB_HOST` | `mysql.example.com` | Yes |
| `DB_USER` | `procomm_user` | Yes |
| `DB_PASSWORD` | `your_mysql_password` | Yes |
| `DB_NAME` | `procomm_literary` | Yes |
| `JWT_SECRET` | `random_string_here` | Yes |
| `ADMIN_PASSWORD` | `admin_password_123` | Yes |
| `VITE_API_BASE_URL` | Leave empty | No |

**Note:** Do NOT include `.env` file in Git. The `.gitignore` already excludes `*.env` files for security. Your MySQL credentials should ONLY be stored in Netlify's environment variables, not in version control.

For Netlify full-stack deployment, keep `VITE_API_BASE_URL` empty or unset so frontend calls `/api/*` on the same domain.

### 4. Use a Cloud MySQL Database

Netlify Functions cannot access your local MySQL instance. Use a hosted MySQL DB (for example: Aiven, Railway MySQL, PlanetScale, or your cloud VM MySQL) and set its connection values in Netlify env vars.

### 5. Deploy

Trigger deploy from Netlify UI or by pushing commits. After deploy:

- Frontend served from Netlify static hosting
- Backend served from Netlify Function at `/api/*`

## API Routing

`netlify.toml` rewrites:

- `/api/*` -> `/.netlify/functions/api/:splat`
- `/*` -> `/index.html` (for React Router SPA routes)

## Notes

- `server/server.js` now starts the HTTP listener only when run directly, so it works both for local server mode and serverless import mode.
- Admin and registration pages now use environment-aware API base URLs.

## Troubleshooting

### Backend not running on Netlify

**Problem:** API calls return 404 or functions don't execute.

**Solutions:**

1. **Verify environment variables are set** (most common issue)
   - Check Netlify deploy logs: Site settings → Deploys → View deploy log
   - Look for environment variable section in the logs
   - Ensure ALL 6 required variables are present

2. **Check MySQL database connectivity**
   - Verify `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` are correct
   - Ensure your cloud MySQL is publicly accessible (if applicable)
   - Test MySQL connection string locally first

3. **Redeploy after setting environment variables**
   - After adding env vars, manually trigger a new deploy in Netlify UI
   - Or push a new commit to GitHub to trigger auto-deploy
   - **Do NOT rely on old cache; always redeploy after changing env vars**

4. **Check Netlify Function logs**
   - Netlify UI → Functions → api → Logs tab
   - Look for error messages about missing environment variables

5. **Verify backend files are bundled**
   - The `server/` folder should be included in the build
   - Check that `npm run build` completes successfully locally
   - Verify `netlify/functions/api.js` can import from `../../server/server.js`

6. **Use a cloud MySQL database**
   - Netlify Functions cannot access `localhost:5000` or local MySQL
   - Must use a hosted database like:
     - [Railway](https://railway.app/) (free tier available)
     - [PlanetScale](https://planetscale.com/) (free MySQL)
     - [Aiven](https://aiven.io/) (free PostgreSQL/MySQL trial)
     - [AWS RDS](https://aws.amazon.com/rds/) or similar cloud service
