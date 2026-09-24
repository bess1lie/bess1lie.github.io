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

Hero measure + two-line headline form; indexed kickers `01–06`; terminal session
metadata + kbd hints; project cards get index + category label; evidence becomes
`Fig.` case-study figures; differentiated vertical rhythm; light-theme polish;
detail pass on borders, radii, hovers, icon sizes. Terminal logic, copy facts,
links, and single-file architecture unchanged.
