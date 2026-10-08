# Deployment Guide

The site is static (HTML + CSS + a little JS), so it hosts free on **Netlify** (recommended, what you're using) or GitHub Pages. Before deploying, go through **TESTING-CHECKLIST.md**.

---

## 1. Put the project on GitHub

1. Sign in at https://github.com and click **+ → New repository** (e.g. `portfolio`), **Public**, then **Create repository**.
2. Upload the files:
   - **No command line:** on the repo page click **uploading an existing file**, drag in the *contents* of the `portfolio` folder (so `index.html` is at the top level), and click **Commit changes**.
   - **With Git:**
     ```bash
     cd portfolio
     git init
     git add .
     git commit -m "Portfolio"
     git branch -M main
     git remote add origin https://github.com/USERNAME/portfolio.git
     git push -u origin main
     ```

## 2. Deploy on Netlify (recommended)

1. Sign in at https://app.netlify.com with your GitHub account.
2. **Add new site → Import an existing project → GitHub →** pick your repo.
3. Settings: **Build command:** leave empty. **Publish directory:** `.` (or leave empty).
4. Click **Deploy**. After a few seconds you get an address like `random-name-123.netlify.app`.
5. **Site configuration → Change site name** to something clean, e.g. `bereket-gebremedhin` → `bereket-gebremedhin.netlify.app`.
6. From now on, every push to `main` redeploys automatically.

**Quickest alternative:** in Netlify, **Sites → Deploy manually**, and drag the `portfolio` folder onto the drop zone.

## 3. Put your live address into the site

Replace `[REPLACE-site-name]` with your Netlify site name in:

- `index.html` → `canonical`, `og:url`, `og:image` (in `<head>`) and the "This portfolio" **Live** button
- `sitemap.xml` → `<loc>`
- `robots.txt` → `Sitemap:` line

Commit and push; Netlify redeploys.

---

## Alternative: GitHub Pages

1. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch **main**, folder **/ (root)**, **Save**.
2. Your site appears at `https://USERNAME.github.io/portfolio/` after a minute or two.
3. Use that address everywhere step 3 above says `[REPLACE-site-name].netlify.app`.

---

## Custom domain (optional, ~$10–15/year)

Buy a domain from any registrar (Namecheap, Cloudflare, Porkbun, etc.).

**Netlify:** **Domain management → Add a domain**, then either switch your registrar's nameservers to the ones Netlify shows (easiest) or add the DNS records Netlify lists. HTTPS is set up automatically.

**GitHub Pages:** **Settings → Pages → Custom domain**, then at your registrar add a `CNAME` record `www → USERNAME.github.io` and the four `A` records for `@` that GitHub lists in its docs (https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site). Tick **Enforce HTTPS** once DNS is working.

After switching domains, update the canonical URL, `og:url`, `og:image`, `sitemap.xml` and `robots.txt` again.

---

## After deploying

- Run **PageSpeed Insights** (https://pagespeed.web.dev) on your live URL: Performance should be 90+ on mobile.
- Submit `sitemap.xml` in **Google Search Console** (https://search.google.com/search-console).
- Check the link preview with LinkedIn's **Post Inspector** (https://www.linkedin.com/post-inspector/).
