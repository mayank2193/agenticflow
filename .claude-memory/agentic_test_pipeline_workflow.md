---
name: agentic-test-pipeline-workflow
description: "The reusable 3-stage GitHub Actions workflow (planner/authoring/execution) in this repo, and how to invoke it for a new requirements doc"
metadata: 
  node_type: memory
  type: project
  originSessionId: 9b765082-fdfe-4400-9409-f6b140e1df01
  modified: 2026-08-17T10:57:56.947Z
---

`.github/workflows/agentic-test-pipeline.yml` on `mayank2193/agenticflow` (branch `master`) implements the planner → authoring → execution flow as a generic, reusable workflow:

- **Trigger:** `workflow_dispatch` (manual, Actions tab) and `workflow_call` (so other workflows/repos can call it with `uses: mayank2193/agenticflow/.github/workflows/agentic-test-pipeline.yml@master` + `secrets: inherit`).
- **Inputs:** `requirements_doc` (blank = auto-detects first `*.pdf`/`*.docx` in repo root), `generation_objective` (defaults to the standard positive/negative/edge prompt), `test_language` (`javascript` or `python`, controls the kane-cli export + execution step).
- **Required secrets:** `KANE_USERNAME`, `KANE_ACCESS_KEY`, `LT_USERNAME`, `LT_ACCESS_KEY` — not yet added to the repo as of 2026-08-17, so the workflow will fail at the `kane-cli login` step until the user adds them.
- **Stages:** planner runs `kane-cli generate --files <doc> --save --agent`; authoring runs `kane-cli testmd export --language <lang> --force` over every generated `*_test.md`; execution installs deps and runs each exported test file, publishing to LambdaTest Test Manager.

**Why:** User asked (2026-08-17) to make the pipeline reusable/generic for future requirements docs, not hardcoded to the Airbnb PRD — it now auto-detects the doc and takes language/objective as inputs instead.

**How to apply:** For a new requirements doc in this repo, just add the PDF/DOCX and trigger the workflow (input can stay blank if it's the only doc in the root, or pass its path explicitly). For a different repo wanting the same pipeline, point a caller workflow at this file with `workflow_call` rather than copy-pasting the YAML. See [[testcase-generation-flow]] for the equivalent local (non-CI) process, and [[airbnb-search-routing-suite]] for the suite this pipeline was built against.
