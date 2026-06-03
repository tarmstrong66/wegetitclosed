# Design

## Color Palette

Strategy: **Committed** — deep American navy carries the primary surface, bold red drives all primary CTAs, clean white for content areas.

```
--color-navy:       oklch(22% 0.06 260);   /* Deep navy — primary background, nav */
--color-navy-mid:   oklch(30% 0.07 258);   /* Mid navy — section dividers, cards on dark bg */
--color-navy-light: oklch(40% 0.06 256);   /* Light navy — borders, dividers on dark */

--color-red:        oklch(52% 0.22 25);    /* American red — primary CTAs, active states */
--color-red-hover:  oklch(46% 0.22 25);    /* Red hover state */

--color-white:      oklch(98% 0.005 260);  /* Tinted white — body bg, card bg */
--color-off-white:  oklch(96% 0.006 260);  /* Section alternates */
--color-gray-subtle:oklch(92% 0.008 260);  /* Borders, dividers on light bg */
--color-gray-mid:   oklch(60% 0.01 260);   /* Muted body text, labels */
--color-gray-body:  oklch(25% 0.015 260);  /* Body text */

--color-gold:       oklch(78% 0.12 80);    /* Star ratings, trust accents only */
```

## Typography

Display/headings: **Playfair Display** (serif) — authority, tradition, gravitas on hero and section heads.
Body/UI: **Inter** (sans-serif) — clean, legible, trusted. Body, nav, labels, buttons, forms.

```
--font-display: 'Playfair Display', Georgia, serif;
--font-body:    'Inter', system-ui, sans-serif;

--text-xs:   0.75rem;    /* 12px — legal, footnotes */
--text-sm:   0.875rem;   /* 14px — labels, captions */
--text-base: 1rem;       /* 16px — body copy */
--text-lg:   1.125rem;   /* 18px — lead paragraphs */
--text-xl:   1.25rem;    /* 20px — card headings */
--text-2xl:  1.5rem;     /* 24px — section intros */
--text-3xl:  1.875rem;   /* 30px — section headings */
--text-4xl:  2.25rem;    /* 36px — H1 on interior pages */
--text-5xl:  3rem;       /* 48px — hero headings */
--text-6xl:  3.75rem;    /* 60px — hero display on desktop */
```

Line length cap: 68ch on body paragraphs.
Weight contrast: Display headings at 700, section headings 600, body 400, labels 500.

## Elevation & Depth

```
--shadow-sm:  0 1px 3px oklch(0% 0 0 / 0.08);
--shadow-md:  0 4px 12px oklch(0% 0 0 / 0.10);
--shadow-lg:  0 8px 24px oklch(0% 0 0 / 0.12);
--shadow-card:0 2px 8px oklch(22% 0.06 260 / 0.10);
```

## Spacing Scale

```
--space-1:  0.25rem;  --space-2:  0.5rem;
--space-3:  0.75rem;  --space-4:  1rem;
--space-6:  1.5rem;   --space-8:  2rem;
--space-10: 2.5rem;   --space-12: 3rem;
--space-16: 4rem;     --space-20: 5rem;
--space-24: 6rem;
```

## Border Radius

```
--radius-sm:  4px;
--radius-md:  8px;
--radius-lg:  12px;
--radius-xl:  16px;
--radius-pill:9999px;
```

## Components

### Buttons

**Primary (CTA):** Red background, white text, 500 weight, Inter. Padding 14px 28px. Radius-md. No outline, no side border.
**Secondary:** Navy border, navy text, transparent bg. Same sizing. Hover fills navy.
**Ghost:** White text on dark backgrounds, white border. For CTAs inside navy sections.

### Intent Cards

Grid of routing cards. Each: white bg, shadow-card, radius-lg, icon in navy circle, short title (Inter 600 18px), 1–2 line description (Inter 400 14px gray-mid), link arrow or "Learn More" in red. Hover: lift with shadow-lg and subtle border-red. NOT identical-height clones — let content breathe. No side-stripe borders.

### Trust Bar

Horizontal band (navy-mid bg) with: star rating + count, years experience, states served, "No Lender Fees on FHA/VA/USDA." White text, gold stars. Full width, no container constraint.

### State Cards (Areas We Serve)

White card, state name as display heading, short mortgage-focused description, red "View Mortgage Options" button. Photo or illustrated state icon optional.

### FAQ Accordion

Clean accordion: question in Inter 600 16px, navy text. Answer reveals on click. Plus/minus icon in red. Divider lines only — no side stripes, no boxed items.

### Navigation

Sticky header: white bg with subtle shadow-sm on scroll. Logo left, nav links center-right (Inter 500 15px, navy). "Apply Now" as red pill button. Mobile: hamburger opens full-screen navy drawer.

## Motion

Conservative. `prefers-reduced-motion` respected for all transitions.
- Page-load: no animation
- Hover states: 150ms ease-out opacity/transform
- Accordion expand: 200ms height ease-out
- Card hover lift: transform translateY(-2px) + shadow 200ms ease-out
- No bounce, no elastic, no parallax scroll effects

## Dark / Light Theme

**Theme decision:** Light theme for content areas (loan program pages, state pages, blog) for maximum readability. Dark navy theme for hero sections and CTA bands. Mixed per-section, not per-page toggle.

Scene: A borrower in a bright room during the day, comparing mortgage options on their phone between appointments. The light base is faster to scan, the navy sections create visual weight and urgency around CTAs.
