# DISAL Hosting Platform — UI/UX User Flow & Screen Specification

> **Last updated:** February 2026  
> **Team:** Student Side (Him) · Admin Side (Her)  
> **Brand:** Orange `#E8792B` + Navy `#1B3A5C` · Light-mode-first  
> **Inspiration:** Vercel · Render · Railway

---

## Table of Contents

1. [Design Principles & Inspiration Guide](#1-design-principles--inspiration-guide)
2. [What To Look At On Each Platform](#2-what-to-look-at-on-each-platform)
3. [Shared Screens (Both Partners)](#3-shared-screens-both-partners)
4. [Student Flow — Complete Screen Spec](#4-student-flow--complete-screen-spec-him)
5. [Admin Flow — Complete Screen Spec](#5-admin-flow--complete-screen-spec-her)
6. [Navigation Maps](#6-navigation-maps)
7. [User Scenarios (Happy + Edge Cases)](#7-user-scenarios)
8. [Component Library Reference](#8-component-library-reference)
9. [Flowchart → Screen Mapping](#9-flowchart--screen-mapping)

---

## 1. Design Principles & Inspiration Guide

### Core Principles (Steal These From The Pros)

| Principle | What It Means | Who Does It Best |
|-----------|--------------|-----------------|
| **Progressive Disclosure** | Show only what's needed now. Details behind clicks. | Vercel — cards show status, click for logs |
| **Status Visibility** | Every project/service ALWAYS shows its current state | All three — green/orange/red dots everywhere |
| **Empty States Guide Users** | Never show a blank screen. Tell users WHY it's empty + what to do next | Vercel — "You don't have any projects yet" + CTA |
| **Action-Based Labels** | Buttons say what they DO: "Deploy Now", not "Submit" | Vercel — "Import Project", "Add Domain" |
| **Redundant Status Encoding** | Color + text + icon together (accessibility) | Render — dot + "Live" text + check icon |
| **Minimal Chrome** | Clean borders, subtle shadows, white space breathes | Vercel — barely any shadows in light mode |
| **Monospace For Technical Data** | Ports, URLs, commit hashes, logs → JetBrains Mono | All three — every URL/hash is mono |

### DISAL Brand Application

```
Primary Actions (buttons, links, focus rings):  Orange #E8792B
Headings & Strong Text (light mode):            Navy   #1B3A5C  
Page Background:                                 #FAFAFA (warm white)
Card/Panel Background:                           #FFFFFF (pure white)
Borders:                                         #E4E4E7 (zinc-200)
Body Text:                                       #52525B (zinc-600)
Muted/Caption Text:                              #71717A (zinc-500)
```

### Typography Rules

| Usage | Font | Weight | Example |
|-------|------|--------|---------|
| Page titles | Inter | 800 (ExtraBold) | "Your Projects" |
| Section headings | Inter | 700 (Bold) | "Recent Deployments" |
| Body/labels | Inter | 400-500 | "Last deployed 2 min ago" |
| Buttons | Inter | 500 (Medium) | "Create Project" |
| Ports, URLs, hashes, logs | JetBrains Mono | 400 | `:9005`, `abc1234` |
| Code blocks, TOML preview | JetBrains Mono | 400 | `npm run build` |

---

## 2. What To Look At On Each Platform

### 🔺 VERCEL — vercel.com (Primary Inspiration)

Go to these exact pages and study them:

| What To Visit | What To Look For | Use It For |
|--------------|-----------------|------------|
| **vercel.com** (landing page) | Hero section: big heading, subtext, one orange-equivalent CTA, deployment pipeline visual below. Feature cards at bottom. Clean footer. | Our Landing Page |
| **vercel.com/login** | Centered card, multiple auth options, minimal design, no sidebar | Our Login Page |
| **Dashboard (after login)** | Sidebar: collapsible, shows team/personal switch at top. Project cards in grid with status dots. Filter bar (All/Active). "Add New" button top-right | Our Student Dashboard + Admin Project List |
| **vercel.com/geist/colors** | Their entire color scale system — 10 shades per color. See how Background 1 vs 2 work | How we use our orange/navy scales |
| **vercel.com/geist/button** | Button sizes (sm, md, lg), variants (primary, secondary, ghost, danger). No gradients in light mode! | Our button styles |
| **vercel.com/geist/badge** | Status badges: gray, blue, green, red, amber. Small, pill-shaped, subtle | Our status pills |
| **vercel.com/geist/typography** | Heading scale 72→14, label scales, mono scales for code. Tight letter-spacing on headings | Our type hierarchy |
| **Project Dashboard** (click any project) | Tabs: Overview, Deployments, Logs, Settings. URL display with copy button. Branch indicators. Build log viewer | Our Project Detail page |
| **Empty state** (new account, no projects) | Illustration + "No projects yet" + "Import Project" CTA. Friendly, not scary | Our Empty Dashboard |
| **Create project flow** | Modal/page: select Git provider → pick repo → configure → deploy. Progressive steps, not all at once | Our Create Project Modal |
| **Deployment detail** | Status timeline, commit info, build duration, live URL. Realtime log stream (dark bg, monospace) | Our deployment view |
| **Theme switcher** (vercel.com/geist/theme-switcher) | System/Light/Dark toggle. See how colors adapt | Our theme toggle |

### 🟢 RENDER — render.com

| What To Visit | What To Look For | Use It For |
|--------------|-----------------|------------|
| **Dashboard** (after login) | Service list (not cards — list rows), status dots, type labels (Web Service, Database, etc.), "+ New" button prominent top-right | Admin project list alternative view |
| **Service detail page** | Tabs with metrics (CPU, RAM charts), events overlaid on timeline, log viewer, settings panel | Admin Project Detail with metrics |
| **Render Dashboard docs** (render.com/docs/render-dashboard) | Workspace dropdown in sidebar, navigation structure, filter/search patterns | Admin sidebar design |
| **Metrics page** | Time-range selector, CPU/RAM/Disk as line charts, status events as dotted lines overlaid | Our metrics display |
| **Theme settings** | Light/Dark + high contrast option. Log explorer has its OWN theme setting | Our theme implementation |
| **Create service flow** | Click "+ New" → select service type → fill details. Multi-step, clear | Port allocation flow |

### 🟣 RAILWAY — railway.app

| What To Visit | What To Look For | Use It For |
|--------------|-----------------|------------|
| **railway.app** (landing) | Dark, dramatic hero. "Deploy Now" CTA. Animated deployment visual. | Inspiration for visual drama (we use lighter version) |
| **Project canvas** | Graph/node view of services with connections. Visual representation of architecture | Future enhancement idea |
| **Variables tab** | First-class env var management. Reference variables, sealed variables, autocomplete | Our project settings env vars |
| **Deploy flow** | Shows branch + commit being deployed, realtime build log, clear error messages on failure | Our deploy status view |
| **Metrics** (docs.railway.com/observability/metrics) | CPU, RAM, disk, network graphs with deployment events as dotted lines | Our metrics charts |

### Key Features To Steal (Summary Checklist)

- [ ] **Collapsible sidebar** with logo at top, nav items with icons, user profile at bottom (Vercel)
- [ ] **Project cards** with status dot + name + URL + last deploy time (Vercel)
- [ ] **"+ New" button** always visible in header or sidebar (Render)
- [ ] **Status dots:** 8px circles — green (live), orange (building/warning), red (failed), gray (stopped)
- [ ] **Copy-to-clipboard** on all URLs and ports (all three)
- [ ] **Breadcrumbs** below header: Home / Projects / My App (all three)
- [ ] **Toast notifications** bottom-right, auto-dismiss 5s (all three)
- [ ] **Empty states** with illustration + message + CTA (Vercel)
- [ ] **Monospace for technical values** everywhere (all three)
- [ ] **Subtle borders, no heavy shadows** in light mode (Vercel)
- [ ] **Action verbs on buttons:** "Create Project", "Redeploy", "Stop Service" (all three)
- [ ] **Cmd+K / Ctrl+K** command palette for power users (Vercel, Render — stretch goal)
- [ ] **View toggle:** Card view ↔ List view on project grids (Vercel)

---

## 3. Shared Screens (Both Partners)

### SCREEN S0: Landing Page (`index.html`)

**Flowchart nodes:** `student-start`, `admin-start` (entry point)  
**Primary inspiration:** vercel.com landing page

```
┌──────────────────────────────────────────────────────────────┐
│  HEADER                                                       │
│  [DISAL Logo] DISAL Hosting          [Docs]  [Sign In]  [☀️] │
├──────────────────────────────────────────────────────────────┤
│                                                               │
│              Deploy your Final Year Projects.                 │
│                   Zero infrastructure.                        │
│                                                               │
│  Push your code. We handle the rest. DISAL Hosting gives      │
│  every member a provisioned port and automated deployment.    │
│                                                               │
│         [ Get Started ]        Read the Docs →                │
│          (orange btn)          (text link)                     │
│                                                               │
│  ┌─────────────────────────────────────────────────────┐      │
│  │  DEPLOYMENT PIPELINE VISUAL                          │      │
│  │  [Git Push] ──→ [Build] ──→ [Deploy] ──→ [Live 🟢]  │      │
│  │  (animated steps, subtle borders)                    │      │
│  └─────────────────────────────────────────────────────┘      │
│                                                               │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                    │
│  │ 🔒        │  │ ⚡        │  │ 📊        │                    │
│  │Provisioned│  │ Auto     │  │ Real-Time│                    │
│  │ Access    │  │ Deploy   │  │ Metrics  │                    │
│  │ Admin     │  │ Push to  │  │ CPU, RAM │                    │
│  │ assigns   │  │ deploy   │  │ health   │                    │
│  │ your port │  │ in secs  │  │ at a     │                    │
│  │           │  │          │  │ glance   │                    │
│  └──────────┘  └──────────┘  └──────────┘                    │
│                                                               │
├──────────────────────────────────────────────────────────────┤
│  FOOTER                                                       │
│  [DISAL Logo]    Docs · GitHub · Contact    © 2026 DISAL     │
└──────────────────────────────────────────────────────────────┘
```

**Look at:** Vercel's landing — notice how the hero is ONE clear message, not 5 paragraphs. The CTA is high-contrast (their white button on dark bg; ours is orange on white bg). The pipeline visual makes the product tangible.

**Design details:**
- Background: `#FAFAFA` with subtle grid pattern (40px, 4% opacity)
- Hero heading: Inter 800, `--navy-600`, `letter-spacing: -0.03em`
- CTA button: Orange `#E8792B`, white text, `border-radius: 8px`, `padding: 12px 24px`
- Feature cards: White bg, `1px solid #E4E4E7` border, `border-radius: 12px`, icon in orange
- Grid pattern fades out at ~50% from top (mask gradient)

---

### SCREEN S0.5: Login Page (`Login.html`)

**Flowchart nodes:** `login-page` → `dassal-auth` → `account-check` → `error-message`  
**Primary inspiration:** vercel.com/login

```
┌──────────────────────────────────────────────────────────────┐
│                                                               │
│  (Subtle grid pattern background, fading)                     │
│                                                               │
│                    [DISAL Logo + Name]                         │
│                                                               │
│              ┌────────────────────────┐                       │
│              │                        │                       │
│              │   Welcome Back         │                       │
│              │   Sign in to manage    │                       │
│              │   your deployments     │                       │
│              │                        │                       │
│              │  ┌─ ERROR BANNER ────┐ │  ← Hidden by default  │
│              │  │ ⚠ Invalid creds.  │ │  ← Red bg, shown on   │
│              │  │   Please retry.   │ │     auth failure       │
│              │  └───────────────────┘ │                       │
│              │                        │                       │
│              │  Role                  │                       │
│              │  [ Student ▾ ]         │  ← Dropdown or tabs   │
│              │                        │                       │
│              │  Student ID            │                       │
│              │  [ 21005678       ]    │  ← 8-digit validation │
│              │                        │                       │
│              │  Password              │                       │
│              │  [ ••••••••    👁 ]    │  ← Show/hide toggle   │
│              │                        │                       │
│              │  [ ] Remember me       │                       │
│              │                        │                       │
│              │  [ Sign In           ] │  ← Orange primary btn │
│              │                        │                       │
│              │  No access? Contact    │                       │
│              │  your administrator.   │                       │
│              │                        │                       │
│              └────────────────────────┘                       │
│                                                               │
│              © 2026 DISAL Hosting                             │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

**Look at:** Vercel's login page — centered card, NO sidebar, just the form. Clean, zero distractions. Notice how they stack the auth options vertically. The card has a very subtle shadow, almost invisible.

**Design details:**
- Page: centered vertically + horizontally, grid pattern behind
- Card: White bg, `1px solid #E4E4E7`, `border-radius: 16px`, `box-shadow: 0 1px 3px rgba(0,0,0,0.08)`
- Title: Inter 700 24px, navy `#1B3A5C`
- Subtitle: Inter 400 14px, `#71717A`
- Input fields: `border-radius: 8px`, `1px solid #E4E4E7`, focus: `2px solid #E8792B` + orange ring
- Sign In button: Full-width, orange `#E8792B`, white text, `height: 44px` (touch-friendly)
- Error banner: `background: #FEF2F2`, `border: 1px solid rgba(220,38,38,0.2)`, `color: #DC2626`

**State transitions:**
1. User enters credentials → clicks "Sign In"
2. Button text changes to "Authenticating..." with `opacity: 0.75`
3. **SUCCESS (Student):** → redirect to Empty Dashboard or Projects Dashboard
4. **SUCCESS (Admin):** → redirect to Admin Dashboard
5. **FAILURE:** → error banner slides in, button resets, fields stay filled

---

## 4. Student Flow — Complete Screen Spec (Him)

### SCREEN S1: Empty Dashboard (`Empty Dashboard.html`)

**Flowchart node:** `dashboard` (initial state, no projects)  
**Primary inspiration:** Vercel empty dashboard state

```
┌────────────┬─────────────────────────────────────────────────┐
│  SIDEBAR   │  HEADER                                         │
│            │  Home / Dashboard        [🔔] [+ New Project]   │
│  [D] DISAL ├─────────────────────────────────────────────────┤
│  PLATFORM  │                                                  │
│            │                                                  │
│  ● Dashboard│            (empty state centered)               │
│    Logs     │                                                  │
│  ──────────│         ┌──────────────────────┐                │
│    Docs     │         │   📦                  │                │
│            │         │                      │                │
│            │         │   No Projects Yet    │                │
│            │         │                      │                │
│            │ STATE A: │   Create your first  │                │
│            │ (has port)│  project and deploy │                │
│            │         │   it in seconds.     │                │
│            │         │                      │                │
│            │         │  [ + New Project ]   │  ← Orange CTA  │
│            │         │                      │                │
│            │         └──────────────────────┘                │
│            │                                                  │
│            │         ┌──────────────────────┐                │
│            │ STATE B: │   ⏳                  │                │
│            │ (no port)│                      │                │
│            │         │   Waiting for Access  │                │
│            │         │                      │                │
│            │         │   Your administrator │                │
│            │         │   needs to provision │                │
│  ──────────│         │   a port before you  │                │
│  [S] Student│        │   can deploy.        │                │
│  s@disal.io │        │                      │                │
│  [☀️]       │         │   Port: Not assigned │  ← Gray mono  │
│            │         │                      │                │
│            │         └──────────────────────┘                │
└────────────┴─────────────────────────────────────────────────┘
```

**Look at:** Vercel's empty project state. Notice: illustration + short message + one clear CTA. No walls of text. The message explains WHY it's empty.

**Design details:**
- Sidebar: `width: 256px`, white bg, `border-right: 1px solid #E4E4E7`
- Active nav item: `bg: #FFF7ED` (orange-50), `border-left: 2px solid #E8792B`, text: `#E8792B`
- Inactive nav: text `#71717A`, hover bg `#F4F4F5`
- Empty state icon: 48px, color `#A1A1AA`
- Message heading: Inter 600 20px, navy
- Message body: Inter 400 14px, `#71717A`, max-width 360px centered
- CTA button: Orange, `padding: 10px 20px`, with `+` icon

**States:**
- **STATE A (has port entitlement):** Shows "New Project" CTA
- **STATE B (no port):** Shows "Waiting for Access" — checks `localStorage.getItem('hasPortEntitlement')`

---

### SCREEN S2: Projects Dashboard (`Tunnel Manager Board.html`)

**Flowchart nodes:** `dashboard` (with projects), `deploy-status`, `check-settings` (auto-redeploy toggle)  
**Primary inspiration:** Vercel project grid + Render service list

```
┌────────────┬─────────────────────────────────────────────────┐
│  SIDEBAR   │  HEADER                                         │
│            │  Home / Projects         🔍 Search  [+ New]     │
│  [D] DISAL ├─────────────────────────────────────────────────┤
│  PLATFORM  │                                                  │
│            │  FILTER BAR                                      │
│  ● Dashboard│  [All] [Live] [Building] [Failed] [Stopped]    │
│    Logs     │                          Card ☐  List ☐        │
│  ──────────│                                                  │
│    Docs     │  PROJECT CARDS GRID (2-3 columns)               │
│            │                                                  │
│            │  ┌─────────────────┐  ┌─────────────────┐       │
│            │  │ 🟢 My Portfolio  │  │ 🟡 API Server    │       │
│            │  │                  │  │                  │       │
│            │  │ main · abc1234   │  │ main · def5678   │       │
│            │  │                  │  │                  │       │
│            │  │ 🔗 :9001         │  │ ⏳ Deploying...  │       │
│            │  │                  │  │                  │       │
│            │  │ 2 min ago        │  │ Just now         │       │
│            │  │                  │  │                  │       │
│            │  │ [Open] [↻] [⋯]  │  │         [⋯]     │       │
│            │  └─────────────────┘  └─────────────────┘       │
│            │                                                  │
│            │  ┌─────────────────┐  ┌ ─ ─ ─ ─ ─ ─ ─ ─┐       │
│            │  │ 🔴 ML Model     │  ╎                  ╎       │
│            │  │                  │  ╎  + New Project   ╎       │
│            │  │ main · ghi9012   │  ╎                  ╎       │
│            │  │                  │  ╎  (dashed border  ╎       │
│            │  │ ❌ Build failed  │  ╎   CTA card)      ╎       │
│            │  │                  │  ╎                  ╎       │
│            │  │ 1 hour ago       │  └ ─ ─ ─ ─ ─ ─ ─ ─┘       │
│            │  │                  │                             │
│  ──────────│  │ [Logs] [↻] [⋯]  │                             │
│  [S] Student│ └─────────────────┘                             │
│  [☀️]       │                                                  │
└────────────┴─────────────────────────────────────────────────┘
```

**Look at Vercel dashboard specifically:**
- Project cards: white card, subtle border, status dot top-left next to name
- Each card shows: project name, Git branch + short commit hash (mono), deployment URL (mono), relative time
- Filter tabs at top: horizontal pills, active = filled, inactive = ghost
- "+ Add New" button in header: small, secondary style OR as last card with dashed border
- Card hover: border goes slightly darker, subtle shadow increase

**Look at Render dashboard specifically:**
- They use LIST VIEW instead of cards — rows with columns: Name | Type | Status | Region | Last Deploy
- This is good for when you have many projects — offer a toggle between card/list view

**Design details:**
- Card: White bg, `1px solid #E4E4E7`, `border-radius: 12px`, `padding: 20px`
- Card hover: `border-color: #D4D4D8`, `box-shadow: 0 4px 6px rgba(0,0,0,0.04)`
- Status dot: `8px` circle, inline before project name
  - 🟢 Live: `#22C55E`
  - 🟡 Building: `#F59E0B` with `animation: pulse 1.5s infinite`
  - 🔴 Failed: `#EF4444`
  - ⚪ Stopped: `#A1A1AA`
- Project name: Inter 600 16px, navy
- Branch + hash: JetBrains Mono 400 12px, `#71717A`
- URL: JetBrains Mono 400 13px, orange `#E8792B`, clickable
- Relative time: Inter 400 12px, `#A1A1AA`
- Quick actions: icon buttons (24px), `color: #71717A`, hover: `color: #E8792B`
- "+ New" card: `border: 2px dashed #E4E4E7`, `border-radius: 12px`, centered `+` icon + text

**Filter bar:**
- Horizontal pill buttons: `padding: 6px 14px`, `border-radius: 9999px`
- Active: `bg: #1B3A5C`, `color: white`
- Inactive: `bg: transparent`, `border: 1px solid #E4E4E7`, `color: #71717A`

---

### SCREEN S3: Create Project Modal (overlay on dashboard)

**Flowchart nodes:** `create-modal` → `input-validation` → `error-handler` → `orch-deploy`  
**Primary inspiration:** Vercel "Import Project" flow + Render "New Service" flow

```
┌──────────────────────────────────────────────────────────────┐
│  (Dashboard blurred behind — backdrop-filter: blur(4px))      │
│                                                               │
│        ┌──────────────────────────────────┐                   │
│        │  Create New Project         [✕]  │                   │
│        ├──────────────────────────────────┤                   │
│        │                                  │                   │
│        │  Project Name *                  │                   │
│        │  ┌────────────────────────────┐  │                   │
│        │  │ my-portfolio               │  │                   │
│        │  └────────────────────────────┘  │                   │
│        │  → my-portfolio → 10.0.0.1:9001  │  ← Live preview  │
│        │                                  │                   │
│        │  Git Repository URL *            │                   │
│        │  ┌────────────────────────────┐  │                   │
│        │  │ https://github.com/user/repo│  │                   │
│        │  └────────────────────────────┘  │                   │
│        │                                  │                   │
│        │  Branch                          │                   │
│        │  ┌────────────────────────────┐  │                   │
│        │  │ main                       │  │                   │
│        │  └────────────────────────────┘  │                   │
│        │                                  │                   │
│        │  Start Command *                 │                   │
│        │  ┌────────────────────────────┐  │                   │
│        │  │ npm start              (mono)│  │                   │
│        │  └────────────────────────────┘  │                   │
│        │                                  │                   │
│        │  Assigned Port                   │                   │
│        │  ┌────────────────────────────┐  │                   │
│        │  │ 9001             🔒 (locked)│  │  ← Read-only     │
│        │  └────────────────────────────┘  │     from admin    │
│        │  ℹ Allocated by your admin       │     allocation    │
│        │                                  │                   │
│        │  ┌──── VALIDATION ERROR ──────┐  │  ← Shows inline  │
│        │  │ ⚠ Repository URL invalid.  │  │     per field    │
│        │  └────────────────────────────┘  │                   │
│        │                                  │                   │
│        │     [Cancel]  [Create & Deploy]  │                   │
│        │     (ghost)   (orange primary)   │                   │
│        │                                  │                   │
│        └──────────────────────────────────┘                   │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

**Look at Vercel's project creation:**
- They split it into steps: 1. Choose Git provider 2. Select repo 3. Configure & Deploy
- We simplify to ONE modal since our students enter a URL directly
- Notice: required fields marked with *, optional fields clearly labeled
- Submit button is disabled until all required fields are filled
- Button changes to "Deploying..." with spinner on submit

**Look at Render's service creation:**
- Select service type FIRST → then configure
- They show "Free" pricing info inline — we show "Assigned Port" inline

**Design details:**
- Modal: White bg, `border-radius: 16px`, `max-width: 500px`, `box-shadow: 0 20px 25px rgba(0,0,0,0.1)`
- Backdrop: `rgba(0,0,0,0.5)`, `backdrop-filter: blur(4px)`
- Header: Inter 600 18px, navy, with `✕` close button top-right
- Labels: Inter 500 14px, navy `#1B3A5C`
- Inputs: `height: 40px`, `border-radius: 8px`, mono font for Start Command and Port
- URL preview: JetBrains Mono 12px, `#71717A`, updates live as you type project name
- Locked port field: `background: #F4F4F5`, `cursor: not-allowed`, lock icon right
- Validation errors: `color: #DC2626`, `font-size: 12px`, appears below the offending field
- Cancel: Ghost button (no bg, gray text)
- Create & Deploy: Orange primary, `min-width: 160px`

---

### SCREEN S4: Project Detail (`Project-Detail.html` — NEW PAGE)

**Flowchart nodes:** `project-details`, `deploy-status`, `metrics-collector`, `notif-svc`  
**Primary inspiration:** Vercel project dashboard (tabs pattern)

```
┌────────────┬─────────────────────────────────────────────────┐
│  SIDEBAR   │  ← Back to Projects    [Redeploy ↻] [Open 🔗]  │
│            ├─────────────────────────────────────────────────┤
│            │                                                  │
│            │  My Portfolio                    🟢 Live          │
│            │  main · abc1234 · 2 min ago                     │
│            │                                                  │
│            │  [Overview] [Deployments] [Logs] [Settings]     │
│            ├─────────────────────────────────────────────────┤
│            │                                                  │
│            │  ── OVERVIEW TAB ──                              │
│            │                                                  │
│            │  LIVE URL                                        │
│            │  ┌──────────────────────────────────────┐       │
│            │  │  http://10.0.0.1:9001    [📋 Copy]   │       │
│            │  └──────────────────────────────────────┘       │
│            │                                                  │
│            │  DEPLOYMENT INFO                                 │
│            │  ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│            │  │ Commit    │ │ Duration │ │ Status   │        │
│            │  │ abc1234   │ │ 34s      │ │ 🟢 Ready │        │
│            │  └──────────┘ └──────────┘ └──────────┘        │
│            │                                                  │
│            │  AUTO-REDEPLOY                                   │
│            │  Push to deploy automatically   [━━●━] ON       │
│            │                                                  │
│            │  RESOURCE USAGE                                  │
│            │  CPU   ████████░░░░░░░░░░   42%                 │
│            │  RAM   ██████░░░░░░░░░░░░   28%                 │
│            │                                                  │
│            │  ── LOGS TAB (when selected) ──                  │
│            │  ┌──────────────────────────────────────┐       │
│            │  │ (dark bg, monospace, green/white text)│       │
│            │  │ 14:32:01 [INFO] Server started :9001 │       │
│            │  │ 14:32:02 [INFO] DB connected         │       │
│            │  │ 14:32:05 [WARN] Slow query 1.2s      │       │
│            │  │ 14:33:01 [INFO] GET /api/users 200   │       │
│            │  └──────────────────────────────────────┘       │
│            │                                                  │
└────────────┴─────────────────────────────────────────────────┘
```

**Look at Vercel project dashboard:**
- Tabs: Overview | Deployments | Analytics | Logs | Settings — horizontally across top
- Overview shows: Production deployment URL (large, mono, copy button), recent deploy info
- Deployments tab: chronological list of all deploys with status, commit, branch, timestamp
- Logs tab: dark background log stream, filterable, searchable
- Settings: env vars, build commands, danger zone (delete)

**Look at Railway metrics:**
- CPU/RAM as clean line charts with deployment events overlaid as vertical lines
- docs.railway.com/observability/metrics for the exact layout

**Tabs Design:**
- Active tab: `border-bottom: 2px solid #E8792B`, `color: #1B3A5C`, `font-weight: 600`
- Inactive tab: `color: #71717A`, hover: `color: #1B3A5C`
- Tab bar has a full-width `border-bottom: 1px solid #E4E4E7` behind

**URL display:**
- Large card: `bg: #F4F4F5`, `border: 1px solid #E4E4E7`, `border-radius: 8px`, `padding: 16px`
- URL text: JetBrains Mono 500 16px, `#1B3A5C`
- Copy button: icon button right-aligned, hover turns orange

**Resource bars:**
- `height: 8px`, `border-radius: 4px`, `bg: #E4E4E7` (track)
- Fill: green < 60%, orange 60-80%, red > 80%

---

### SCREEN S5: Student Logs (`Student Logs.html`)

**Flowchart node:** Runtime logs feed  
**Primary inspiration:** Vercel Logs tab + Render log explorer

```
┌────────────┬─────────────────────────────────────────────────┐
│  SIDEBAR   │  Home / Logs                    [Export]         │
│            ├─────────────────────────────────────────────────┤
│            │                                                  │
│            │  FILTERS                                         │
│            │  [🔍 Search logs...] [Project ▾] [Level ▾]      │
│            │                                                  │
│            │  ┌────┬──────────┬──────────┬───────┬────────┐  │
│            │  │Time│ Project  │ Event    │Level  │Details │  │
│            │  ├────┼──────────┼──────────┼───────┼────────┤  │
│            │  │2:30│Portfolio │ Deploy   │ INFO  │abc1234 │  │
│            │  │2:28│Portfolio │ Build OK │ INFO  │ 34s    │  │
│            │  │2:25│API Srvr │ Restart  │ WARN  │ OOM    │  │
│            │  │1:00│ML Model │ Failed   │ ERROR │ exit 1 │  │
│            │  └────┴──────────┴──────────┴───────┴────────┘  │
│            │                                                  │
│            │  Showing 1-25 of 142 events    [← 1 2 3 ... →] │
│            │                                                  │
└────────────┴─────────────────────────────────────────────────┘
```

**Look at:** Render's log explorer — has its own theme setting, filterable by service, level. Vercel's Logs tab — dark mono stream.

---

### SCREEN S6: Documentation (`Documentation.html`)

**Flowchart node:** N/A (supporting page)  
**Primary inspiration:** Vercel docs (clean, readable, left sidebar TOC)

```
┌────────────┬─────────────────────────────────────────────────┐
│  SIDEBAR   │                                                  │
│            │  Introduction                                    │
│  [D] DISAL │  ═══════════                                    │
│  PLATFORM  │                                                  │
│            │  DISAL Hosting is a managed deployment           │
│  ● Intro   │  platform for DISAL society members...          │
│    How It  │                                                  │
│    Works   │  How It Works                                    │
│    Getting │  ────────────                                    │
│    Started │                                                  │
│    Deploy  │  ┌──────────┐  ┌──────────┐                     │
│    Script  │  │ 1. Admin │  │ 2. You   │                     │
│    FAQ     │  │ allocates│  │ create a │                     │
│            │  │ your port│  │ project  │                     │
│            │  └──────────┘  └──────────┘                     │
│            │  ┌──────────┐  ┌──────────┐                     │
│            │  │ 3. Push  │  │ 4. App   │                     │
│            │  │ to Git   │  │ goes live│                     │
│            │  └──────────┘  └──────────┘                     │
│            │                                                  │
│            │  Getting Started                                 │
│            │  ───────────────                                 │
│            │  > Your start command should...                  │
│            │  ```bash                                         │
│            │  npm start                                       │
│            │  ```                                             │
│            │                                                  │
└────────────┴─────────────────────────────────────────────────┘
```

---

## 5. Admin Flow — Complete Screen Spec (Her)

### SCREEN A1: Admin Dashboard (`Admin Dashboard.html`)

**Flowchart nodes:** `admin-dashboard`, `sys-alerts`, `metrics-collector`  
**Primary inspiration:** Render dashboard overview + Vercel team dashboard

```
┌────────────┬─────────────────────────────────────────────────┐
│  SIDEBAR   │  Home / Infrastructure / Overview                │
│            │                                  🟢 All Systems │
│  [D] DISAL ├─────────────────────────────────────────────────┤
│  INFRA_CTRL│                                                  │
│            │  METRICS ROW                                     │
│  ● Overview│  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│    Active  │  │ Active   │  │ Ports    │  │ System   │      │
│    Projects│  │ Projects │  │ Allocated│  │ Health   │      │
│    Audit   │  │          │  │          │  │          │      │
│    Logs    │  │  12      │  │ 12 / 50  │  │  98%     │      │
│  ──────────│  │  ▲ +2    │  │          │  │  🟢      │      │
│    Settings│  └──────────┘  └──────────┘  └──────────┘      │
│            │                                                  │
│            │  CORE SERVICES STATUS                            │
│            │  ┌──────────────────────────────────────┐       │
│            │  │ 🟢 Orchestrator        UP  24d 3h    │       │
│            │  │    Last: Deploy "Portfolio" (2m ago)  │       │
│            │  ├──────────────────────────────────────┤       │
│            │  │ 🟢 Runtime Manager     UP  24d 3h    │       │
│            │  │    Active processes: 12               │       │
│            │  ├──────────────────────────────────────┤       │
│            │  │ 🟢 Access Manager      UP  24d 3h    │       │
│            │  │    Active tunnels: 12                 │       │
│            │  └──────────────────────────────────────┘       │
│            │                                                  │
│            │  RECENT ALERTS                                   │
│            │  ┌──────────────────────────────────────┐       │
│            │  │ 🟡 CPU threshold 80% — ML Model  1h  │       │
│            │  │ 🔴 Build failed — API Server    2h   │       │
│            │  │ ℹ️  Port 9013 allocated         3h   │       │
│  ──────────│  │                    View All Logs →    │       │
│  [AD] Admin│  └──────────────────────────────────────┘       │
│  [☀️]       │                                                  │
└────────────┴─────────────────────────────────────────────────┘
```

**Look at Render's dashboard:** 
- The workspace overview with service counts, status breakdown
- Service health cards showing UP/DOWN with uptime
- They put the "+ New" button in the sidebar header — prominent and always visible

**Look at Vercel's team dashboard:**
- Top metrics bar with key numbers
- Clean separation between overview stats and detail sections

**Design details:**
- Metric cards: White bg, subtle border, large number in navy `#1B3A5C` (Inter 800 32px), label in `#71717A` (Inter 500 12px uppercase)
- Trend indicator: green `▲ +2` or red `▼ -1` in small text
- Service status rows: White bg card, `border-left: 3px solid #22C55E` (or red if down)
- Alert items: Icon + message + relative time, hover highlights row
- "View All Logs →" link: orange text, right-aligned

---

### SCREEN A2: Active Projects / Port Allocation (`Admin Active Tunnels.html`)

**Flowchart nodes:** `port-allocation`, `toml-config`, `service-restart`, `project-list`  
**Primary inspiration:** Render service list + Vercel project grid (admin variant)

```
┌────────────┬─────────────────────────────────────────────────┐
│  SIDEBAR   │  Active Projects               [+ Allocate Port]│
│            ├─────────────────────────────────────────────────┤
│            │                                                  │
│            │  FILTERS                                         │
│            │  [🔍 Search student...]  [Status ▾]  [Sort ▾]   │
│            │                                                  │
│            │  TOML CONFIG PREVIEW (collapsible)               │
│            │  ┌──────────────────────────────────────┐       │
│            │  │ ▾ frps.toml                          │       │
│            │  │ [ports]                          (mono)│      │
│            │  │ student_21005678 = "9001"             │       │
│            │  │ student_21009012 = "9002"             │       │
│            │  │ student_21003456 = "9003"             │       │
│            │  └──────────────────────────────────────┘       │
│            │                                                  │
│            │  PROJECT CARDS GRID                              │
│            │  ┌─────────────────┐  ┌─────────────────┐       │
│            │  │ John Doe         │  │ Jane Smith       │       │
│            │  │ 21005678         │  │ 21009012         │       │
│            │  │                  │  │                  │       │
│            │  │ 🟢 Portfolio     │  │ 🟡 API Server   │       │
│            │  │ Port: 9001       │  │ Port: 9002       │       │
│            │  │                  │  │                  │       │
│            │  │ CPU ████░ 42%    │  │ CPU ██████ 65%   │       │
│            │  │ RAM ███░░ 28%    │  │ RAM ████░░ 45%   │       │
│            │  │                  │  │                  │       │
│            │  │ [View] [Stop][⋯] │  │ [View] [Stop][⋯]│       │
│            │  └─────────────────┘  └─────────────────┘       │
│            │                                                  │
└────────────┴─────────────────────────────────────────────────┘
```

**Port Allocation Modal (when "+ Allocate Port" clicked):**

```
        ┌──────────────────────────────────┐
        │  Allocate Port              [✕]  │
        ├──────────────────────────────────┤
        │                                  │
        │  Student                         │
        │  [ Select student...  ▾ ]        │  ← Dropdown of registered students
        │                                  │
        │  Port                            │
        │  [ 9004              ]  (auto)   │  ← Auto-suggested next available
        │  ℹ Range: 9000-9999              │
        │                                  │
        │     [Cancel]  [Allocate Port]    │
        │                                  │
        │  On submit:                      │
        │  1. Writes to TOML config        │
        │  2. Triggers service restart     │
        │  3. Shows success toast          │
        │                                  │
        └──────────────────────────────────┘
```

**Look at Render's "+ New" flow:** They select type first, then configure. Our admin equivalent is: select student → auto-assign port → confirm.

**Design details:**
- TOML preview: `bg: #F4F4F5`, `border: 1px solid #E4E4E7`, `border-radius: 8px`, collapsible with `▾` arrow
- TOML content: JetBrains Mono 11px, `#52525B`
- Admin cards: Same base as student cards but ADD: student name, student ID, mini CPU/RAM bars
- Mini resource bars: `height: 4px`, `width: 80px`, inline next to percentage
- Action buttons: Small (`btn-sm`), "View" = secondary, "Stop" = danger outline, "⋯" = more menu
- "+ Allocate Port" button: Orange primary, always in header area

---

### SCREEN A3: Admin Project Detail (`Admin-Project-Detail.html` — NEW)

**Flowchart nodes:** `project-details` + `threshold-check` + `action-handler`  
**Primary inspiration:** Render service detail + Railway metrics view

```
┌────────────┬─────────────────────────────────────────────────┐
│  SIDEBAR   │  ← Back to Projects                             │
│            ├─────────────────────────────────────────────────┤
│            │                                                  │
│            │  John Doe's Portfolio            🟢 Live         │
│            │  Student: 21005678 · Port: 9001                 │
│            │                                                  │
│            │  [Overview] [Metrics] [Deploys] [Actions]       │
│            ├─────────────────────────────────────────────────┤
│            │                                                  │
│            │  ── METRICS TAB ──                               │
│            │                                                  │
│            │  RESOURCE USAGE           THRESHOLD: 80%         │
│            │                                    ↓ (red line)  │
│            │  CPU   ████████████░░░░░░░░  62%                │
│            │  RAM   ██████████░░░░░░░░░░  48%                │
│            │  Disk  ████░░░░░░░░░░░░░░░░  22%                │
│            │                                                  │
│            │  STATUS: ✅ Within Limits                        │
│            │  (or)                                            │
│            │  STATUS: 🚨 THRESHOLD VIOLATED — CPU at 94%     │
│            │                                                  │
│            │  ── ACTIONS TAB ──                               │
│            │                                                  │
│            │  ┌──────────────────────────────────────┐       │
│            │  │  ⚠️ INTERVENTION CONTROLS             │       │
│            │  │                                      │       │
│            │  │  [ Restart Service ]  ← Blue button  │       │
│            │  │  Restart the runtime process          │       │
│            │  │                                      │       │
│            │  │  [ Stop Service ]     ← Yellow/warn  │       │
│            │  │  Gracefully stop the process          │       │
│            │  │                                      │       │
│            │  │  [ Kill Process ]     ← Red danger   │       │
│            │  │  Force terminate immediately          │       │
│            │  │                                      │       │
│            │  └──────────────────────────────────────┘       │
│            │                                                  │
│            │  ALERT HISTORY (for this project)                │
│            │  🟡 CPU spike 80% → auto-throttled  (1h ago)    │
│            │  ℹ️  Deployed v3 successfully        (2h ago)    │
│            │                                                  │
└────────────┴─────────────────────────────────────────────────┘
```

**Look at Render metrics page:**
- Time-range selector on metrics charts
- Service events overlaid on timeline as dotted vertical lines
- HTTP status code breakdown

**Look at Railway metrics:**
- docs.railway.com/observability/metrics
- Deployment events shown as dotted lines on the CPU/RAM graph
- This helps admin correlate "deploy happened → CPU spiked"

**Design details:**
- Threshold line: Red dashed line on resource bars at 80% mark
- "Within Limits" badge: `bg: #F0FDF4`, `color: #16A34A`, `border: 1px solid #16A34A20`
- "THRESHOLD VIOLATED": `bg: #FEF2F2`, `color: #DC2626`, pulsing border, `border: 1px solid #DC262640`
- Intervention buttons: Each has description text below it explaining what it does
  - Restart: `bg: #3B82F6`, white text
  - Stop: `bg: #F59E0B`, dark text (or outline variant)
  - Kill: `bg: #EF4444`, white text — with confirmation dialog before executing

---

### SCREEN A4: Audit Logs (`Audit Logs.html`)

**Flowchart nodes:** `sys-alerts` + event logging  
**Primary inspiration:** Render log explorer + Vercel activity view

```
┌────────────┬─────────────────────────────────────────────────┐
│  SIDEBAR   │  Audit Logs                         [Export CSV] │
│            ├─────────────────────────────────────────────────┤
│            │                                                  │
│            │  FILTERS                                         │
│            │  [🔍 Search...] [Type ▾] [Severity ▾] [Date ▾]  │
│            │                                                  │
│            │  ┌─────┬────────┬──────┬────────┬────┬───────┐  │
│            │  │Time │Type    │Actor │Target  │Sev │Details│  │
│            │  ├─────┼────────┼──────┼────────┼────┼───────┤  │
│            │  │14:30│Deploy  │System│Portfoli│ ℹ️  │v3 OK  │  │
│            │  │14:28│Alert   │System│ML Model│ 🟡 │CPU 82%│  │
│            │  │13:00│Port    │Admin │21005678│ ℹ️  │:9005  │  │
│            │  │12:45│Kill    │Admin │API Srvr│ 🔴 │OOM    │  │
│            │  │12:00│Login   │Admin │—       │ ℹ️  │OK     │  │
│            │  └─────┴────────┴──────┴────────┴────┴───────┘  │
│            │                                                  │
│            │  Showing 1-25 of 1,240 events  [← 1 2 3 ... →] │
│            │                                                  │
└────────────┴─────────────────────────────────────────────────┘
```

**Look at Render's log explorer:**
- Custom theme for logs (independent of dashboard theme)
- Filterable by severity, type, time range
- Infinite scroll or pagination

**Design details:**
- Table: Zebra striping optional. Header: `bg: #F4F4F5`, uppercase labels
- Severity icons: ℹ️ info (blue), 🟡 warning (amber), 🔴 error/critical (red)
- Time column: JetBrains Mono 12px
- Type column: badge pill — different color per type (Deploy=blue, Alert=amber, Port=green, Kill=red)
- Pagination: `← Previous` `Next →` with page numbers, current page highlighted

---

## 6. Navigation Maps

### Student Navigation

```
                          ┌──────────────┐
                          │ Landing Page │
                          │  (index.html)│
                          └──────┬───────┘
                                 │ "Get Started" / "Sign In"
                                 ▼
                          ┌──────────────┐
                          │  Login Page  │
                          │ (Login.html) │
                          └──────┬───────┘
                                 │ Auth Success (role=student)
                          ┌──────┴──────────────────┐
                          │                         │
                    [No Projects]             [Has Projects]
                          │                         │
                          ▼                         ▼
                  ┌──────────────┐        ┌──────────────────┐
                  │   Empty      │        │    Projects      │
                  │  Dashboard   │        │    Dashboard     │
                  └──────┬───────┘        └───┬──────────┬───┘
                         │                    │          │
                   [+ New Project]      [Click Card] [+ New]
                         │                    │          │
                         ▼                    ▼          ▼
                  ┌──────────────┐   ┌──────────────┐  (Modal)
                  │ Create Modal │   │   Project    │
                  │   (overlay)  │   │   Detail     │
                  └──────┬───────┘   │   (tabs)     │
                         │           └──────────────┘
                   [Submit Valid]
                         │
                         ▼
                  Projects Dashboard
                  (new card: "Building...")

  SIDEBAR LINKS:
  Dashboard ──→ Projects Dashboard (or Empty Dashboard)
  Logs ──────→ Student Logs
  Docs ──────→ Documentation
```

### Admin Navigation

```
                          ┌──────────────┐
                          │ Landing Page │
                          └──────┬───────┘
                                 │ "Sign In"
                                 ▼
                          ┌──────────────┐
                          │  Login Page  │
                          │ (role=admin) │
                          └──────┬───────┘
                                 │ Auth Success
                                 ▼
                          ┌──────────────┐
                          │    Admin     │
                          │  Dashboard   │
                          └──────┬───────┘
                                 │
              ┌──────────────────┼──────────────────┐
              │                  │                  │
              ▼                  ▼                  ▼
     ┌──────────────┐  ┌──────────────┐   ┌──────────────┐
     │   Active     │  │  Audit Logs  │   │  (Alerts     │
     │  Projects    │  │              │   │   Panel)     │
     │ + Port Alloc │  └──────────────┘   └──────────────┘
     └──────┬───────┘
            │
    ┌───────┼──────────┐
    │       │          │
    ▼       ▼          ▼
 [Allocate  [Click     [Stop/Restart
  Port      Card]       from card]
  Modal]       │
               ▼
      ┌──────────────┐
      │  Admin       │
      │  Project     │
      │  Detail      │
      │  + Metrics   │
      │  + Actions   │
      └──────────────┘

  SIDEBAR LINKS:
  Overview ──────→ Admin Dashboard
  Active Projects ─→ Active Projects / Port Allocation
  Audit Logs ─────→ Audit Logs
```

---

## 7. User Scenarios

### Scenario 1: Brand New Student (First Time)

| Step | User Action | Screen | What They See |
|------|------------|--------|--------------|
| 1 | Visits site | Landing Page | Hero + "Get Started" |
| 2 | Clicks "Get Started" | Login Page | Empty form |
| 3 | Enters ID + password, selects Student | Login Page | "Authenticating..." |
| 4 | Auth succeeds | **Empty Dashboard** | "Waiting for Access" (no port yet) |
| 5 | *(Waits for admin to allocate port)* | — | — |
| 6 | Refreshes page | **Empty Dashboard** | "No Projects Yet" + CTA (port now allocated) |
| 7 | Clicks "+ New Project" | **Create Modal** | Form with locked port field showing `9005` |
| 8 | Fills form, clicks "Create & Deploy" | Modal → Dashboard | Card appears with 🟡 "Building..." |
| 9 | Build completes | **Projects Dashboard** | Card shows 🟢 "Live" + URL `10.0.0.1:9005` |
| 10 | Clicks URL | External browser tab | Their app is running! 🎉 |

### Scenario 2: Student Pushes Code (Auto-Redeploy ON)

| Step | What Happens | Screen | What They See |
|------|-------------|--------|--------------|
| 1 | Student pushes to Git | N/A (Git) | — |
| 2 | Webhook fires → Auto-Redeploy is ON | Backend | Orchestrator triggers rebuild |
| 3 | Dashboard updates | **Projects Dashboard** | Card status: 🟡 "Redeploying..." |
| 4 | Toast notification | Bottom-right | "Auto-deploy triggered for Portfolio" |
| 5 | Build completes | Dashboard | Card: 🟢 "Live" (updated time) |

### Scenario 3: Student Pushes Code (Auto-Redeploy OFF)

| Step | What Happens | Screen | What They See |
|------|-------------|--------|--------------|
| 1 | Student pushes to Git | N/A | — |
| 2 | Webhook → Auto-Redeploy OFF → Notification | Backend → Student | — |
| 3 | Toast + badge on 🔔 bell | **Projects Dashboard** | "Update detected for Portfolio" |
| 4 | Student clicks "Redeploy" on card | Dashboard | 🟡 "Redeploying..." |
| 5 | Build completes | Dashboard | 🟢 "Live" |

### Scenario 4: Admin Provisions a New Student

| Step | User Action | Screen | What They See |
|------|------------|--------|--------------|
| 1 | Admin logs in | Admin Dashboard | Overview with metrics |
| 2 | Navigates to Active Projects | Active Projects | Project grid + "+ Allocate Port" |
| 3 | Clicks "+ Allocate Port" | **Port Allocation Modal** | Student dropdown + auto port |
| 4 | Selects student, confirms | Modal | "Allocating..." → Success toast |
| 5 | TOML preview updates | Active Projects | New entry: `student_21005678 = "9005"` |
| 6 | Service restart triggers | Background | Runtime Manager reloads config |
| 7 | Student's dashboard updates | (Student side) | Empty state → "Ready to create" |

### Scenario 5: Admin Intervenes on Runaway Process

| Step | What Happens | Screen | What They See |
|------|-------------|--------|--------------|
| 1 | Metrics Collector detects CPU > 80% | Backend | Threshold violated |
| 2 | Alert appears on Admin Dashboard | **Admin Dashboard** | 🟡 "CPU threshold: ML Model" in alerts |
| 3 | Admin clicks alert | **Admin Project Detail** | Metrics tab: CPU bar in red, "THRESHOLD VIOLATED" |
| 4 | Admin clicks "Stop Service" | Actions tab | Confirmation dialog: "Are you sure?" |
| 5 | Confirms | Actions tab | Toast: "Service stopped" |
| 6 | Project status updates | Active Projects | Card: ⚪ "Stopped" |
| 7 | Student notified | (Student dashboard) | Toast: "Project stopped by admin: resource limit" |
| 8 | Event logged | **Audit Logs** | Row: "Stop · Admin · ML Model · 🔴" |

### Scenario 6: Deployment Fails

| Step | What Happens | Screen | What They See |
|------|-------------|--------|--------------|
| 1 | Student creates project / redeploys | Dashboard | 🟡 "Building..." |
| 2 | Build fails (bad command, syntax error) | Backend | Deploy error |
| 3 | Card status updates | **Projects Dashboard** | 🔴 "Failed" + "Build failed" message |
| 4 | Toast notification | Bottom-right | "Deployment failed for API Server" |
| 5 | Student clicks card | **Project Detail → Logs tab** | Error message visible in build log |
| 6 | Student fixes code, pushes again | Git → auto/manual redeploy | Cycle repeats |

---

## 8. Component Library Reference

Quick reference for both partners to use the same components:

### Buttons
| Variant | Usage | Example |
|---------|-------|---------|
| **Primary** (orange) | Main CTA per page, max 1-2 per screen | "Create Project", "Allocate Port", "Deploy" |
| **Secondary** (outline) | Secondary actions | "Cancel", "View Details", "Export" |
| **Ghost** (text only) | Tertiary/subtle actions | "Skip", "Learn more", nav items |
| **Danger** (red) | Destructive actions, always with confirmation | "Kill Process", "Delete Project" |

### Status Indicators
| State | Dot Color | Badge Style | Text |
|-------|----------|-------------|------|
| Live/Operational | 🟢 `#22C55E` | Green bg + green text | "Live" / "Operational" |
| Building/Deploying | 🟡 `#F59E0B` (pulsing) | Amber bg + amber text | "Building" / "Deploying" |
| Failed | 🔴 `#EF4444` | Red bg + red text | "Failed" / "Error" |
| Stopped | ⚪ `#A1A1AA` | Gray bg + gray text | "Stopped" / "Inactive" |

### Cards (Both Roles Use These)
- White background, `1px` subtle border, `12px` border-radius
- On hover: border darkens slightly, shadow increases subtly
- No heavy drop shadows in light mode — keep it clean like Vercel

### Inputs
- `height: 40px`, `border-radius: 8px`
- Focus: `border-color: #E8792B` + `box-shadow: 0 0 0 3px rgba(232,121,43,0.25)`
- Disabled/read-only: gray background `#F4F4F5`

### Toasts (Notifications)
- Bottom-right corner, slide up animation, auto-dismiss 5 seconds
- Success (green), Error (red), Info (blue) variants
- Include dismiss `✕` button

---

## 9. Flowchart → Screen Mapping

Every node from `07.drawio` mapped to its exact UI location:

| Flowchart Node | Node Type | Maps To Screen | Specific UI Element |
|---------------|-----------|---------------|-------------------|
| `student-start` | Actor | Landing Page | Entry point, "Get Started" CTA |
| `admin-start` | Actor | Landing Page | Entry point, "Sign In" CTA |
| `git-repo` | Data Store | Create Modal | "Git Repository URL" input field |
| `login-page` | UI Input | **Login Page** | The entire login form |
| `dassal-auth` | Process | Login Page | "Authenticating..." button state |
| `account-check` | Decision | Login Page | JS validation logic (client-side) |
| `error-message` | Display | Login Page | Red error banner (inline) |
| `dashboard` | Display | **Empty Dashboard** / **Projects Dashboard** | Main student view (switches by state) |
| `admin-dashboard` | Display | **Admin Dashboard** | Admin overview with metrics + alerts |
| `port-allocation` | Process | **Active Projects** | "+ Allocate Port" button → modal |
| `toml-config` | Data Store | Active Projects | TOML Config Preview panel (collapsible) |
| `service-restart` | Process | Active Projects | Background process after port allocation (toast confirms) |
| `project-list` | Display | Active Projects (admin) | Grid of student project cards |
| `project-details` | Display | **Project Detail** (both roles) | Per-project tabbed view |
| `create-modal` | UI Input | **Create Project Modal** | Overlay on dashboard |
| `input-validation` | Decision | Create Modal | Inline field validation |
| `error-handler` | Display | Create Modal | Per-field error messages |
| `orch-deploy` | Process | Dashboard | Card state: "Building..." after submit |
| `webhook-listener` | Process | (Background) | Webhook icon/badge on project card |
| `check-settings` | Decision | **Project Detail → Settings** | Auto-redeploy toggle (ON/OFF) |
| `runtime-mgr` | Process | Admin Dashboard | "Runtime Manager" service status card |
| `dns-mgr` | Process | Project Detail | URL generation → displayed in Overview tab |
| `deploy-status` | Display | **Project Detail → Overview** | Status badge + deployment timeline |
| `metrics-collector` | Process | **Admin Project Detail → Metrics** | CPU/RAM/Disk bars + charts |
| `threshold-check` | Decision | Admin Project Detail | "Within Limits" / "THRESHOLD VIOLATED" badge |
| `action-handler` | Process | **Admin Project Detail → Actions** | Stop/Restart/Kill buttons |
| `sys-alerts` | Display | **Admin Dashboard** | Recent Alerts panel |
| `notif-svc` | Process | Both dashboards | Toast notifications + 🔔 notification bell |

---

## Build Order

| Phase | Screen | Partner | Priority |
|-------|--------|---------|----------|
| 0 ✅ | Design tokens (tokens.css, variables.css, tailwind, theme-toggle, components, global, layout) | Both | Done |
| 1 | Landing Page (`index.html`) | Both | Next |
| 1 | Login Page (`Login.html`) | Both | Next |
| 2A.1 | Empty Dashboard | Him | After Phase 1 |
| 2A.2 | Projects Dashboard (Tunnel Manager Board) | Him | After 2A.1 |
| 2A.3 | Create Project Modal | Him | With 2A.2 |
| 2A.4 | Project Detail (NEW) | Him | After 2A.3 |
| 2A.5 | Student Logs | Him | After 2A.4 |
| 2A.6 | Documentation | Him | After 2A.5 |
| 2B.1 | Admin Dashboard | Her | After Phase 1 |
| 2B.2 | Active Projects + Port Allocation | Her | After 2B.1 |
| 2B.3 | Admin Project Detail (NEW) | Her | After 2B.2 |
| 2B.4 | Audit Logs | Her | After 2B.3 |
| 3 | Integration: cross-role navigation, notifications, responsive, dark mode polish | Both | Last |
