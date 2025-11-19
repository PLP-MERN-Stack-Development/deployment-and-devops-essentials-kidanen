# Sentry Setup (Backend)

1. Create a project at https://sentry.io and get DSN.
2. Add SENTRY_DSN to your production env vars.
3. The backend already initializes Sentry if SENTRY_DSN is present.

Example env:
SENTRY_DSN=https://<public>@sentry.io/<project>

Notes:
- For frontend setup, use @sentry/react and configure release/version.
- Use Sentry Alerts to notify via Slack/Email.
