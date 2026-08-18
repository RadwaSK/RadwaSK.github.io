# Radwa Khattab — Book Me Website
## Implementation Plan & Project Target

## Project Goal

Build a polished, extremely fast, one-page professional website for **Radwa Khattab**, hosted on GitHub Pages and initially accessible at:

https://radwakhattab.github.io

The site is **not a conventional portfolio** because much of Radwa's professional work is private.

Instead, it should function as a professional **"Book Me" / personal landing page** communicating:

- Who Radwa is
- Her technical capabilities
- Her professional experience
- What people can book her for
- Her availability
- Her preferred working environment
- Ways to contact her

The site should appeal to:

- Companies looking for freelance/part-time AI engineering help
- Startups and small teams
- Larger organizations looking for specialized project help
- Students and early-career professionals seeking CV/career guidance
- Universities and technical communities looking for speakers

---

# Current Status

- GitHub repository already created:
  - `radwakhattab.github.io`
- Repository is public.
- Local Astro project/folder has already been created.
- Astro project has **not yet been tested locally**.
- No custom domain yet.
- Booking provider has not yet been configured.
- Final website content should be based on Radwa's latest CV and verified professional information.
- Do not invent dates, titles, publications, education details, or achievements.

---

# Technology

Use:

- Astro
- TypeScript
- CSS
- Static site generation
- GitHub Pages
- GitHub Actions

Avoid unnecessary backend infrastructure.

The site should be:

- Extremely fast
- Responsive
- Accessible
- SEO-friendly
- Easy to maintain
- Visually polished
- Minimal in client-side JavaScript
- Suitable for excellent LinkedIn link previews

---

# Target Repository Structure

```text
radwakhattab.github.io/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── public/
│   ├── resume.pdf
│   ├── favicon.svg
│   └── og-image.png
│
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── Skills.astro
│   │   ├── Experience.astro
│   │   ├── Background.astro
│   │   ├── WorkStyle.astro
│   │   └── Contact.astro
│   │
│   ├── pages/
│   │   └── index.astro
│   │
│   └── styles/
│       └── global.css
│
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```
The exact component structure can be changed if Astro best practices suggest a better organization.

---

# Phase 1 — Verify Existing Astro Project
The Astro project has already been created.

First run:

```
cd radwakhattab.github.io
npm install
npm run dev
```
Open the local URL shown by Astro, normally:

```
http://localhost:4321
```
Verify that the default Astro site works.

Then run:

```
npm run build
```
The build must succeed before implementing the full page.

---

# Phase 2 — Connect Local Project to GitHub
The GitHub repository already exists.

Check:

```
git status
git remote -v
```
If there is no remote:

```
git remote add origin https://github.com/radwakhattab/radwakhattab.github.io.git
```
Then:

```
git branch -M main
git add .
git commit -m "Initial Astro website"
git push -u origin main
```
Do not force-push or overwrite existing repository content unless explicitly necessary.

---

# Phase 3 — Configure Astro
`astro.config.mjs` should use:

```
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://radwakhattab.github.io",
});
```
No custom domain is required initially.

A custom domain can be added later.

---

# Phase 4 — GitHub Pages Deployment
Use GitHub Actions.

Create:

```
.github/workflows/deploy.yml
```
Recommended workflow:

```
name: Deploy Astro site to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

      - name: Deploy
        uses: actions/deploy-pages@v4
```
In GitHub:

**Repository → Settings → Pages → Build and deployment → Source → GitHub Actions**

After deployment, verify:

[https://radwakhattab.github.io](https://radwakhattab.github.io/)

---

# Phase 5 — Website Information Architecture
The website should remain a **single-page professional profile**, but contain enough information to represent Radwa as a senior engineer.

Recommended sections:

1. Hero
2. Work With Me
3. What I Do
4. Experience
5. Teaching, Research & Publications
6. My Ideal Work Scenario
7. Background / Education
8. Availability
9. Contact / Links
Do not turn it into a huge CV dump.

---

# Section 1 — Hero
Primary positioning:

**Senior AI Engineer & Data Scientist**

Potential supporting message:

> Building AI systems that work in the real world.
The exact copy should be refined later.

The Hero should communicate:

- Seniority
- Production AI experience
- Breadth across AI/ML, LLMs, cloud and engineering
- Current availability for selected freelance/part-time work
- Primary CTA to discuss a project
Primary CTA:

**Book a project call**

Secondary CTA:

**See how we can work together**

---

# Section 2 — Work With Me
There are three offerings.

## A. Freelance / Consulting
For:

- AI engineering
- Machine learning
- Production AI systems
- LLM applications
- RAG
- AI agents
- Python/backend engineering
- MLOps
- Cloud infrastructure
- Architecture
- Technical leadership
- Infrastructure/database cost optimization
Indicative rate:

**$20–$50/hour**

Final rate depends on:

- Project scope
- Time commitment
- Working hours
- Client/company region
- Engagement type
Longer-term engagements can be discussed separately.

Initial booking:

**30-minute project discussion**

---

## B. CV & Career Guidance
This is a **free/volunteer service**, primarily for:

- Students
- Fresh graduates
- Early-career AI/data/software professionals
Do NOT require a full call for every person.

Preferred workflow:

```
CV + LinkedIn + target role
          ↓
     Async review
          ↓
Feedback via email/LinkedIn
          ↓
Applicant implements changes
          ↓
Optional 15-minute follow-up
```
Radwa can provide feedback on:

- CV
- LinkedIn
- Positioning
- Job-search strategy
- Application strategy
- Getting started in AI/data/software careers
The service should be clearly described as free/volunteer.

Response times may vary.

---

## C. Technical Talks & Community Sessions
Available for:

- Universities
- Student communities
- Conferences
- Technical communities
- Company events
Potential topics:

- AI in production
- Practical AI engineering
- LLMs and RAG
- AI agents
- How AI is changing engineering and data careers
- Lessons from building and deploying AI systems
Format:

- Online
- In-person when practical
Preferred in-person locations:

- October City
- Sheikh Zayed
- Nearby areas
Speaking can be:

- Paid
- Volunteer
- Dependent on the event/community
Initial CTA should preferably be an email/contact request rather than automatic calendar booking.

Potential discussion duration:

**30–60 minutes**

---

# Section 3 — What I Do
This section should be broad and senior-level rather than simply listing technologies.

## 1. AI & Machine Learning
Include relevant capabilities such as:

- Production ML systems
- Model development
- Model evaluation
- Applied machine learning
- NLP
- Predictive modeling
- AI system design
Only include capabilities supported by the CV.

---

## 2. Cloud, ML Infrastructure & MLOps
This should appear near the top because it is a significant strength.

Include relevant experience with:

- Azure
- Azure ML
- Azure AI services
- Databricks
- Docker
- CI/CD
- Deployment
- Monitoring
- ML infrastructure
- MLOps
- Infrastructure optimization
- Cloud cost reduction

---

## 3. LLMs, RAG & AI Agents
Include:

- RAG architectures
- Embeddings
- Vector databases
- LLM applications
- AI agents
- Orchestration
- Prompt engineering
- LLM evaluation
- Structured outputs

---

## 4. Backend & Data Engineering
Include:

- Python
- FastAPI
- PostgreSQL
- Data pipelines
- Database architecture
- Performance optimization
- Database/cloud cost optimization

---

## 5. Technical Leadership
Include:

- Architecture
- Technical planning
- System design
- Mentoring
- Delivery planning
- Technical ownership
- Translating business goals into technical execution

---

# Section 4 — Experience
Include actual professional experience with approximately three lines per company.

Companies/organizations to include:

## Microsoft
Use the exact title and dates from the latest CV.

Focus on:

- Applied AI/data science
- Production systems
- Relevant technologies
- Measurable impact
- Collaboration
Do NOT criticize Microsoft or compare it negatively with other employers.

---

## PowerUp / Proxify
Use the exact current title and dates from the CV.

Potential areas:

- AI performance intelligence platform
- Python analytics engine
- FastAPI
- PostgreSQL / Databricks Lakebase
- Azure
- Docker
- Azure DevOps
- CI/CD
- Architecture
- Infrastructure cost optimization
- Technical leadership
Private/client-sensitive information must not be exposed.

---

## Ejada
Use exact title, dates and responsibilities from the CV.

---

## Selprokey Technologies
Use exact title, dates and responsibilities from the CV.

---

# Section 5 — Teaching, Research & Publications
Include:

- Teaching experience
- Mentoring experience
- Research experience
- Published papers
Publication titles should link to actual publication/DOI/Google Scholar/etc. where appropriate.

Do not invent publication metadata.

---

# Section 6 — My Ideal Work Scenario
Use this title instead of "How I Work".

Important positioning:

Radwa does **not** dislike large teams.

The preference is:

> Small teams are particularly enjoyable because they make ownership and end-to-end delivery easier, but Radwa is comfortable working in larger organizations and cross-functional teams.
Key preferences:

- Clear goals
- Clear priorities
- Measurable outcomes
- Agreed delivery timeframe
- Autonomy in implementation
- Mutual trust
- Flexible collaboration
- Compatible time zones
- Limited recurring late-night meetings
- Focus on outcomes rather than constant supervision
- Ability to propose the technical approach
- Ownership and accountability
Do not present these as rigid requirements.

---

# Section 7 — Background
Include:

- Education
- Teaching
- Research
- Publications
- Relevant community work
Exact education details must come from the latest CV.

---

# Section 8 — Availability
The site should clearly communicate that freelance work is currently secondary to finding the right full-time opportunity.

Suggested positioning:

> I am currently open to selected freelance and part-time engagements while exploring my next full-time opportunity. Any freelance engagement is subject to availability and applicable employment or contractual requirements, and I will discontinue outside professional engagements when required by a full-time employment agreement.
Do not list specific companies Radwa is applying to.

Do not make the site sound like Radwa has abandoned the full-time job search.

The goal is to communicate:

- Active
- Productive
- Open to interesting work
- Still pursuing the right full-time opportunity

---

# Links to Include
The page should provide direct links to:

- Resume
- LinkedIn
- GitHub
- Published papers / Google Scholar
- Email
Prefer hosting the resume directly from the website:

```
public/resume.pdf
```
Then link to:

```
/resume.pdf
```
Do not expose a phone number prominently at first.

Email is sufficient initially.

---

# Booking System
Start with **Calendly Free** rather than paying immediately.

Initial setup:

**Book a Project Conversation — 30 minutes**

The booking form should ask what the person wants to discuss.

Possible options:

- Freelance / AI engineering
- Consulting / architecture
- Technical collaboration
- Speaking
- Other
Later, if usage justifies it, move to separate event types.

Availability should be calendar-based rather than manually updated every day.

Because freelance work is secondary to the full-time job search, keep exposed availability intentionally limited.

---

# CV / Career Workflow
Do not force every career-help request into a calendar.

Preferred flow:

```
CV + LinkedIn + target role
          ↓
     Async review
          ↓
 Feedback via email/LinkedIn
          ↓
 Applicant implements changes
          ↓
 Optional 15-minute follow-up
```
This makes the volunteering scalable.

---

# Speaking Workflow
Prefer:

```
Invite / email
     ↓
Discuss topic + audience + format + location
     ↓
Optional 30–60 minute call
```
Do not expose the complete calendar for speaking requests initially.

---

# ML Ops Community MENA
Radwa has a volunteer role:

**Community & Growth Lead — Volunteer**

at:

**ML Ops Community MENA**

The description should communicate:

- Volunteer role
- Community growth
- Partnerships
- Educational initiatives
- Helping students and early-career professionals
- Connecting with companies for technical expertise
- Exploring educational collaborations
- Exploring internship opportunities
Do NOT explicitly write:

> "This will not interfere with my full-time job."
The word **Volunteer** and the description already make the nature of the role clear.

If appropriate, this can be listed under LinkedIn Volunteer Experience rather than standard Employment.

---

# LinkedIn Positioning
The website should NOT imply:

> "I have stopped looking for a full-time job and become a freelancer."
Instead:

> Radwa is actively exploring her next ideal full-time opportunity while using available capacity for selected freelance work, volunteering and technical speaking.
The LinkedIn announcement should communicate:

- Continued interest in full-time opportunities
- Freelance availability in the meantime
- Desire to expand knowledge and experience
- Productive and interesting technical work
- No conflict with future full-time employment obligations
Do not mention specific companies being considered.

Do not criticize Microsoft or previous employers.

---

# Design Direction
The website should feel:

- Senior
- Technically credible
- Modern
- Clean
- Confident
- Approachable
- Professional
- Not corporate-heavy
- Not like Upwork
- Not like a generic developer portfolio
Avoid:

- Excessive animations
- Generic AI imagery
- AI robots
- Huge technology lists
- Fake metrics
- Confidential project details
- Overclaiming
Prioritize:

- Typography
- Spacing
- Hierarchy
- Fast rendering
- Responsive design
- Excellent mobile experience
- Accessibility
- Subtle interaction
- Strong CTA placement

---

# Performance Requirements
Target:

- Static HTML output
- Minimal client-side JavaScript
- Optimized CSS
- No unnecessary external libraries
- Optimized images
- Good Core Web Vitals
- Accessible semantic HTML
- Proper heading hierarchy
- Descriptive links
- Keyboard accessibility

---

# SEO / LinkedIn Requirements
Add:

- Title
- Meta description
- Canonical URL
- Open Graph metadata
- Twitter/X card metadata
- Favicon
- Semantic HTML
- Meaningful page headings
Primary URL:

```
https://radwakhattab.github.io/
```
Open Graph title:

```
Radwa Khattab | Senior AI Engineer & Data Scientist
```
Possible Open Graph description:

```
Production AI · LLMs · MLOps · Cloud · Technical Leadership
```
Create a professional OG image later.

---

# Development Workflow with GitHub Copilot
Copilot can assist with implementation, but follow these rules:

1. Keep the architecture simple.
2. Do not let Copilot invent professional facts.
3. Do not invent metrics, dates, publications or job titles.
4. Keep confidential client information out of the site.
5. Review every generated component.
6. Test locally before committing.
7. Run:

- `npm run build`
- relevant lint/type checks if configured
8. Test desktop and mobile.
9. Check all external links.
10. Check the resume link.
11. Check the Calendly link.
12. Check LinkedIn preview metadata.
13. Commit small logical changes.
Suggested commits:

```
Initial Astro setup
Add site layout and navigation
Add hero and services
Add skills and experience
Add background and publications
Add booking/contact links
Add SEO and Open Graph metadata
Add GitHub Pages deployment
Polish responsive design
```

---

# Important Content Rule
Before finalizing professional content, use Radwa's latest CV as the source of truth.

If a detail is uncertain, leave a placeholder such as:

```
TODO: confirm exact title
TODO: confirm dates
TODO: add publication link
```
Do not guess.

---

# Immediate Next Actions

1. Open the existing local Astro project in VS Code.
2. Run:

```
npm install
npm run dev
```

1. Verify the default Astro page works.
2. Run:

```
npm run build
```

1. Verify the build succeeds.
2. Check the Git remote:

```
git remote -v
```

1. Connect it to:

```
https://github.com/radwakhattab/radwakhattab.github.io.git
```

1. Push the initial project.
2. Configure GitHub Pages to use **GitHub Actions**.
3. Add the deployment workflow.
4. Confirm:

```
https://radwakhattab.github.io
```
loads successfully.
12. Add the latest CV as:

```
public/resume.pdf
```

1. Then implement the detailed Experience, Education and Publications sections using the CV as the source of truth.

---

# Final Product Target
The finished site should answer these questions within roughly 30 seconds:

1. Who is Radwa?
2. Is she senior enough to solve my problem?
3. What technical problems can she help me with?
4. What has she actually done?
5. How can I work with her?
6. How much does she charge?
7. How can I contact/book her?
8. Is she still available for full-time employment?
9. Can I invite her to speak?
10. Can I ask her for career/CV guidance?
The page should feel like a **personal professional gateway**, not a portfolio dump and not an Upwork profile.
