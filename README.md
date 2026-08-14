# FitPulse — Fitness Tracker Dashboard

A modern, responsive, and lightweight client-side fitness tracking dashboard designed to help users log workouts, track exercise duration, calculate burned calories, and persist fitness activities.

---

## Live Deployment

- **Live Application:** [https://is-project-2026.github.io/fitness-tracker-159096/](https://is-project-2026.github.io/fitness-tracker-159096/)
- **Repository:** [https://github.com/IS-PROJECT-2026/fitness-tracker-159096](https://github.com/IS-PROJECT-2026/fitness-tracker-159096)

---

## System Overview

FitPulse is built as a single-page web application featuring dynamic activity logging and real-time dashboard analytics.

### Key Features
* **Activity Logging:** Record workouts categorized by exercise type (e.g., Cardio, Strength, Flexibility), duration, and calories burned.
* **Live Dashboard Metrics:** Displays dynamic summaries including Total Workouts, Total Duration (minutes), and Total Calories burned.
* **Client-Side Persistence:** Automatically saves all recorded logs to browser `localStorage` to ensure data persists across sessions without requiring an external database.
* **Responsive User Interface:** Clean, mobile-friendly interface styled with modern CSS layout paradigms (Flexbox and CSS Grid).

---

## Technologies Used

* **Frontend Structure:** HTML5 (Semantic elements)
* **Styling & Layout:** CSS3 (Modern Flexbox, CSS Grid, Custom Variables)
* **Application Logic:** JavaScript (ES6+, DOM Manipulation, LocalStorage API)
* **Version Control & CI/CD:** Git, GitHub Actions, and GitHub Pages for continuous deployment
* **Project Management:** GitHub Projects (Kanban), GitHub Issues, and Milestones

---

## Repository Structure

```text
├── index.html              # Main dashboard layout
├── assets/
│   ├── css/
│   │   └── style.css       # Core stylesheets and responsive layout rules
│   └── js/
│       └── main.js         # State management, form handlers, and storage logic
├── evidence/               # Conflict resolution logs and verification screenshots
├── README.md               # System overview and deployment documentation
└── submission.md           # Formal project report and Git workflow reflection
