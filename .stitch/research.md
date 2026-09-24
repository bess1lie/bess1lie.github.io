# Design research — bess1lie.github.io iteration
Date: 2026-09-25. Sources: live production pages (fetched, not copied).

## Reference patterns

1. **Vercel — hero typography + section rhythm.** One tight statement headline,
   short subcopy, two CTAs max. Sections separated by large, *uneven* whitespace
   instead of boxes. Takeaway: headline measure ~18ch, lede one clause, CTA row
   with a single primary action.
2. **Linear — numbered editorial sections ("Fig 0.x").** Small mono kickers that
   index the page (`01`, `02`…), product UI shown as proof, restrained motion.
   Takeaway: index the portfolio sections (console, tools, evidence) the same
   way; screenshots presented as figures with technical captions.
3. **Raycast — command interface + extension cards.** Keyboard-first launcher;
   cards are icon + name + one line, nothing more. Takeaway: terminal suggestion
   chips styled like keyboard hints; project cards stay at purpose + focus, no
   README spill.
4. **Warp — terminal as product figure.** Real code blocks with file/session
   labels (`factory.yaml`, `$ warp agent run…`), window chrome with metadata,
   `$` prompts. Takeaway: terminal bar carries session metadata
   (`bash · utf-8`), outputs keep plain hierarchy, no fake stats or uptime.
5. **Premium docs (common pattern) — code blocks.** Labeled block header
   (`bash` + Copy), generous line-height, horizontal scroll contained inside the
   block. Takeaway: install block keeps this exact treatment.
6. **Anti-pattern (observed everywhere):** neon-green "hacker terminal" hero.
   Rejected — it reads as template, not engineer.

## Visual directions considered

- **A. Editorial console (CHOSEN).** Linear-style indexed sections + Vercel-tight
  hero + Warp-grade terminal chrome + Raycast-dense cards. Restrained, unique,
  survives with animations off.
- **B. Docs product.** Everything reads like documentation. Clear but flat; hero
  loses its statement quality. Rejected.
- **C. Full monospace.** Whole page in JetBrains Mono. Distinctive for 5 seconds,
  tiring after 30. Rejected (mono stays in terminal + technical details only).

## What changes in this pass (evolution, not rewrite)

## Content and positioning research (2026-09-25)

-studied for copy, not visuals: rauno.me (one-line identity, no adjectives,
work listed without pitch), Vercel/Linear (short hero, proof-led sections),
GitHub security-researcher topics (anti-pattern confirmed: terminal/matrix-rain
templates dominate — restraint is the differentiator).

### Writing patterns adopted

1. Identity in one clause: role + what you make, no mission statements.
2. Second direction gets one line, never equal billing in the H1.
3. Project cards answer what / why / what it demonstrates — two sentences max.
4. "Available for" lists beat "let's build something amazing" CTAs.
5. Numbers only when real (stars fetched live, nothing hand-written).
6. Banned vocabulary: passionate, innovative, cutting-edge, next-generation,
   world-class, seamless, robust, leveraging, unlock, elevate, mission, journey.
7. Each positioning idea appears once: detection-first / scope-aware /
   open-source live in Principles only.

## Editorial pass findings (2026-09-25)

- One connected thesis beats a skill list: "engineer who builds technical
  products; security tooling is the specialty, web/AI shows breadth."
- Hero density: H1 "Security engineer building security tooling." + one lede
  covering the second line. No three-layer explanation up top.
- Terminal: one hint mechanism (chips) is enough; extra kbd legends read as
  documentation. Mobile shows 4 chips, rest via help.
- Cards differentiate through purpose descriptors, not decoration; focus lists
  stay single-column (2×2 harms scan in narrow cards).
- Defensive headlines ("Real output, not mockups") rewritten as plain labels
  ("Examples from apihunter").
- No measured install time → no time promises ("Install from source").
- Contact names both lines plainly, one CTA, no "let's build something amazing".
- Footer reduced to copyright only; positioning lives in content, not chrome.

## Prior pass (v3, kept)

Hero measure + two-line headline form; indexed kickers; terminal session
metadata + kbd hints; project cards with index + category label; evidence as
`Fig.` case-study figures; differentiated vertical rhythm; light-theme polish;
detail pass on borders, radii, hovers, icon sizes. Terminal logic, copy facts,
links, and single-file architecture unchanged.
