# Testing Checklist

Tick each box before you share your link. Re-run after big changes.

## 0. Placeholders
- [ ] Searched the whole project for `[REPLACE` — zero results left in `index.html`, `sitemap.xml` and `robots.txt`
- [ ] Real achievements under both jobs in Experience (numbers you can back up in an interview)
- [ ] Real resume PDF at `assets/resume/Bereket-Gebremedhin-Resume.pdf`; both resume links download it
- [ ] Real portrait and project screenshots in place, each with meaningful `alt` text

## 1. Single page
- [ ] `index.html` is the only HTML file in the project
- [ ] Every navbar link scrolls to its section on the same page (About, Experience, Skills, Projects, Education, Contact)
- [ ] "View experience" and "Back to top" scroll on the same page
- [ ] Nothing reloads the page (there is no form)

## 2. Responsiveness
Chrome DevTools → Toggle device toolbar (Ctrl+Shift+M / Cmd+Shift+M).
- [ ] 375 px phone: no sideways scrolling, full name fits in the navbar, buttons easy to tap
- [ ] 768 px tablet: contact links 2 per row, timeline dates on the left
- [ ] 1280 px desktop: skills and projects 3 per row
- [ ] Menu button opens and closes the menu; tapping a link closes it; Esc closes it
- [ ] Zoom the browser to 200%: nothing overlaps or gets cut off
- [ ] Test on at least one real phone

## 3. Browsers
- [ ] Chrome · Firefox · Safari (Mac and iPhone) · Edge · Chrome on Android

## 4. Accessibility
- [ ] **Lighthouse** (DevTools → Lighthouse → Mobile): Accessibility ≥ 95 (currently 100)
- [ ] **WAVE** (https://wave.webaim.org): 0 errors, 0 contrast errors — in dark mode **and** after switching to light
- [ ] **Keyboard only:** first Tab shows "Skip to main content"; every link/button gets a visible amber outline; order is logical
- [ ] Theme toggle works with Enter/Space and its label changes ("Switch to light/dark mode")
- [ ] OS "Reduce motion" on (Windows: Settings → Accessibility → Visual effects → Animation effects off; Mac: Accessibility → Display → Reduce motion): no smooth scrolling, no transitions
- [ ] Optional: a screen reader (NVDA or VoiceOver) reads headings in order and image alt text

## 5. Performance (re-check after adding your real images)
- [ ] Lighthouse **Performance ≥ 90** on Mobile (the placeholder build scores 100)
- [ ] Largest Contentful Paint under 2.5 s on Mobile, under 1 s on Desktop
- [ ] Total transfer under ~350 KB (DevTools → Network → bottom bar, "transferred")
- [ ] Only these external files load: Bootstrap 5.3.3 CSS and Google Fonts (Inter 400/700). No Bootstrap JS, no icon font, no other libraries
- [ ] Every image is WebP and within the size targets in the customization guide

## 6. SEO & sharing
- [ ] Canonical URL, `og:url`, `og:image` point to your live Netlify address
- [ ] `https://YOURSITE/sitemap.xml` and `https://YOURSITE/robots.txt` load
- [ ] Lighthouse SEO = 100
- [ ] Share preview looks right in LinkedIn Post Inspector (https://www.linkedin.com/post-inspector/)

## 7. Links
- [ ] Email link opens your email app with the right address
- [ ] LinkedIn and GitHub links open your profiles in a new tab
- [ ] Every project's Live and Code buttons open the right page (no 404s); delete Live buttons for projects without a live version

## 8. Theme
- [ ] Site opens in dark mode on first visit
- [ ] Toggle switches dark ↔ light; reload keeps your choice; no flash of the wrong theme

## 9. Code quality
- [ ] HTML validates: https://validator.w3.org
- [ ] CSS validates: https://jigsaw.w3.org/css-validator/
- [ ] DevTools Console shows no red errors
- [ ] Final proofread: spelling, dates, job titles exactly as on your resume
