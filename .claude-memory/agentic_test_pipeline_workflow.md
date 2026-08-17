---
name: agentic-test-pipeline-workflow
description: "The reusable 3-stage GitHub Actions workflow (planner/authoring/execution) in this repo, and how to invoke it for a new requirements doc"
metadata: 
  node_type: memory
  type: project
  originSessionId: 9b765082-fdfe-4400-9409-f6b140e1df01
  modified: 2026-08-17T12:21:43.069Z
---

`.github/workflows/agentic-test-pipeline.yml` on `mayank2193/agenticflow` (branch `master`) implements the planner → authoring → execution flow as a generic, reusable workflow:

- **Trigger:** `workflow_dispatch` (manual, Actions tab) and `workflow_call` (so other workflows/repos can call it with `uses: mayank2193/agenticflow/.github/workflows/agentic-test-pipeline.yml@master` + `secrets: inherit`).
- **Inputs:** `requirements_doc` (blank = auto-detects first `*.pdf`/`*.docx` in repo root; must be a repo-relative path, not a github.com URL — the checkout already has the file locally), `generation_objective` (defaults to the standard positive/negative/edge prompt), `test_language` (`javascript` or `python`, controls the kane-cli export + execution step), `max_tests_to_author` (number, default `0` = no cap — caps how many of the planner's generated tests actually get authored).
- **Required secrets:** `KANE_USERNAME`, `KANE_ACCESS_KEY`, `LT_USERNAME`, `LT_ACCESS_KEY` — not yet added to the repo as of 2026-08-17, so early runs failed at the `kane-cli login` step until the user adds them.
- **Stages:**
  - **planner** — `kane-cli generate <objective> --files <doc> --agent` (objective and `--save` cannot be combined in one call — CLI errors with "--save takes no objective; use --refine to add to a request"), then a separate `kane-cli generate --save --req <id> --agent` call, with the `request_id` parsed out of the first call's `generate_done` JSON line.
  - **authoring** — first selects which generated `*_test.md` files to author: lists all of them (sorted), and if `max_tests_to_author` is set (>0) and less than the total, slices the first N into `selected_tests.txt` — this is the customizable limit on "number of tests created in planner which will then be authored." Then runs `kane-cli testmd run <file> --headless --agent --code-export --code-language <lang>` per selected test. This single call both syncs the test to TMS *and* exports the automation code — `kane-cli testmd export` alone fails with "this test has not been synced to TMS — run kane-cli testmd run first" if called on a test that was only generated (never executed). `--headless` is required: GitHub-hosted `ubuntu-latest` runners have no display server, so non-headless Chrome fails with "Chrome exited during startup with code 1".
  - **execution** — installs deps and runs each exported test file (`node test.js` / `python3 test.py`) against LambdaTest, publishing to the LambdaTest Test Manager build view. Requires `TESTMU_RUN_TARGET=cloud` in the step env alongside `LT_USERNAME`/`LT_ACCESS_KEY`/`TESTMU_SMART=1` — `@testmuai/playwright-bindings` only connects to the LambdaTest cloud grid (via a local CDP relay, no local browser binary needed) when that var is set to `cloud`; otherwise it silently falls back to launching a local Playwright Chromium, which isn't installed on the runner and crashes with "Executable doesn't exist ... chrome-headless-shell".

**Why:** User asked (2026-08-17) to make the pipeline reusable/generic for future requirements docs, not hardcoded to the Airbnb PRD, and then iteratively debugged real CI run failures with me (bad doc-path input, `--save`+objective conflict, un-synced export, missing `--headless`, missing `TESTMU_RUN_TARGET=cloud`) until a run got past the authoring stage.

**How to apply:** For a new requirements doc in this repo, just add the PDF/DOCX and trigger the workflow (input can stay blank if it's the only doc in the root, or pass its path explicitly — repo-relative, not a URL). For a different repo wanting the same pipeline, point a caller workflow at this file with `workflow_call` rather than copy-pasting the YAML. If kane-cli's CLI behavior changes (flag names, sync requirements), re-check this against `kane-cli testmd run --help` / `kane-cli generate --help` before assuming the workflow is still correct. See [[testcase-generation-flow]] for the equivalent local (non-CI) process, and [[airbnb-search-routing-suite]] for the suite this pipeline was built against.
