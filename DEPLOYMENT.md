# MIHORA.TECH — Deployment Guide for sessions.study.mihora.tech

This platform is configured for automatic, 1-click CI/CD deployment to **`sessions.study.mihora.tech`**.

---

## 1. Automated GitHub Actions Deployment (Default)

Whenever you push to the `main` branch of `spideraneesf-bit/session1`:

1. GitHub Actions automatically executes `.github/workflows/deploy.yml`.
2. It builds the production assets via `npm run build`.
3. It bundles the `public/CNAME` pointing to `sessions.study.mihora.tech`.
4. It publishes the site directly to GitHub Pages with SSL enabled.

### Required DNS Setting in Cloudflare or Domain Registrar
Add this DNS record to `mihora.tech`:

| Type | Name / Subdomain | Target / Content | Proxy Status |
|------|-------------------|------------------|--------------|
| **CNAME** | `sessions.study` | `spideraneesf-bit.github.io` | DNS Only (or Proxied) |

---

## 2. Vercel or Cloudflare Pages 1-Click Deployment (Alternative)

If deploying via Vercel or Cloudflare Pages:
- Build command: `npm run build`
- Output directory: `dist`
- Custom domain: Add `sessions.study.mihora.tech` in the Project Settings -> Domains.
