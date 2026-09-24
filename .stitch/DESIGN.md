---
name: Graphite Console
colors:
  page: '#0e1218'
  panel: '#141a23'
  card: '#171e29'
  card-border: '#26303f'
  terminal: '#0a0d12'
  line: '#232c3a'
  on-page: '#e9eef5'
  on-page-secondary: '#a5b1c2'
  on-page-muted: '#6f7b8d'
  accent: '#8ba3c7'
  accent-strong: '#a9bedd'
  accent-dim: 'rgba(139, 163, 199, 0.12)'
  secondary: '#a79fd1'
  ok: '#9db8a0'
  warn: '#c2a98b'
  error: '#c99393'
  light-page: '#eef1f5'
  light-card: '#ffffff'
  light-line: '#dde3ec'
  light-text: '#1b2330'
  light-accent: '#3d5a86'
typography:
  display:
    fontFamily: Inter
    fontSize: clamp(2.1rem, 5vw, 3.4rem)
    fontWeight: '700'
    lineHeight: 1.08
    letterSpacing: -0.025em
  headline-md:
    fontFamily: Inter
    fontSize: clamp(1.4rem, 2.8vw, 1.9rem)
    fontWeight: '700'
    lineHeight: 1.2
    letterSpacing: -0.02em
  body-base:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 27px
    letterSpacing: '0'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.08em
  code-base:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
rounded:
  sm: 6px
  DEFAULT: 10px
  md: 10px
  lg: 14px
  full: 9999px
spacing:
  unit: 4px
  hero-top: 88px
  section: 64px
  section-mobile: 36px
  card: 28px
  gutter: 20px
  margin-mobile: 20px
  margin-desktop: 24px
  max-width: 1080px
---

# Design System: Graphite Console

## 1. Visual Theme & Atmosphere

Cold, expensive, calm. The page reads as a single instrument panel: deep
graphite page, one-step-lighter panels, cards a breath above that, and a near-
black terminal console recessed below everything. Cool gray-blue steel is the
only accent; muted violet appears only in index labels and the hero eyebrow.

Depth comes from layered surfaces and one restrained shadow (terminal only),
never from glow, glass blur stacks, or gradients. The site must look finished
with all animation disabled — the "wow" is composition, measure, spacing, and
micro-detail, not motion.

## 2. Color Palette & Roles

### Primary Foundation
- **Graphite Page** `#0e1218` — page background.
- **Panel Ink** `#141a23` — header bar, about panels, install header.
- **Card Steel** `#171e29` — project cards, evidence frames.
- **Console Black** `#0a0d12` — terminal body, screenshot wells (darkest layer).

### Accent & Interactive
- **Cold Steel** `#8ba3c7` — links, primary button fill, prompt, hovers.
- **Pale Steel** `#a9bedd` — emphasis inside headlines, strong hover.
- **Muted Violet** `#a79fd1` — section index kickers and eyebrow ONLY.

### Typography & Text Hierarchy
- **Off-White** `#e9eef5` — headings, primary text (16.1:1 on page).
- **Cool Gray** `#a5b1c2` — body secondary (8.6:1).
- **Faint Slate** `#6f7b8d` — labels, hints, non-essential metadata only.

### Functional States
- **Sage** `#9db8a0`, **Sand** `#c2a98b`, **Clay** `#c99393` — terminal status
  words and errors. No acid green, no yellow, no red-green-only signaling
  (status words always carry text labels).

## 3. Typography Rules

### Hierarchy & Weights
Inter for everything human; JetBrains Mono for terminal, kickers, pills, and
stack tokens only. Display 700 at −0.025em, line-height 1.08, measure ≤ 20ch.
Section titles ≤ 2 lines. Body max 64ch. Kickers are 12px mono uppercase with
an index (`01 / Console`).

### Spacing Principles
Hero top 88px desktop; sections 64px apart (36px mobile); card padding 28px;
gutters 20px. Rhythm is deliberately uneven: hero breathes, evidence sits
tighter, footer is quiet.

## 4. Component Stylings

### Buttons
10px radius, 44px min-height. Primary: steel fill, ink text. Ghost: hairline
border, text color. Hover changes border/fill only — no lift, no shadow.
Icons 16px, vertically centered.

### Cards & Evidence Figures
14px radius, 1px `--card-border`, padding 28px. Hover: border shifts to steel,
nothing else. Project cards carry an index (`01`) plus a category label
(`RECON`, `GRAPHQL`, `REST API`). Evidence uses `Fig. 01–03` captions with a
technical context line.

### Navigation
60px sticky bar, blur backdrop, hairline bottom border. Text links 15px medium;
GitHub is a hairline button. Mobile: absolute dropdown panel, 44px rows.

### Inputs & Forms
The terminal input is the only input: borderless, 16px mono (no iOS zoom),
steel caret, muted placeholder. Suggestion chips are pill buttons with kbd
hint text (`↑↓ history · tab complete`).

### Terminal Console
Chrome bar: traffic dots (desaturated), session title left, `bash · utf-8`
session metadata right. Output hierarchy: dim welcome lines, bright echo,
muted output, clay errors. Loading state is a single dim `… working` line.
No fake stats, uptime, or vulnerability counts anywhere.

## 5. Layout Principles

### Grid & Structure
Single 1080px container. Projects/evidence/principles: 3 → 2 (≤900px) → 1
(≤640px). About/focus: 1.2fr/1fr → 1 column. Terminal full container width.

### Whitespace Strategy
4px base unit. Section head margin 28px. Terminal internal padding 20px.
Chips and pills wrap; nothing overflows at 320px.

### Alignment & Visual Balance
Left-aligned editorial flow; centered nothing except lightbox captions.
Terminal is the visual anchor between hero and projects.

### Responsive Behavior & Touch
Desktop-first composition, mobile-specific spacing (not just scaled clamp).
All interactive targets ≥ 32px (chips) / 44px (buttons, nav rows).
Screenshots keep 16/10 wells with `object-position: top`.

## 6. Design System Notes for Stitch Generation

### Language to Use
"Graphite editorial console", "cold steel accent on near-black", "indexed
sections like a lab notebook", "terminal as the hero instrument", "quiet
premium developer tool".

### Color References
Graphite Page #0e1218, Panel Ink #141a23, Console Black #0a0d12, Cold Steel
#8ba3c7, Muted Violet #a79fd1 (labels only), Off-White #e9eef5.

### Component Prompts
- "Sticky 60px product header, mono wordmark, four text links, hairline
  GitHub button, theme toggle."
- "Hero with two-line editorial headline under 20ch, one-clause lede, one
  primary plus two ghost CTAs, mono meta row with dividers."
- "Full-width terminal console: traffic dots, session metadata right,
  suggestion chips, borderless mono input."
- "Three tool cards with index number, category label, purpose line, four
  focus items, Python/MIT pills, GitHub button."

### Incremental Iteration
Polish borders, radii, and spacing before adding anything. If a section feels
empty, tighten the copy — never add decorative elements, badges, or counters.
