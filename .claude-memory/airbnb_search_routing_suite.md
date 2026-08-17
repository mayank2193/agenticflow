---
name: airbnb-search-routing-suite
description: Location and kane-cli request ID for the Airbnb homepage-search-to-results test suite generated from the PRD PDF
metadata: 
  node_type: memory
  type: project
  originSessionId: 9b765082-fdfe-4400-9409-f6b140e1df01
  modified: 2026-08-14T14:05:12.994Z
---

Source doc: `Airbnb_Search_Routing_PRD.pdf` (project root). Generated via kane-cli request id `31870`, saved as suite `homepage-search-to-results-31870` at `.testmuai/tests/homepage-search-to-results-31870/`, tracked by `.tcg-suite.json` in that folder (`{"requestId":"31870","suiteName":"homepage-search-to-results-31870"}`).

Scenarios saved as automated tests (9 cases, functional only):
- `Search-Route-Complete` (TS1) — Flow 1, complete input (destination+dates+guests)
- `Search-Refine-Partial` (TS2) — Flow 2, partial input (no dates) + filter/map refinement
- `Search-Input-Validation` (TS3) — negative cases surfaced by refine pass: invalid checkout date, empty destination, no-match destination

Not saved as automated files: `A11y-Keyboard-Nav-Focus` (NF01, 3 cases) — kane-cli only auto-saves browser-automatable functional cases; the keyboard-navigation cases exist only as manual steps in the earlier presented table, not under `.testmuai/tests/`.

**Why:** Keeps the request id (`31870`) and suite path discoverable so further work (more `--refine --req 31870` passes, re-saving, or `kane-cli testmd run`) doesn't require re-generating from scratch or re-deriving the mapping from `.tcg-suite.json`.

**How to apply:** If the user references "the Airbnb tests," "the search routing suite," or wants to extend/refine/run this specific suite, use request id `31870` and this suite path directly instead of asking or re-reading the PDF from scratch. If NF01 accessibility coverage needs to become runnable, that's a gap to solve (kane-cli's automated-save limitation), not a missing generation step. See [[testcase-generation-flow]] for the general process this suite followed.
