# MERN - Week 7 Deployment & DevOps Template

This repository contains a minimal MERN stack application prepared for deployment, CI/CD, and monitoring. Use this as the Week 7 assignment submission.

## Structure
See the repository tree in the assignment instructions. Backend in `backend/`, frontend in `frontend/`.

## Quick Start (Local)
### Backend
1. Copy `backend/.env.example` → `backend/.env` and set `MONGO_URI` if you have MongoDB.
2. `cd backend`
3. `npm install`
4. `npm run dev`

### Frontend
1. `cd frontend`
2. `npm install`
3. `npm run dev`

## Deploy
- Backend: Render, Railway, Heroku — set `MONGO_URI`, `JWT_SECRET`, `SENTRY_DSN` in the platform env UI.
- Frontend: Vercel or Netlify — set `VITE_API_URL` to your backend API base.

## CI/CD
- GitHub Actions workflows exist under `.github/workflows/` for backend & frontend builds.
- Add secrets in GitHub repo settings as needed.

## Monitoring
- Health endpoint: `/health`
- Sentry: add DSN to env vars for error tracking.
- Uptime: create a monitor for `/health`.

## Assignment Submission Checklist
- [ ] Backend deployed and accessible
- [ ] Frontend deployed and accessible
- [ ] GitHub Actions configured and passing
- [ ] README updated with deployed URLs
- [ ] Screenshots of CI runs included in README
