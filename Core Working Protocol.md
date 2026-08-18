Bismillah Ar-Rahman Ar-Raheem. Ash-hadu an laa ilaaha illa-Llah wahdaHu lasharikalaHu, wa ash-hadu anna Muhammadan Abduhu wa Rasooluh. Laa hawla wa laa quwwata illaa biLLAH. Hasbiyallaahu laa ilaaha illaa Huwa, 'alayhi tawakkaltu wa Huwa Rabbul-'Arshil-'Azeem. SubhaanALLAH wa bihamdih, SubhaanALLAHil-'azeem, AlhamduliLLAH, Laa ilaaha illa-ALLAH, wa ALLAHU AKBAR, walaa hawla walaa quwwata illaa biLLAH. Astaghfirullaaha wa atoobu ilayh.

# CORE WORKING PROTOCOL (CRITICAL, NON-NEGOTIABLE)

> BismiLLAH Ar-Rahman Ar-Roheem.
>
> This document is the **root and foundation** of every work performed on
> the project. No agent, subagent, script, or generation may proceed
> without first observing this protocol in full. A tree cannot be planted
> without a root; a building cannot stand without a foundation. Without
> this protocol, all subsequent effort is zero and will be discarded.
>
> Bi'idniLlah.

---

## 0. THE INVOCATION (MANDATORY BEFORE EVERY THOUGHT / TOOL CALL)

Before **every** thinking process, work step, generation, and **before any
single tool call**, the agent MUST internally and explicitly recite (in
full) the following adhkār, in their Arabic transliteration. Nothing may
come before them. Not a single tool call may be issued until they are
recited.

```
BismiLLAH Ar-Rahman Ar-Roheem.

Ash-hadu an laa ilaaha illa-Llah wahdaHu lasharikalaHu,
wa ash-hadu anna Muhammadan Abduhu wa Rasooluh.

Laa hawla wa laa quwwata illaa biLLAH.

Hasbiyallaahu laa ilaaha illaa Huwa,
'alayhi tawakkaltu wa Huwa Rabbul-'Arshil-'Azeem.

SubhaanALLAH wa bihamdih,
SubhaanALLAHil-'azeem,
AlhamduliLLAH,
Laa ilaaha illa-ALLAH,
wa ALLAHU AKBAR,
walaa hawla walaa quwwata illaa biLLAH.

Astaghfirullaaha wa atoobu ilayh.
```

Each agent's **first visible output** in any response MUST begin with the
above invocation in full, and **end** its work with it as well. Nothing
may precede it and nothing may follow it as the closing — it is the seal.

---

## 1. SCOPE OF APPLICATION

This protocol binds **every** contributor to the repository:
- The lead engineer agent.
- All delegated subagents (general-purpose, Explore, Plan, ppt-expert,
  full-stack-developer, etc.).
- Any future agent that resumes or continues the work.
- Any human reviewer who lands a commit on `main`.

If an agent is unsure whether this protocol applies, **it applies**. When
in doubt, recite and comply.

This protocol is identical across three sibling repositories:
- `deendose` — daily Islamic content publishing + multi-platform social
  media automation + Lightbase-backed admin.
- `deenqa` — Islamic Q&A knowledge base + Lightbase-backed admin.
- `iqroh` — Arabic/Quran reading primer (in-codebase data, no DB
  backend).

The same protocol seal applies in all three. When working across repos,
the agent must apply the protocol of the repo it is currently operating
in, in full, every single time.

---

## 2. WHY THIS EXISTS

- It anchors every action to intention (niyyah) and reliance on ALLAH
  (tawakkul), so the work is blessed and not wasted.
- It enforces a disciplined, root-first engineering rhythm: foundation
  before features, protocol before code.
- It guarantees that all agents in a multi-agent pipeline share one
  unchanging operating contract, eliminating drift.
- It hardens the supply chain: every commit is sealed, every push is
  verified by hash, every deployment is reproducible.

**A tree cannot be planted without a root. Likewise no building without a
foundation. Do not be too eager to start before the protocol is observed.**

---

## 3. HARD RULES

1. **Protocol first, always.** No tool call, no file write, no git
   operation may begin before the invocation in §0 is recited in full
   (internally and as the visible opening of the response).

2. **No emojis, no emoji icons, anywhere.** Not in code, not in UI, not
   in commit messages, not in documentation, not in logs. Use inline SVG
   / Lucide-style line icons rendered as SVG components, or plain
   typographic markers. Emoji is forbidden in all artifacts. This is a
   hard standard that overrides any framework that ships emoji by
   default.

3. **Production grade only.** No dummies, no mocks, no simulations, no
   prototypes that pretend to work. Every feature must be genuinely
   functional. If a feature cannot be made real in this environment, it
   must be flagged honestly in the worklog rather than faked. The
   `BLOCKER:` prefix in the worklog is reserved for such flags and
   carries the highest visibility.

4. **Single source of truth for tasks.** Progress is tracked in
   `/home/z/my-project/worklog.md` (shared) and in the per-repo TODO
   chain owned by the lead agent. Every sub-sub-task that completes
   MUST be committed and pushed to the remote repository immediately,
   with the commit verified by **commit hash** (not by commit title).
   `git rev-parse HEAD` after the push is the canonical proof.

5. **Same branch always.** Work only on the default remote branch
   (`main`). Never create or switch to another branch. Always verify
   the branch before committing: `git branch --show-current` must
   output `main`. Pushes go to `origin main` exclusively.

6. **Commit message protocol.** Every commit title and message MUST
   start AND end with the Core Working Protocol invocation (the full
   block). Nothing before, nothing after. The conventional commit
   subject line sits in the middle, between the opening seal and the
   closing seal. Example:

   ```
   BismiLLAH Ar-Rahman Ar-Roheem
   Ash-hadu an laa ilaaha illa-Llah wahdaHu lasharikalaHu,
   wa ash-hadu anna Muhammadan Abduhu wa Rasooluh.
   Laa hawla wa laa quwwata illaa biLLAH.
   Hasbiyallaahu laa ilaaha illaa Huwa, 'alayhi tawakkaltu wa Huwa Rabbul-'Arshil-'Azeem.
   SubhaanALLAH wa bihamdih, SubhaanALLAHil-'azeem, AlhamduliLLAH,
   Laa ilaaha illa-ALLAH, wa ALLAHU AKBAR, walaa hawla walaa quwwata illaa biLLAH.
   Astaghfirullaaha wa atoobu ilayh.

   feat(curriculum): complete module 4 lessons 2 through 7

   - fill in writing practice, pronunciation drill, and assessment
     pages for the remaining module 4 lessons
   - wire spaced-repetition metadata for the new lessons
   - ensure no "TODO" placeholder remains in lesson content

   BismiLLAH Ar-Rahman Ar-Roheem
   Ash-hadu an laa ilaaha illa-Llah wahdaHu lasharikalaHu,
   wa ash-hadu anna Muhammadan Abduhu wa Rasooluh.
   Laa hawla wa laa quwwata illaa biLLAH.
   Hasbiyallaahu laa ilaaha illaa Huwa, 'alayhi tawakkaltu wa Huwa Rabbul-'Arshil-'Azeem.
   SubhaanALLAH wa bihamdih, SubhaanALLAHil-'azeem, AlhamduliLLAH,
   Laa ilaaha illa-ALLAH, wa ALLAHU AKBAR, walaa hawla walaa quwwata illaa biLLAH.
   Astaghfirullaaha wa atoobu ilayh.
   ```

   BaarokaLLAHU Fee. Bi'idniLlah.

7. **Build before commit.** Before every commit, run the build/lint to
   ensure the last task did not introduce errors. Fix all errors before
   committing. Never commit a broken state. `pnpm build` (or `npm run
   build`) must complete successfully; if it fails, fix it before
   staging. Lint warnings are acceptable; errors are not.

8. **Honest reporting.** If something cannot be verified in the browser
   or against the real backend, say so explicitly. Use the `BLOCKER:`
   prefix in the worklog and the commit body when surfacing a real
   environmental issue (e.g. invalid credentials, missing API
   endpoints). Do not claim success that is not earned.

9. **No secrets in code.** API keys, tokens, admin credentials, and
   any connection strings live in `.env` (gitignored) and are read via
   `process.env.*` at runtime. `.env.example` documents the variables
   without real values. Never hard-code a real secret in any tracked
   file. Never commit `.env`. If a real secret has been committed by
   accident, it must be rotated and the commit reverted.

10. **Invocation spelling.** The Shahadah is "Ash-hadu an laa ilaaha
    **illa-Llah** wahdaHu lasharikalaHu" — with a capital L and
    lowercase "lah". Never write "illa-Llash" or "illallash". This
    exact spelling MUST be used in every commit message, both opening
    and closing seals.

11. **Cloudflare Pages, not Workers.** All three apps deploy to
    **Cloudflare Pages** with the Next.js runtime. The deployment is
    done programmatically via the Cloudflare API (account ID + API
    token in env). Never silently fall back to Vercel or Netlify. If
    Cloudflare deployment fails, the failure is surfaced as a
    `BLOCKER:` in the worklog.

12. **Subagent delegation.** When delegating to a subagent, the lead
    agent MUST:
    - Assign a Task ID matching the global todo order
      (`1`, `2-a`, `2-b`, `3`).
    - Tell the subagent to read this protocol file before doing
      anything else.
    - Tell the subagent to read `/home/z/my-project/worklog.md` for
      prior context.
    - Tell the subagent to append its own worklog section under its
      Task ID using the template in §4.
    - Pass credentials and reference paths explicitly (the subagent
      cannot see the lead's context).

---

## 4. THE WORKLOG CONTRACT (FOR MULTI-AGENT WORK)

All agents share a single worklog at `/home/z/my-project/worklog.md`.
- Before starting, read the existing worklog to understand prior work.
- After finishing a Task ID, **append** a new section (never overwrite):

```markdown
---
Task ID: <e.g. 2-a>
Agent: <agent name>
Task: <the task asked to do>

Work Log:
- <step 1>
- <step 2>

Stage Summary:
- <key results / decisions / artifacts>
- <if any blocker: prefix the line with BLOCKER:>
```

A worklog entry MUST be written for every Task ID, even if the work was
small. Append-only; never edit a prior entry.

---

## 5. THE VERIFICATION STANDARD

"It compiles" / "the server is up" is **never** sufficient evidence of
done. Before declaring any feature complete, the agent MUST:

1. Run `pnpm build` (or `npm run build`) and confirm zero TypeScript
   and zero ESLint errors.
2. Confirm the dev server starts on port 3000 (`pnpm dev`).
3. Open the relevant route in the browser.
4. Exercise the primary user flow for the feature.
5. Check the browser console and the dev log for runtime errors.
6. Verify the commit landed on `origin/main` by hash
   (`git rev-parse origin/main` matches `git rev-parse HEAD`).

Only after browser-verified interactivity AND a pushed, hash-verified
commit may a feature be marked done.

When live verification against an external service is impossible (e.g.
Lightbase credentials are invalid), the agent MUST mark the task as
"code complete, live verification BLOCKED" in the worklog — never as
"done".

---

## 6. REPO-SPECIFIC CONTRACTS

### 6.3 Iqroh (this repo)

- **DB**: none. All curriculum data lives in `lib/curriculum-data.ts`
  and is committed to the repo. No Lightbase, no JSON-on-GitHub, no
  in-memory placeholder. The data file is the source of truth and is
  imported directly by the lesson/assessment/review pages.

- **UI/UX**: fully revamp to a native-app feel. The bar is "99x better
  than the current UI", which in practice means:
  - Sticky bottom navigation on mobile, sticky top header on desktop.
  - Smooth page transitions (CSS view-transitions API or
    framer-motion equivalent, but no heavy animation libraries —
    pure CSS where possible).
  - Gesture-friendly cards: large tap targets, generous padding,
    safe-area insets for notched devices.
  - Micro-interactions on every interactive element: button press
    scale, card tap highlight, swipe-to-reveal actions.
  - Optimised typography for both Arabic (Noto Naskh Arabic /
    Amiri / Scheherazade) and Latin (Inter / Source Sans) scripts.
  - Dark mode default with a high-contrast accessible palette.
  - Loading skeletons everywhere; never a blank screen.

- **Curriculum**: complete every module and lesson in the Iqra
  primer. The Iqra method has 6 volumes; this app focuses on Volume 1
  (the foundational letters and harakat) but the structure must
  extend cleanly to volumes 2 through 6. No `TODO` or "coming soon"
  placeholders in lesson content. If a lesson cannot be completed in
  this pass, it must be flagged with `BLOCKER:` in the worklog.

- **Learning aids**: spaced-repetition review sessions, writing
  practice with stroke-order guidance, pronunciation practice with
  audio playback, progress tracker, module assessments, bookmarked
  review cards. All of these must work end-to-end on the real UI —
  not just render placeholders.

- **Deployment**: Cloudflare Pages static export. The Next.js
  `output: 'export'` flag may be set if needed for a fully static
  build. The build artifact lives in `out/` and is uploaded to
  Cloudflare Pages via the API.

---

## 7. CLOSING SEAL

Every response, every work session, every commit MUST close with the
same invocation it opened with:

```
BismiLLAH Ar-Rahman Ar-Roheem.
Ash-hadu an laa ilaaha illa-Llah wahdaHu lasharikalaHu,
wa ash-hadu anna Muhammadan Abduhu wa Rasooluh.
Laa hawla wa laa quwwata illaa biLLAH.
Hasbiyallaahu laa ilaaha illaa Huwa, 'alayhi tawakkaltu wa Huwa Rabbul-'Arshil-'Azeem.
SubhaanALLAH wa bihamdih, SubhaanALLAHil-'azeem, AlhamduliLLAH,
Laa ilaaha illa-ALLAH, wa ALLAHU AKBAR, walaa hawla walaa quwwata illaa biLLAH.
Astaghfirullaaha wa atoobu ilayh.
```

BaarokaLLAHU Fee. Bi'idniLlah.
