# Portfolio Website Design

## Target Role
Student Data Engineer at BESTSELLER Logistics — SQL, Python, data pipelines, Azure.

## Tech Stack
- Vue 3 + Vite + TypeScript
- Tailwind CSS
- GitHub Pages hosting

## Visual Identity
- Dark theme (deep navy/charcoal background)
- Electric blue/teal accent colors
- Glassmorphism project cards (frosted glass over dark background)
- Monospace headings + clean sans-serif body text
- Animated canvas particle/grid background in hero
- Scroll-triggered animations via Intersection Observer

## Page Structure (Single Page, Smooth Scroll)

### 1. Hero
- Name: Maksim Vasilev
- Tagline: "Software Engineer & Data Enthusiast"
- Animated typing effect cycling through skills
- CTA button scrolling to projects

### 2. About
- Brief bio tailored to data engineering
- Skill chips/badges grouped by category (Languages, Frameworks, Tools, Databases)
- Education info

### 3. Projects (Filterable Grid)
Filter bar: All | Data & Backend | Web | Games

Each card shows:
- Thumbnail (screenshot or GIF)
- Title + one-line description (framed for data engineer audience)
- Tech badges (colored pills)
- Role in team
- Links: GitHub repo + live demo (where available)
- Hover: expanded description

#### Project Priority & Framing

1. **GlobeTrekker** — "Full-stack .NET travel platform with SQL Server, EF Core migrations, Identity auth, and layered architecture"
   - Category: Data & Backend
   - Tech: C#, ASP.NET Core MVC, SQL Server, Entity Framework Core, Cypress
   - Showcase: SQL schema, migration code, clean architecture diagram

2. **Heat Production Optimisation** — "Microservice system optimizing Danfoss district heating costs using real-time energy price data"
   - Category: Data & Backend
   - Tech: C#, .NET, Docker, Supabase (PostgreSQL), GitHub Actions CI/CD
   - Showcase: Architecture diagram, Docker compose, data flow

3. **No-Name** — "Interactive world map displaying country data from JSON datasets"
   - Category: Web
   - Tech: HTML, CSS, JavaScript, JSON
   - Showcase: LIVE DEMO embedded in portfolio via iframe

4. **Indigo (bOOleO)** — "Digital card game implementing boolean algebra logic (AND, OR, XOR) with Raylib"
   - Category: Games
   - Tech: C++, Raylib

5. **Sol Invictus** — "Chemistry exploration game — collect elements, craft amino acids, learn science"
   - Category: Games
   - Tech: C++, Raylib, Figma

6. **Intergalactic Warriors** — "Gong: a golf-pong hybrid arcade game built with SDL2"
   - Category: Games
   - Tech: C++, SDL2

### 4. Live Demo Section
- Embedded No-Name world map in a styled iframe container
- Brief description of the project above it

### 5. Contact
- Email
- GitHub profile link
- LinkedIn link
- Optional: phone number

## Hosting Strategy
- Portfolio: GitHub Pages (free)
- No-Name demo: GitHub Pages on its own repo, embedded via iframe
- All other projects: screenshots/GIFs + GitHub repo links
- Future enhancement: Deploy GlobeTrekker to Azure free tier
