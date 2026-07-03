# Soulamica — React + TypeScript rebuild

A from-scratch rebuild of soulamica.com in React + TypeScript. Login and the
booking calendar have been removed; every "Book Now" button opens an
animated contact panel with your phone number, WhatsApp, email, and social
links instead. The homepage is a single smooth-scrolling page, plus real
dedicated pages for About, Blog, and the four legal documents.

## Getting started

```bash
npm install
npm run dev       # starts a local dev server, usually at http://localhost:5173
npm run build     # type-checks and builds a production bundle to /dist
npm run preview   # serves the production build locally
```

Requires Node 18+.

## Pages & routing

This uses a tiny built-in hash router (`useRoute` / `useRouteScroll` in
`hooks.ts`) instead of adding react-router-dom as a dependency — no extra
package, and it behaves identically in this project and in Claude's live
preview artifact.

| Page | Route |
|---|---|
| Home | `#/` |
| About | `#/about` |
| Blog index | `#/blog` |
| Blog post | `#/blog/:id` (e.g. `#/blog/promoting-wellness`) |
| Terms & Conditions | `#/terms` |
| Privacy Policy | `#/privacy` |
| Refund Policy | `#/refund-policy` |
| Accessibility Statement | `#/accessibility` |

`#welcome` and `#services` remain same-page scroll anchors on the homepage
(clicking them from another page navigates home first, then scrolls there).

## Project structure

```
public/
  logo.svg                     Logo mark used via <img> in nav/footer/welcome
  portrait-placeholder.svg      Illustrated stand-in for the About photo
  hero-photo.jpg                 Real photo — hero section background
  card-wellness.jpg               Real photo — "Promoting Wellness" blog card
  card-therapy.jpg                 Duotone of the same photo — other blog cards
  card-resilience.jpg
  services-bg.jpg                    Blurred version — ambient Services backdrop
src/
  App.tsx              The router — picks a page based on the URL hash
  data.ts               All editable content: nav, services, blog posts, bio,
                         contact info, social links, image paths, legal text
  types.ts               Shared TypeScript types
  hooks.ts                Scroll-reveal, scrollspy, count-up, clipboard,
                           body-lock, tilt, magnetic-button, parallax,
                           scroll-progress, and the hash router
  icons.tsx                 Hand-drawn social icons (Instagram / Facebook /
                             LinkedIn / WhatsApp)
  styles.css                  Design tokens (colors/type/spacing) + all styles
  components/
    Navbar.tsx           Route-aware nav: highlights by page or scroll position
    HomePage.tsx           Composes the homepage sections below
    Hero.tsx                 Staggered load-in, magnetic CTA, parallax photo
    Welcome.tsx                Manifesto section
    Services.tsx                 Pricing cards with cursor-tilt
    About.tsx                      Homepage bio preview → links to /about
    Insights.tsx                     Blog teasers → link to /blog
    ClosingCta.tsx                     Reused at the bottom of every page
    PageHeader.tsx                       Shared header for About/Blog/Legal
    AboutPage.tsx                          Full bio, portrait, stats
    BlogIndexPage.tsx                        All posts
    BlogPostPage.tsx                           One post + "more posts"
    LegalPage.tsx                                Renders any doc from
                                                  LEGAL_DOCS, with a table
                                                  of contents and a crisis-
                                                  resources callout on Terms
    NotFoundPage.tsx                               Friendly 404
    ContactModal.tsx                                 The "Book Now" destination
    Footer.tsx                                         Footer + newsletter
```

## Things to customize before launch

1. **Phone, email, WhatsApp** — all live in `src/data.ts` under `CONTACT`.
2. **Social links** — `SOCIAL_LINKS` in `data.ts`, already pointed at the
   real profiles you gave me (Instagram, Facebook, LinkedIn).
3. **Logo & portrait** — real files in `public/`: `logo.svg` and
   `portrait-placeholder.svg` (swap the latter for an actual photo whenever
   you have one, and update `PORTRAIT_SRC` in `data.ts` to match).
4. **Photography** — hero, blog cards, and the Services backdrop all use
   the photo you uploaded. Add more photos as you get them by replacing
   files in `public/` and the `image` field on each `BLOG_POSTS` entry.
5. **Blog post content** — `BLOG_POSTS` in `data.ts` currently uses the
   same short excerpt as both the homepage teaser and the full post body
   on `BlogPostPage`, since that's the only copy I had for these posts.
   Add a `content` string (or array of paragraphs) per post and update
   `BlogPostPage.tsx` to render it once you have the real article text.
6. **Legal pages — please read this one.** `LEGAL_DOCS` in `data.ts` is
   genuinely usable starter content, written specifically for Soulamica —
   but it is **not legal advice**, and I'm not a lawyer. A few sentences
   are explicitly marked `[Placeholder — ...]` (cancellation notice
   windows, refund processing time, governing-state jurisdiction) because
   those depend on decisions only you can make. Search each doc for
   "Placeholder", fill in your real numbers, and have someone qualified
   review all four pages before you rely on them.
7. **Crisis resources** — `CRISIS_RESOURCES` in `data.ts` lists Tele-MANAS
   (14416) and KIRAN (1800-599-0019), India's national mental-health
   helplines, shown on the Terms page. Verified as current, but double
   check before publishing since these things can change.
8. **Newsletter form** — the footer signup validates an email and shows a
   success state, but isn't wired to an email provider yet. Swap the
   `handleSubmit` function in `Footer.tsx` for a real API call (Mailchimp,
   Beehiiv, etc.) when you're ready.

## Design notes

- No login, no booking calendar: "Book Now" anywhere on the site opens a
  contact panel (`ContactModal.tsx`) with a call button, WhatsApp, email,
  and social links, and remembers which service you clicked from.
- A thin scroll-progress bar tracks reading position at the very top of
  the page.
- The hero photo drifts gently with the cursor (parallax) behind a
  gradient scrim that keeps the headline readable.
- Service and blog cards tilt subtly toward the cursor in 3D — driven by
  CSS custom properties so it never triggers a React re-render.
- Legal pages get a sticky "on this page" table of contents on desktop.
- Type: [Fraunces](https://fonts.google.com/specimen/Fraunces) for display
  headings, [Manrope](https://fonts.google.com/specimen/Manrope) for body
  text, loaded via Google Fonts in `index.html`.
- Respects `prefers-reduced-motion` throughout.
