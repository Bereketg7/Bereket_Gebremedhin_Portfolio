# Project Case Studies

Each case study follows **Problem → Approach → Tech → Challenges → Result**. Keep each one short: a recruiter should be able to read it in under a minute.

These cover the projects shown on the site: this portfolio (filled in) and your two course projects (templates). Only write what you actually did and can explain in an interview.

> **Confidentiality:** don't publish employer-proprietary code, data, screenshots or simulator details.

---

## 1. This Portfolio

**Role:** Designer & developer · **Links:** [Live](https://[REPLACE-site-name].netlify.app/) · [Code](https://github.com/[REPLACE-username]/[REPLACE-repo])

**Problem.** After 13+ years in avionics and full-flight simulator engineering, I needed one place that shows that experience to hiring managers and also shows my growing web development skills.

**Approach.** I planned a simple design system first ("Night Cockpit": a dark instrument-panel look with one amber accent), then built a single page that puts my simulator experience first and presents web development as a skill in progress.

**Tech.** HTML5, CSS3 (custom properties for colors, fonts and spacing), Bootstrap 5.3 CSS, Bootstrap Icons, one Google Font (Inter), about 60 lines of vanilla JavaScript for the mobile menu and dark/light toggle. Hosted on Netlify.

**Challenges.**
- **Contrast:** amber text is hard to read on light backgrounds, so light mode uses a darker amber for text. All color pairs pass WCAG AA.
- **Speed:** keeping the page small. One font with two weights, only the 18 icons used (an SVG sprite instead of the full icon font), WebP images in two sizes, and no JavaScript libraries.
- **No flash of the wrong theme:** a five-line script in `<head>` applies the saved theme before the page paints.

**Result.** Lighthouse: Performance 100, Accessibility 100, Best Practices 100 (measured before deployment with placeholder images). [REPLACE: re-run Lighthouse on the live site with your real images and update these numbers.]

---

## 2. [REPLACE: Course project 1 name]

**Role:** [REPLACE: e.g. Solo developer] · **Module:** [REPLACE: e.g. HTML5 & CSS3] · **Links:** [Live]([REPLACE]) · [Code]([REPLACE])

**Problem.** [REPLACE: What was the assignment, or what problem does the page solve?]

**Approach.** [REPLACE: How did you plan and build it? 1–2 sentences.]

**Tech.** [REPLACE: e.g. HTML5, CSS3 Flexbox/Grid]

**Challenges.** [REPLACE: One thing that was hard and how you solved it.]

**Result.** [REPLACE: What works now, what you learned, any feedback or score.]

---

## 3. [REPLACE: Course project 2 name]

**Role:** [REPLACE] · **Module:** [REPLACE: e.g. Bootstrap 5] · **Links:** [Live]([REPLACE]) · [Code]([REPLACE])

**Problem.** [REPLACE]

**Approach.** [REPLACE]

**Tech.** [REPLACE: e.g. HTML5, Bootstrap 5 grid and components]

**Challenges.** [REPLACE]

**Result.** [REPLACE]
