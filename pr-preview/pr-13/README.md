# REST Super Member Portal — POC Demo

A static HTML/CSS/JS proof-of-concept for a superannuation member portal. No backend, no build step, no external dependencies. Designed to deploy to GitHub Pages as-is.

## Login credentials

- Email: `sarah.chen@restsuper.com.au`
- Password: `Demo2026!`

Any other combination shows an inline error. There is no session — direct navigation to the inner pages is intentionally allowed for this POC.

## Pages

- `index.html` — Login
- `dashboard.html` — Member dashboard with balance
- `contribution.html` — Make a contribution form
- `transactions.html` — Transaction history table
- `member-details.html` — Update member details form

## View locally

Open `index.html` directly in a browser — no server required.

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository (e.g. `main` branch root).
2. In the repo settings, open **Pages**.
3. Set **Source** to **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Save. GitHub will publish the site at `https://<user>.github.io/<repo>/`.

## Notes

This is a demo only. Member data is hardcoded, forms only display inline confirmation, and credentials are not securely handled. Do not use as a template for production.
