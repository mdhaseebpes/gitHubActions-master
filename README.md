# GitHub Actions Workflows

This repository is a small React + Vite project used to practice GitHub Actions workflow features. The application code is intentionally simple; the main focus is the workflow examples in `.github/workflows`.

## Project Scripts

- `npm run dev` starts the Vite development server.
- `npm test` runs the Vitest test suite once.
- `npm run test:watch` runs Vitest in watch mode.
- `npm run build` creates a production build.
- `npm run lint` currently prints a placeholder lint message.

## Workflow Overview

- `.github/workflows/testDeploy.yml` runs a basic push/manual workflow that checks out the repository, installs Node.js, installs dependencies, runs tests, builds the app, and prints a deploy message.
- `.github/workflows/deployment.yml` demonstrates separate `test` and `deploy` jobs, with `deploy` depending on `test` via `needs`.
- `.github/workflows/events.yml` demonstrates pull request and manual triggers, prints GitHub event context, then installs dependencies and runs tests.
- `.github/workflows/cache.yml` demonstrates dependency caching with `actions/cache` and a local composite action from `.github/actions/cached-deps`.
- `.github/workflows/continue.yml` demonstrates `continue-on-error`, test report artifact upload, and a failure-reporting job.
- `.github/workflows/executionFlow.yml` demonstrates job dependencies, conditional artifact upload, and failure handling.
- `.github/workflows/environmentVariables.yml` demonstrates workflow, job, and step environment variables, plus repository secrets.
- `.github/workflows/matrix.yml` demonstrates a matrix strategy across Node.js versions and operating systems.
- `.github/workflows/uploadDownload.yml` demonstrates uploading build artifacts in one job and downloading them in a later job.
- `.github/workflows/reusable.yml` defines a reusable deployment workflow with inputs and outputs.
- `.github/workflows/use-reusable.yml` demonstrates calling the reusable workflow and reading its output.
- `.github/workflows/issues.yml` demonstrates the `issues` event by printing issue event details.
- `.github/workflows/label-issues.yml` listens for opened, edited, and reopened issues. If the issue title contains `bug`, it adds the `bug` label using `actions/github-script`.
- `.github/workflows/script-injection.yml` shows a safer way to use issue title data in a shell script by passing the title through an environment variable before checking whether it contains `bug`.

## Issue Workflow Notes

Issue-triggered workflows only run when the workflow file exists on the repository default branch, usually `main`. If these workflows are only present on a feature branch, creating or editing issues in GitHub will not trigger them.

For the issue label workflow to add labels, the workflow grants:

```yaml
permissions:
  issues: write
```

## Running Workflows

Most workflows can be triggered by pushing code to a matching branch or by using `workflow_dispatch` from the GitHub Actions tab. Issue workflows are triggered by creating, editing, or reopening issues in the repository after the workflow files have been merged into the default branch.
