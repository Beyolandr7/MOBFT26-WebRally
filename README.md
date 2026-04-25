# MOB FT 2026 - Web Rally

Rally games management system for the **Masa Orientasi Bersama (MOB) FT 2026** at Universitas Surabaya.

## 📌 Overview

**Web Rally** serves as the dedicated platform for managing the Jungle Clash rally games during MOB FT 2026. It handles game sessions, level results, and group standings across all competing kelompoks and subkelompoks.

### Core Responsibilities

- **Game Session Management**: Records and tracks match sessions between competing kelompoks.
- **Level Results Tracking**: Manages per-level results within each game session.
- **Group Standings**: Maintains kelompok and subkelompok data throughout the rally event.
- **Member Registry**: Tracks anggota (participants) assigned to each kelompok.

---

## 🛠️ Tech Stack & Tooling

| Category      | Technology                                            |
| :------------ | :---------------------------------------------------- |
| **Framework** | Next.js 16 (App Router)                               |
| **Styling**   | Tailwind CSS v4 + DaisyUI Components                  |
| **Database**  | MySQL                                                 |
| **ORM**       | Drizzle ORM                                           |
| **Quality**   | ESLint, Prettier, TypeScript (Strict)                 |
| **Workflow**  | Husky, Lint-Staged, Commitlint (Conventional Commits) |
| **CI**        | GitHub Actions                                        |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: >= 20.x
- **Package Manager**: npm
- **Database**: MySQL Server (Local)
- **Editor**: VS Code or an IDE of your choice (Recommended Extensions: Tailwind CSS IntelliSense, Prettier, ESLint)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Beyolandr7/MOBFT26-WebRally.git
   cd MOBFT26-WebRally
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file in the root directory and provide valid values for:

   ```env
   DATABASE_URL="mysql://user:password@localhost:3306/your_database"
   ```

4. **Initialize Husky Hooks:**

   ```bash
   npm run prepare
   ```

5. **Setup Database:**

   ```bash
   npm run db:push
   ```

6. **Run Development Server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 📜 Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Generates the production build.
- `npm run start`: Starts the production server.
- `npm run typecheck`: Performs full static type checking with TypeScript.
- `npm run lint`: Analyzes the codebase for potential errors and styling issues.
- `npm run format`: Formats all files with Prettier.
- `npm run db:push`: Pushes schema changes directly to the database.
- `npm run db:generate`: Generates migration files from schema changes.
- `npm run db:migrate`: Runs pending migrations.
- `npm run db:studio`: Opens Drizzle Studio for database inspection.

---

## 🗄️ Database Schema

| Table          | Description                                       |
| :------------- | :------------------------------------------------ |
| `kelompoks`    | Kelompok besar yang berkompetisi                  |
| `subkelompoks` | Sub-kelompok di dalam setiap kelompok             |
| `levels`       | Level/stage yang dimainkan dalam rally            |
| `gamesessions` | Sesi pertandingan antar dua kelompok              |
| `levelresults` | Hasil per level dalam setiap sesi pertandingan    |
| `anggotas`     | Anggota/peserta yang terdaftar di setiap kelompok |

---

## 🏗️ Development Workflow

### Conventions

- **Language**: Source code and comments are in **English**. UI content is in **Bahasa Indonesia**.
- **Naming**:
  - `camelCase`: Functions, variables, and hooks.
  - `PascalCase`: React components and Types.
  - `kebab-case`: File and directory names.

### Git Strategy

- **Branches**: `feat/*`, `fix/*`, `chore/*`, `refactor/*`.
- **Commits**: Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format.
  - _Example_: `feat: add game session form` or `fix: resolve level result calculation`.
- **Pre-commit**: The system automatically runs Prettier and ESLint on staged files.
- **CI**: GitHub Actions automatically runs lint, typecheck, and build on every push.

---

## 📚 References & Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4-alpha)
- [DaisyUI Components](https://daisyui.com/components/)
- [Drizzle ORM](https://orm.drizzle.team/docs/overview)

---

Developed with 🤎 by **KOORWA ITD MOB FT 2026**.
