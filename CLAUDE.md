\# CLAUDE.md

\#\# Project Type

This is an Astro marketing site for American Mortgage Services / We Get It Closed.

Website being rebuilt:

https://wegetitclosed.com/

Use Astro for the build:

https://astro.build

Research and install only the dependencies needed for a fast, modern, SEO-friendly mortgage marketing site.

\#\# Frontend Design

Use Impeccable for all UI and frontend decisions.

Run this first:

/teach-impeccable

Then use these as needed:

/audit  
/polish  
/clarify

Use Impeccable for layout, typography, spacing, mobile responsiveness, cards, buttons, trust sections, CTA sections, and final design polish.

\#\# Site Strategy

Build this as a modern multi-state mortgage authority site.

Approved structure:

\- 1 main set of loan program pages  
\- State landing pages for AL, FL, GA, LA, MI, and TN  
\- Intent-routing cards on each state page  
\- No duplicate loan program pages for every state  
\- No thin city-service pages

State pages route borrowers by goal.

Loan program pages explain the mortgage programs.

Blog posts support the state pages and program pages.

\#\# Mortgage Compliance Rules

Do not make risky or unsupported mortgage claims.

Do not say:

\- Guaranteed approval  
\- Guaranteed lowest rates  
\- Everyone qualifies  
\- No-cost loan  
\- Instant approval  
\- Close in X days guaranteed

Use safer wording:

\- May qualify  
\- Depending on your scenario  
\- Subject to credit, income, property, program, and lender guidelines  
\- Talk with a loan officer about your options  
\- Compare mortgage options based on your situation

\#\# SEO Rules

Optimize for Google search and AI answer engines.

Every major page should have:

\- SEO title  
\- Meta description  
\- H1  
\- Clear H2/H3 structure  
\- Internal links  
\- CTA  
\- FAQ section where useful  
\- Schema recommendation

Use clear, direct mortgage language.

Avoid thin, duplicated, city-swap, or state-swap content.

\#\# FAQ Style Rules

All FAQ sections on every page must use the flat divider style:

\- Bold question text (no box or card per item)  
\- Answer text directly below the question  
\- A thin horizontal rule separating each item  
\- No accordion chevrons, no collapsible behavior, no card borders  
\- All answers fully visible without any click or interaction

This is the only approved FAQ style. Do not use card-box, bordered, or accordion FAQ layouts anywhere on the site.

\#\# Loan Program Page FAQ Rules

Every loan program page must include a FAQ section with exactly 5 questions and answers.

Choose the top 5 highest-intent questions: the ones borrowers most commonly search for and that directly drive qualification or action decisions.

All FAQ answers must be fully visible without any click or interaction required. Do not use accordion or collapsible FAQ components on program pages. Pass alwaysOpen={true} to the FAQSection component via the faqAlwaysOpen prop in LoanProgramLayout.

\#\# Technical Rules

Build for:

\- Fast load times  
\- Clean Astro structure  
\- Mobile-first design  
\- Core Web Vitals  
\- Reusable components  
\- Clean navigation  
\- Sitemap  
\- Robots.txt  
\- Canonical tags  
\- Open Graph tags  
\- 404 page  
\- Redirect plan  
\- Accessible forms and buttons

\#\# Writing Style Rules

Never use em dashes (—) or en dashes (–) anywhere in the site. Not in page content, component text, meta descriptions, alt text, headings, or code comments. Use a hyphen (-), colon (:), or rewrite the sentence instead. This includes numeric ranges: write 25-30% not 25–30%.

\#\# Image Rules

Use Nano Banana Pro or the approved image generation tool for site images.

Export images as WebP.

Use descriptive file names and natural alt text.

Do not keyword stuff image alt text.

\#\# Reference Spec

The full project details live in:

mortgage-site-spec.md

Use that file for sitemap, page requirements, SEO notes, schema, image plan, redirects, and launch checklist.  
