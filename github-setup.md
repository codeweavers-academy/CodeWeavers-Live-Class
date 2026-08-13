# 🚀 CodeWeavers
## Git + GitHub — Assignment Submission Setup Guide

> **Goal:** Apna assignment GitHub par successfully push karna.
> ⏱️ **Setup Time:** ~30 Minutes  •  🎯 **Focus:** Setup → Commit → Push → Verify

---

## 🧭 Aaj Ka Roadmap

```
Git → Configure Git → Create GitHub Repo → Connect Local Project
   → git init → git add → git commit → git push → GitHub ✅
```

**Aaj ke liye itna hi.** ❌ Branches · ❌ Pull Requests · ❌ Merge Conflicts · ❌ Advanced Git — *sab kuch baad mein.*

---

## Part 1 — Git Setup

### 01. Check Git

```bash
git --version
```

| Result | Meaning |
|---|---|
| ✅ `git version 2.x.x` | Git installed hai — aage badho |
| ❌ Command not recognized | Git install karo → [git-scm.com](https://git-scm.com/) → VS Code restart karo → dobara try karo |

### 02. Configure Your Name

```bash
git config --global user.name "Your Name"
```
```bash
git config --global user.name "Rahul Kumar"
```

### 03. Configure Your Email

*(Use the email associated with your GitHub account)*

```bash
git config --global user.email "your-email@example.com"
```

### 04. Verify Configuration

```bash
git config --global user.name
git config --global user.email
```

---

## Part 2 — GitHub Setup

### 05. Create Your GitHub Account

Go to [github.com](https://github.com/) → **Login** if you have an account, else **Sign Up**.

> ⚠️ Your GitHub username becomes part of every repo URL — e.g. `github.com/rahulkumar`

### 06. Create a Repository

**New Repository** → give it a clear name:

```
codeweavers-day10-functions
```

> ⚠️ **Important:** Create an **empty** repository.
> Do **NOT** add: README · .gitignore · License
> *(We'll connect our existing local project to it.)*

---

## Part 3 — Connect & Push

### 07. Open Your Project

Open your assignment folder in VS Code:

```
codeweavers-day10-functions/
│
├── day10-functions.js
├── README.md
└── ...
```

### 08. Open Terminal

`Terminal → New Terminal` — make sure you're inside the project folder:

```bash
pwd              # Mac/Linux
Get-Location      # Windows PowerShell
```

### 09. Initialize Git

```bash
git init
```

```
Your project folder → becomes → Git repository
```

### 10. Check Status

```bash
git status
```
Expect to see untracked files like `day10-functions.js`, `README.md`.

### 11. Add Your Files

```bash
git add .
```

`.` = *add changes from the current project directory.*

Then re-check:
```bash
git status   # files now show under "Changes to be committed"
```

### 12. Create Your First Commit

```bash
git commit -m "Add Day 10 functions assignment"
```

```
Working Files → git add → Staging → git commit → Saved Version
```

### 13. Connect Your GitHub Repository

Copy your repo URL from GitHub, e.g.:
```
https://github.com/username/codeweavers-day10-functions.git
```

```bash
git remote add origin https://github.com/username/codeweavers-day10-functions.git
```
> ⚠️ Replace with **your own** repository URL.

### 14. Verify Remote

```bash
git remote -v
```
```
origin  https://github.com/username/codeweavers-day10-functions.git (fetch)
origin  https://github.com/username/codeweavers-day10-functions.git (push)
```
```
Local Project → origin → GitHub Repository
```

### 15. Push Your Project 🚀

```bash
git branch -M main
git push -u origin main
```

> 🔐 **If GitHub asks you to login:** follow the official GitHub authentication window. **Never** type your GitHub password into random terminal prompts or websites.

### 16. Verify on GitHub

Refresh your GitHub repo page — you should see your files **and** your commit message:
```
Add Day 10 functions assignment
```

🎉 **Your assignment is now on GitHub.**

---

## 🧠 The Complete Workflow

*Memorize the workflow — not random commands.*

```
CREATE PROJECT → git init → git status → git add .
→ git commit -m "message" → connect GitHub → git push → VERIFY ON GITHUB
```

### 🔁 For Future Assignments

Once Git + GitHub are connected, you normally **don't** need `git init` again — just:

```bash
git status
git add .
git commit -m "Describe your changes"
git push
```

```bash
# Example
git add .
git commit -m "Complete loop practice"
git push
```

---

## 🐞 Common Problems

| # | Problem | Fix |
|---|---|---|
| 1 | `git is not recognized...` | Install Git → restart VS Code → `git --version` |
| 2 | Wrong GitHub repo URL | `git remote -v` to check → `git remote remove origin` → `git remote add origin YOUR_URL` |
| 3 | `nothing to commit, working tree clean` | No new changes to save — check `git status` |
| 4 | Push rejected | Don't panic. Read the **full** terminal error. Don't randomly run commands — send the error to your mentor |
| 5 | Wrong folder | Run `pwd` / `Get-Location` — make sure you're inside the project folder |
| 6 | `remote origin already exists` | `git remote -v` to check URL → correct? continue. wrong? `git remote remove origin` then re-add |

---

## 🧪 Final Check

Before saying *"Sir, mera assignment push ho gaya"* — verify all three:

1️⃣ **Terminal** → `git status`
2️⃣ **Remote** → `git remote -v`
3️⃣ **GitHub** → open the repo in browser, confirm latest files are visible

---

## 📋 Student Submission

After a successful push, send your mentor:

```
Name:
GitHub Username:
Repository:
Assignment:
```

**Example:**
```
Name: Rahul Kumar
GitHub Username: rahulkumar
Repository: codeweavers-day10-functions
Assignment: Day 10 Functions
```

**Repository link:**
```
https://github.com/USERNAME/REPOSITORY
```

---

## 🏆 30-Minute Live Setup Checklist

- [ ] Git installed
- [ ] `git --version` works
- [ ] Git name configured
- [ ] Git email configured
- [ ] GitHub account ready
- [ ] GitHub repository created
- [ ] Assignment folder opened
- [ ] Terminal opened
- [ ] `git init` completed
- [ ] `git status` checked
- [ ] `git add .` completed
- [ ] First commit created
- [ ] GitHub remote connected
- [ ] `git remote -v` verified
- [ ] `git push` completed
- [ ] GitHub repository verified
- [ ] Assignment link submitted

---

## 💡 Remember: Git ≠ GitHub

| GIT | GITHUB |
|---|---|
| Version control tool | Online platform |
| Works on your computer | Stores and shares Git repositories |

```
YOUR COMPUTER
     │ Git
     ▼
LOCAL REPOSITORY
     │ git push
     ▼
GITHUB
     │
     ▼
ONLINE REPOSITORY
```

---

## 🚀 The 4 Commands You'll Use Most

| Command | Purpose |
|---|---|
| `git status` | Check what changed |
| `git add .` | Prepare changes |
| `git commit -m "Describe your changes"` | Save a version |
| `git push` | Send it to GitHub |

---

## 🎯 Engineering Habit

> Do not wait until the project is completely finished to use Git.

CodeWeavers expects students to develop **regular Git commit discipline** and maintain organized repositories throughout the program.

```
Code → Test → Commit → Continue → Commit → Push
```

> Your GitHub repository is not just a place to submit assignments — **it is the beginning of your engineering portfolio.**

---

*— End of Git + GitHub Setup Guide —*