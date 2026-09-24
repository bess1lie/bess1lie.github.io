# bess1lie.github.io — project rules

Single-file security portfolio. `index.html` is the product; pure HTML + inline
CSS + vanilla JS. No frameworks, no dependencies beyond Google Fonts.

## Workflow (mandatory order)

1. Audit current version (read `index.html` fully, check links/assets/terminal).
2. Research (production references → `.stitch/research.md`).
3. Design system (`.stitch/DESIGN.md` is the source of truth).
4. Visual exploration (directions documented, one chosen).
5. Implementation (evolve `index.html`, backup first).
6. Verification (real browser: screenshots, terminal, links, no auto-commit).

## Hard constraints

- NEVER touch `cafe-demo/`, `barbershop-demo/`, `furniture-demo/` (open, edit,
  format, or move). Pre-existing demo changes in `git status` are not mine —
  do not include, fix, or rewrite them.
- Do NOT touch `README.md`.
- Do NOT change terminal business logic (commands, outputs, history, Tab, Ctrl+L,
  case-insensitivity) without a stated reason. Chrome/styling may evolve.
- Do NOT add React / Next.js / Tailwind / npm dependencies.
- Do NOT invent facts (users, stars, results, screenshots, testimonials).
- Do NOT break existing links (GitHub repos, screenshots, anchors).
- Do NOT commit automatically. Report `DEMO DIRECTORIES TOUCHED: NO`,
  `README TOUCHED: NO`, `TERMINAL PRESERVED: YES/NO`, `AUTO COMMIT: NO`.
- Back up `index.html` to `/home/bessilie/backups/` before rewriting.
