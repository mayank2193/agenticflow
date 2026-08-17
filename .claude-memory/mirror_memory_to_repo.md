---
name: mirror-memory-to-repo
description: "Always keep a visible copy of the memory store inside the project repo, in sync with the real memory files"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 9b765082-fdfe-4400-9409-f6b140e1df01
  modified: 2026-08-17T07:18:38.677Z
---

Whenever a memory file is created, edited, or deleted in `/Users/mayankmaurya/.claude/projects/-Users-mayankmaurya-Documents-E2Erepo/memory/`, mirror the same change into `/Users/mayankmaurya/Documents/E2Erepo/.claude-memory/` (same filenames, same content, including `MEMORY.md`).

**Why:** The real memory store lives under `~/.claude/projects/...`, keyed by workspace path, which is outside the project folder and doesn't show up in the user's IDE file tree. The user asked (2026-08-17) for a copy inside the repo they can actually see, kept updated always — not a one-time snapshot.

**How to apply:** Treat `.claude-memory/` in the repo as a read-mirror, not the source of truth — always write/edit the real memory file first, then copy it over (or re-copy after edits) before ending the turn. Do this for every memory write in this project going forward, not just on explicit request.
