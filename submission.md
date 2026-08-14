# Project Submission Report

## 1. Student Details

- **Full Name:** Alvin Kariuki Mathenge
- **GitHub Username:** MathengeAlvin
- **Email:** alvin.mathenge@strathmore.edu

---

## 2. Deployed Project Link

- **Live GitHub Pages URL:** https://is-project-2026.github.io/fitness-tracker-159096/

---

## 3. Reflection — Grounded in Your Git History

> **Rules:** Every answer below **must include a direct link** to the specific commit, PR, issue, or branch in your repository that demonstrates what you are describing. Answers without working links will not be graded. Generic explanations that could apply to any project will receive zero marks.
>
> **Marks:** A (2 marks) · B (1 mark) · C (1 mark) · D (1 mark) = **5 marks total**

### A. Your Best Commit

Paste the URL of the commit in your history that you think best demonstrates clean conventional commit practice (good type tag, clear subject, meaningful body or footer).

- **Commit URL:** https://github.com/IS-PROJECT-2026/fitness-tracker-159096/commit/867d8fe
- **Why this one?** This commit uses a clear conventional type prefix (`chore:`) with a descriptive, concise subject line explaining the exact reorganization of the `evidence/` directory to adhere to project constraints.

### B. A Mistake or Struggle

Link to a commit, PR, or issue where something went wrong — a bad commit message you had to fix, a branch you had to delete and recreate, a PR that needed rework, or a deployment that broke. 

- **Link to the evidence:** https://github.com/IS-PROJECT-2026/fitness-tracker-159096/pull/15
- **What happened and how did you recover?** While organizing project evidence, duplicate assets and non-standard naming conventions were introduced outside the subfolders. I closed the redundant PR (#15) and subsequently created a dedicated cleanup branch (`chore/standardize-evidence-filenames`) via PR #22 to cleanly restructure and rename the files to match project specifications.

### C. A Pull Request You're Proud Of

Paste the URL of the PR that best shows your self-review process — one where the description is clear, the issue linkage is correct, and the diff tells a coherent story.

- **PR URL:** https://github.com/IS-PROJECT-2026/fitness-tracker-159096/pull/21
- **What did you check before merging?** I verified that the competing initialization logic in `assets/js/main.js` was fully resolved with all raw conflict markers removed, confirmed that the evidence screenshot was staged, and ensured the PR correctly referenced and closed Issue #6.

### D. One Thing You Would Do Differently

If you had to restart this project from scratch with everything you know now, name one specific workflow decision you would change (not a code change — a Git/project management decision).

- **What would you change?** I would establish a strict evidence folder naming convention and standardize the asset directory structure from Day 1 rather than restructuring folders midway through branch merges.
- **Link to the evidence of the original decision:** https://github.com/IS-PROJECT-2026/fitness-tracker-159096/pull/14

---

## 4. Screenshots of Key GitHub Features

Demonstrate your workflow mechanics by embedding your screenshots below.

> **CRITICAL FOR WORKING IMAGES:** Do not type manual folder paths. Edit this file directly on the GitHub web interface, click on the blank line below each prompt, and **paste (Ctrl+V / Cmd+V)** your screenshot. GitHub will automatically upload the file and generate a permanent, working image link for you.

### A. Milestones and Issues
*Provide a screenshot showing your active milestone(s) and the granular tracking issues linked directly to them.*

[PASTE YOUR MILESTONE SCREENSHOT DIRECTLY HERE]

* **Caption:** GitHub Milestones dashboard displaying granular project tracking issues linked across project milestones.

### B. Project Board
*Provide a screenshot of your GitHub Project Board with your issues organized dynamically across columns (To Do, In Progress, Done).*

[PASTE YOUR PROJECT BOARD SCREENSHOT DIRECTLY HERE]

* **Caption:** Automated GitHub Kanban Project Board showing all issues (#1 through #6) moved to the Done column.

### C. Branching Architecture
*Provide a screenshot showing your local or remote Git branch list, highlighting your use of conventional, issue-linked naming patterns (e.g., `feat/`, `fix/`, `style/`).*

[PASTE YOUR BRANCHING SCREENSHOT DIRECTLY HERE]

* **Caption:** Git branch list displaying structured naming conventions (`feat/`, `fix/`, `chore/`) mapped to tracking issues.

### D. Pull Requests & Traceability
*Provide a screenshot of a completed or open Pull Request (PR) on GitHub that clearly shows it is linked to a related development issue.*

[PASTE YOUR PULL REQUEST SCREENSHOT DIRECTLY HERE]

* **Caption:** Merged Pull Request #21 showing issue traceability using closing keyword `Closes #6`.

---

## 5. Merge Conflict Evidence

You must engineer **three merge conflicts**, each triggered by a **different cause** from those covered in the lecture. For Conflict 1, document the full resolution lifecycle. For Conflicts 2 and 3, provide the conflict marker screenshot and identify the cause.

> **Marks:** Conflict 1 full chronology (2 marks) · Conflict 2 (1 mark) · Conflict 3 (1 mark) · All three use distinct causes (1 mark) = **5 marks total**

---

### Conflict 1 — Full Chronology

**What cause did you use?** Same Line / Concurrent Modification Collision

#### Step 1: Generating the Clash
*Screenshot showing the merge attempt and the conflict warning.*

[PASTE SCREENSHOT OF ATTEMPTED MERGE / TERMINAL WARNING HERE]

* **Caption:** Terminal error showing Git merge collision between competing feature branches modifying the exact same line in `index.html`.

#### Step 2: Inside the Code Editor (Conflict Markers)
*Screenshot showing the raw, unresolved conflict markers (`<<<<<<< HEAD`, `=======`, `>>>>>>>`) in your editor.*

[PASTE SCREENSHOT OF RAW CONFLICT MARKERS HERE]

* **Caption:** Visual Studio Code editor displaying raw conflict markers on the application header element.

#### Step 3: Resolution & Clean Merge
*Screenshot of your clean Git history or completed PR showing the conflict was resolved and merged.*

[PASTE SCREENSHOT OF CLEAN RESOLUTION HERE]

* **Caption:** Closed Pull Requests list and clean Git commit log demonstrating PR #13 merged cleanly into `main`.

---

### Conflict 2 — Different Cause

**What cause did you use?** Delete vs. Modify Conflict

**Why does this cause trigger a conflict?** This conflict occurs when one branch deletes a target file (`assets/css/style.css`) while a concurrent branch adds new style rule modifications to the exact same file. Git cannot automatically decide whether to prioritize the deletion or retain the incoming code changes.

[PASTE SCREENSHOT OF CONFLICT MARKERS FOR CONFLICT 2 HERE]

* **Caption:** Terminal output showing the `CONFLICT (modify/delete)` error state when attempting to merge `origin/main` into the CSS modification branch.

---

### Conflict 3 — Different Cause

**What cause did you use?** Competing Content Edits on Shared JavaScript File

**Why does this cause trigger a conflict?** This conflict is triggered when two branches modify the same initialization logic at the top of `assets/js/main.js` independently. Because the diffs overlap on identical line offsets, Git flags a collision and inserts conflict markers (`<<<<<<< HEAD`, `=======`, `>>>>>>> origin/main`) requiring manual reconciliation.

[PASTE SCREENSHOT OF CONFLICT MARKERS FOR CONFLICT 3 HERE]

* **Caption:** VS Code editor displaying active conflict markers on line 1 of `assets/js/main.js` prior to cleanup and PR #21 merge.