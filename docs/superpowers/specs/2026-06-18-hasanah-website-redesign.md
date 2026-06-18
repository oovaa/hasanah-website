# Hasanah Website Redesign

## Overview
Modernize and update the hasanah-website (Vite + React + TypeScript + Tailwind) landing page to accurately reflect the Hasanah VS Code extension v10.0.2 features and improve visual design.

## Current State
- Website shows v9.3.0, missing many features that exist in v10.0.2
- Single monolithic App.tsx (~33KB) — no component separation
- Generic feature cards that don't cover actual extension capabilities
- Fake testimonials instead of real data
- No changelog or version history

## New Features to Add
Update all content to reflect these extension capabilities:
- 3-State Alternation (Hadith 💚 / Ayah ❤️ / Duaa 🤲)
- Unified Ummah API (single API with caching)
- Random Qur'anic Verses (Arabic + English)
- Random Hadiths from 7 major collections
- Specific Ayah + Tafsir Lookup (4 sources: Ibn Kathir AR/EN, Ma'arif, Muyassar)
- Prayer Times (auto-detect via IP, countdown, 10-min notifications)
- 126 Authentic Duas across 27 categories
- Hijri Date display
- 99 Names of Allah (Asma ul Husna with Arabic/transliteration/meaning)
- Dual Language Support (Arabic/English)
- Customizable Intervals (configurable delay)
- Auto-Dismiss Notifications
- Offline Duaa Fallback
- Enhanced 24-hour Caching

## Structure

### Component Architecture
Break App.tsx into separate component files:
```
src/
  components/
    Header.tsx          — Nav bar, dark mode toggle, mobile menu
    Hero.tsx            — Hero section with badges + CTAs
    StatsBar.tsx        — Live stats (stars, version, last updated)
    About.tsx           — About section
    Features.tsx        — Features grid (all features)
    PrayerTimes.tsx     — Prayer times spotlight section
    NamesOfAllah.tsx    — 99 Names preview section
    WhatsNew.tsx        — Changelog / version timeline
    Installation.tsx    — Install steps + commands table
    GitHubStats.tsx     — Real contributors/stats (replaces testimonials)
    FAQ.tsx             — FAQ accordion
    CTA.tsx             — Final call to action
    Footer.tsx          — Footer with verse + links
    FeatureCard.tsx     — Reusable feature card
```

### Visual Design
- **Palette:** Keep emerald-green Islamic theme, dark mode toggle
- **Typography:** Better hierarchy with larger headings, improved readability
- **Animations:** Subtle card hover (scale + shadow), smooth scroll, fade-in on scroll
- **Glass-morphism nav:** Backdrop blur sticky header
- **Section dividers:** Decorative elements between sections
- **Prayer Times section:** Visual widget mockup showing times + countdown
- **99 Names section:** Sample grid with Arabic calligraphy style
- **Stats Bar:** Number cards with live GitHub data

### Content Updates
- Version: 9.3.0 → 10.0.2
- Stars: Live from GitHub API (currently 30)
- Remove fake testimonials → Replace with real GitHub data (stars, forks, open issues, contributors)
- Add "What's New" timeline with recent major updates
- Add command reference table in installation section
- Update FAQ with real user questions about new features

## Non-Goals
- No backend/server required — pure static site
- No actual VS Code extension integration
- No API key management (demo data only)

## Verification
- `npm run build` must succeed
- Dark mode toggle works
- All sections render correctly
- GitHub stats fetch from live API
