# GitHub Workflows Finished Project

This project recreates the **Finished Project** from your screenshots for the GitHub Workflows lesson.

## Project structure

- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `app.js` - Express app entry point
- `data/database.js` - MongoDB Atlas connection
- `routes/events.js` - Events API routes
- `tests/events-api.spec.js` - Playwright API tests
- `playwright.config.js` - Playwright configuration
- `.gitignore` - ignored files
- `package.json` / `package-lock.json` - project metadata

## Required GitHub secrets

Add these secrets in your repository settings:

- `MONGODB_USERNAME`
- `MONGODB_PASSWORD`

## Environment variables used by workflow

- `MONGODB_DB_NAME`
- `MONGODB_CLUSTER_ADDRESS`
- `MONGODB_USERNAME`
- `MONGODB_PASSWORD`
- `PORT`

## Run locally

```bash
npm install
PORT=3000 npm start
npm test
```

## Notes

- The workflow is designed to run on pushes to `main` and `dev`.
- It uses MongoDB Atlas and Playwright API tests.
- This is recreated from the screenshots and kept very close to the displayed structure.
