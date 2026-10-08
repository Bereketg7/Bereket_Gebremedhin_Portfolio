# Customization Guide

Everything you need to change is marked **`[REPLACE`**. In VS Code press **Ctrl+Shift+F** (Cmd+Shift+F on Mac) and search `[REPLACE` to jump through all of them.

**Rules that keep the site fast and simple** (Lighthouse Performance 100 today; keep it that way):

- One page only (`index.html`). Navigation is `#anchor` links.
- One web font (Inter, weights 400 and 700).
- JavaScript only for the mobile menu and the dark/light toggle. No forms that submit, no filters, no animation libraries.
- Hover = colour change only. No scroll effects.
- Images as WebP, sized as listed in section 4.

**Where things live**

| File | What it controls |
|---|---|
| `index.html` | All text, links, images, icons and the order of sections |
| `css/style.css` | Everything visual. Section 1 at the top holds every color, the font, sizes and spacing for both themes |
| `js/main.js` | Mobile menu + dark/light toggle (nothing else) |

---

## 1. Your text (`index.html`)

| What | Where |
|---|---|
| Browser tab title, Google description | `<title>` and `<meta name="description">` in `<head>` |
| Live site address | `canonical`, `og:url`, `og:image` in `<head>`, plus `sitemap.xml` and `robots.txt` (`[REPLACE-site-name].netlify.app`) |
| Name in navbar | `.brand-name` |
| "Available" status | `.annunciator` in the navbar. Delete it if you're not job-hunting |
| Hero: name, title, statement, quick facts | `<section id="home">` |
| About text and "Flight log" facts | `<section id="about">` |
| **Jobs and achievements** | `<section id="experience">`. Each `<li class="route-item">` is one job, newest first. Replace the three `[REPLACE: Achievement …]` bullets with real results; numbers make them stronger ("supported 4 simulators at 98% availability") |
| Skills | `<section id="skills">`. Each `<li>` in a `.badge-list` is one skill |
| Projects | `<section id="projects">` (see section 5) |
| Degrees, licenses, training | `<section id="education">` |
| Email, LinkedIn, GitHub | `<section id="contact">`. The email appears **twice** on one line: in `href="mailto:…"` and in the visible text |

**Section labels.** Each section starts with a label like `<p class="waypoint-label label-mono">02 / Experience</p>`. If you add, remove or reorder sections, renumber them and update the navbar links.

**Add a job:** copy a whole `<li class="route-item">…</li>` block in Experience. Only the current job keeps `is-current` (filled amber diamond). Use `<time datetime="YYYY-MM">` for dates.

**Skill meters:** each skill card ends with 3 bars. `<i class="on"></i>` is filled, `<i></i>` is empty. As your web skills grow, fill another bar and update its `aria-label` ("Experience level: 2 of 3").

**Mark an item as done:** change `<li class="pending">` to `<li class="done">`, change the icon from `#i-hourglass-split` to `#i-check2-square`, and delete the `In progress` chip.

---

## 2. Icons

Icons are [Bootstrap Icons](https://icons.getbootstrap.com), embedded in `index.html` as an SVG "sprite" (the hidden `<svg>` block right after `<body>`). Only the 18 icons the page uses are included.

**Use an icon** that's already in the sprite:

```html
<svg class="bi" aria-hidden="true"><use href="#i-github"></use></svg>
```

**Add a new icon** (example: `bi-telephone`):

1. Open https://icons.getbootstrap.com/icons/telephone/ and copy the SVG code.
2. Keep only the `<path …/>` line(s).
3. Add them to the sprite in `index.html`:
   `<symbol id="i-telephone" viewBox="0 0 16 16"><path d="…"/></symbol>`
4. Use it with `<use href="#i-telephone">`.

---

## 3. Colors and font (`css/style.css`, section 1)

Dark mode (the default) is the `[data-bs-theme="dark"]` block; light mode is the `:root` block.

| Token | Used for |
|---|---|
| `--c-bg`, `--c-surface`, `--c-surface-2` | Page background, cards/navbar, alternate sections |
| `--c-border` / `--c-border-strong` | Decorative lines / outlines people must see (3:1 contrast) |
| `--c-text`, `--c-muted` | Main and secondary text |
| `--c-primary`, `--c-primary-hover` | The one accent (amber): buttons, markers |
| `--c-primary-text` | Amber used **as text** (darker in light mode so it stays readable) |
| `--c-on-primary` | Text on amber buttons |
| `--c-accent` | Links in text, timeline dates |
| `--c-success` | "Available" dot, completed checkmarks |

Check any new color at https://webaim.org/resources/contrastchecker/. Text needs 4.5:1, outlines 3:1.

**Font:** keep one Google Font with weights 400 and 700. To change it, replace the Google Fonts `<link>` in `index.html` (keep `&display=swap`) and update `--font-body`.

---

## 4. Images

All images are **WebP**. Replace each placeholder with a file of the **same name and size**; no code changes needed.

| File | Size (px) | Target weight | Notes |
|---|---|---|---|
| `assets/images/profile.webp` | 640 × 800 (4:5) | under 80 KB | Your portrait. Loads first (not lazy) |
| `assets/images/project-N-1200.webp` | 1200 × 675 (16:9) | under 120 KB | Project screenshot for desktops |
| `assets/images/project-N-600.webp` | 600 × 338 (16:9) | under 50 KB | **Same** screenshot, smaller, for phones |
| `assets/images/og-image.png` | 1200 × 630 | under 200 KB | Link preview on LinkedIn etc. (already has your name and title) |

**Make WebP files (free, in the browser):** open https://squoosh.app → drop your image → choose **WebP**, quality **75** → **Resize** to the width above → download and rename.

Write `alt` text that says what the picture shows, and keep the `width`/`height` attributes (they stop the page from jumping while images load).

---

## 5. Projects

There are three cards: this portfolio plus two course projects. For each course project:

1. Replace the name, one-line description, "Built with" and "Module" values.
2. Replace the **Live** link (e.g. its Netlify address) and the **Code** link (its GitHub repo). Delete the Live button if there's no live version.
3. Replace both screenshots: `project-2-1200.webp` / `project-2-600.webp` (and `project-3-…`).
4. Replace the image `alt` text and the two `aria-label` texts on the buttons.

**Add a project:** copy a whole `<div class="col-12 col-lg-4">…</div>` card block, change the figure number (`Fig. 04`), and add `project-4-1200.webp` + `project-4-600.webp`. Cards sit three per row on desktop.

---

## 6. Resume

Export `docs/RESUME.md` to PDF (instructions at the top of that file) and save it as `assets/resume/Bereket-Gebremedhin-Resume.pdf`, replacing the placeholder. Both resume links (hero and contact) point there.

---

## 7. Contact

The contact section is plain links, so nothing reloads the page:

- **Email:** `mailto:` link that opens the visitor's email app.
- **LinkedIn** and **GitHub:** open in a new tab.
- **Resume:** downloads the PDF.

If you later want a contact form, it needs either JavaScript (to send without leaving the page) or a redirect to a "thank you" page. Both break the current rules, so decide that first.

---

## 8. Default theme

Dark is the default for everyone. Visitors who click the toggle get light mode, and their choice is remembered. To change the default, edit the small `<script>` in `<head>`.

## 9. Motion

The only motion is hover colour changes (`--dur`, 0.15 s) and smooth scrolling to sections. Both switch off for visitors who turn on "Reduce motion" in their operating system. The mobile menu opens instantly.
