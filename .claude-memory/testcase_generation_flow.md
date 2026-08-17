---
name: testcase-generation-flow
description: "Standard end-to-end flow to use for every test-case generation request, regardless of input type (PDF/DOCX doc or plain-text description)"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 9b765082-fdfe-4400-9409-f6b140e1df01
  modified: 2026-08-14T14:02:08.875Z
---

For any request to generate test cases (from a PDF/DOCX requirements doc, or a plain-text description), always run the full pipeline below rather than a partial version of it — this is the default, not a one-off for a single project.

1. If a document is given, read it directly first (Read tool) to build a mental model of actors, functional requirements, business rules, acceptance criteria, and NFRs — this is what makes output "senior QA" quality rather than generic.
2. Generate cases via `kane-cli generate ... --agent` (with `--files <doc>` if a document was provided), steered by what was found in step 1. Never hand-write cases instead of routing through kane-cli.
3. Check the first pass for missing negative/edge coverage. If the source material doesn't explicitly define behavior for a negative/edge case (e.g. empty required field, invalid range, out-of-bounds count, no-match result), attempt one `--refine --req <id>` pass asking for it explicitly — kane-cli will either add real cases grounded in inferred product behavior or decline if it's genuinely undocumented.
4. Anything still undocumented after refinement gets listed as an "Open questions" section, not silently guessed at.
5. Present results as a QA-style markdown table (ID, Title, Type, Preconditions, Steps, Expected Result, Priority), grouped by scenario.
6. Offer (or on confirmation, run) `kane-cli generate --save --req <id> --agent` to persist as runnable tests under `.testmuai/tests/`.

**Why:** User explicitly asked (2026-08-14) to make this the common flow for "all the test creating journeys," after this exact sequence was run against an Airbnb PRD PDF (`requirement-analyser` skill + `kane-cli`) and worked well, including the refine step surfacing a real negative-case scenario (`Search-Input-Validation`) that the first pass missed.

**How to apply:** Trigger this whenever the user asks to generate test cases/QA coverage, whether or not a document is attached and whether or not the `requirement-analyser` skill's exact trigger conditions are met (that skill covers step 1–2 for the PDF case; this memory extends the same rigor — refine pass, open-questions flagging, save offer — to plain-text-description requests too).
