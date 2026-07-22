# Krishnaveni Developer Hub OS Migration Plan

## Goal
Transform the current portfolio into a recruiter-focused, dynamic “Developer Hub OS” that highlights Krishnaveni Mudaliyar as a Microsoft Dynamics 365 Business Central developer, full-stack engineer, and technical consultant.

## Strategy
This repository already has a strong foundation because it is already structured around JSON-driven content and modular JavaScript. Instead of replacing everything, the migration should evolve the current architecture into a more product-like experience.

## 1. Keep / Replace / Add

### Keep
- The current single-page portfolio shell in [index.html](../index.html)
- The modular CSS structure under [assets/css](../assets/css)
- The modular JS structure under [assets/js](../assets/js)
- The content-driven JSON model in [assets/data](../assets/data)
- The existing portfolio sections: hero, about, experience, skills, projects, education, blog, contact

### Replace
- The current hero experience with a stronger “Developer Hub OS” landing experience
- The current project presentation with a more recruiter-oriented business-case format
- The current blog section with a “Knowledge Center” / “Learning & insights” section
- The generic contact section with a hiring-focused experience panel

### Add
- A Business Central hub section
- A resume center and hiring dashboard
- A lightweight AI assistant experience for recruiter-facing questions
- A career analytics panel
- A dedicated project showcase for Business Central / AL work

## 2. Existing Repository Mapping

| Current area | Planned role in the new experience |
|---|---|
| [index.html](../index.html) | Main shell for the new experience |
| [assets/data/profile.json](../assets/data/profile.json) | Developer profile, headline, bio, stats, resume metadata |
| [assets/data/experience.json](../assets/data/experience.json) | Career timeline and consultant story |
| [assets/data/skills.json](../assets/data/skills.json) | Technical matrix and capability stack |
| [assets/data/projects.json](../assets/data/projects.json) | Project database for recruiter-facing showcase |
| [assets/data/education.json](../assets/data/education.json) | Education and academic background |
| [assets/data/certifications.json](../assets/data/certifications.json) | Credentials and trust markers |
| [assets/data/blogs.json](../assets/data/blogs.json) | Knowledge center and thought leadership content |
| [assets/data/socials.json](../assets/data/socials.json) | Resume links, GitHub, LinkedIn, email |
| [assets/documents](../assets/documents) | Resume center and downloadable materials |
| [assets/images](../assets/images) | Visual assets and screenshots |
| [docs/ROADMAP.md](../docs/ROADMAP.md) | Future roadmap for analytics, search, PWA, and dashboard features |

## 3. Migration Phases

### Phase 0 — Audit and Content Clean-up
- Review current content and identify what should be preserved, rewritten, or removed
- Define the new narrative: Business Central + ERP + web development + recruiter-facing value
- Establish the new content hierarchy

### Phase 1 — Foundation Upgrade
- Keep the current modular architecture but introduce a stronger page narrative
- Create new sections for:
  - Developer dashboard hero
  - Business Central hub
  - Resume center
  - Hiring dashboard

### Phase 2 — Content Migration
- Reframe the existing profile and experience into a recruiter-facing story
- Promote the Business Central project as the flagship showcase
- Rework project descriptions to emphasize business impact and technical depth

### Phase 3 — Homepage Rebuild
Replace the current generic “Welcome / I am a Developer” feeling with a stronger landing experience:

- Name and role
- Core positioning: Microsoft Dynamics 365 Business Central Developer
- Quick metrics: years of experience, projects, reports, tables, pages
- Strategic skill chips: Business Central, AL, Power BI, API integrations, ERP solutions

### Phase 4 — Business Central Hub
Create a dedicated module for:
- AL Development
- Extensions and customizations
- Reports and RDLC
- Integrations
- Migration projects
- Architecture and solution patterns

### Phase 5 — Dynamic Data Conversion
Continue using JSON as the content source, but enrich it for recruiter use:

Example fields to add to project entries:
- businessImpact
- industry
- modules
- reports
- tables
- pages
- complexity
- availability

### Phase 6 — Recruiter Features
Add:
- Resume center with downloadable versions
- Hiring dashboard with role, availability, preferred work mode, and notice period
- Contact experience tailored for recruiters and hiring managers

### Phase 7 — AI Layer
Add a lightweight assistant experience that can answer questions such as:
- “What Business Central projects has she worked on?”
- “What AL development experience does she have?”
- “What is her technical profile for ERP roles?”

### Phase 8 — Analytics Layer
Add a simple career analytics board showing:
- BC projects completed
- reports delivered
- technologies used
- experience depth across AL, RDLC, APIs, and Power BI

### Phase 9 — Performance and SEO
Focus on:
- image optimization
- lazy loading
- better semantic HTML
- stronger metadata for recruiter and role-based search terms
- Lighthouse targets above 90

### Phase 10 — Deployment
Deploy to GitHub Pages or Vercel with a polished custom domain experience.

## 4. Recommended Structure for the New Experience

```text
krishnaveni-developer-hub
├── app
├── components
├── data
├── public
├── business-central
├── docs
├── package.json
└── README.md
```

For this repository, the first version can stay lightweight and still follow the current static-site approach while introducing those new sections.

## 5. Immediate Implementation Order

1. Reframe the hero and about sections
2. Promote the Business Central project as the flagship story
3. Add a Business Central hub section
4. Add recruiter-focused content blocks
5. Introduce dynamic project metadata
6. Add resume and hiring modules
7. Add light AI assistant experience
8. Add analytics and SEO polish

## 6. Suggested Content Priorities

### Highest priority
- Business Central developer positioning
- AL / ERP solution showcase
- Recruiter-friendly project framing
- Resume and hiring information

### Medium priority
- AI assistant experience
- Analytics dashboard
- Knowledge center expansion

### Lower priority
- Advanced PWA support
- Multi-language version
- Full CMS backend

## 7. Recommended Next Step
The next implementation step should be to create the following new sections in the current site:
- Hero upgrade
- Business Central hub
- Resume center
- Recruiter dashboard
- Project metadata expansion

This will give the portfolio a stronger professional brand while preserving the existing modular architecture that already works well.
