# ❄️ Merry Christmas, Amal! [![Deploy to GitHub Pages](https://github.com/vajahath/merry-christmas-amal/actions/workflows/deploy.yml/badge.svg)](https://github.com/vajahath/merry-christmas-amal/actions/workflows/deploy.yml)

A modernized festive gratitude page celebrating holiday memories from 2017 to today.

## 🛠️ Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Bundler**: [Vite](https://vite.dev/)
- **Language**: TypeScript (Strict mode)
- **Styling**: Vanilla CSS (Modern Grid & Flexbox)
- **CI/CD**: GitHub Actions for automated deployment to Pages.

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/vajahath/merry-christmas-amal.git
   cd merry-christmas-amal
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run locally**:
   ```bash
   npm run dev
   ```

## 📜 Available Scripts

| Script | Command | Purpose |
|---|---|---|
| `dev` | `vite` | Start live-reloading development server |
| `build` | `vite build` | Generate production build in `dist/` |
| `preview` | `vite preview` | Serve the production build locally |
| `typecheck` | `tsc --noEmit` | Strict TypeScript type-checking |

## 📦 Deployment

This project is configured for **GitHub Pages** deployment via GitHub Actions. Any push to the `main` branch triggers an automated build and deploy cycle.

## 📁 Project Structure

```text
├── .github/workflows/   # Automated deployment pipeline
├── images/              # Holiday memories and assets
├── index.html           # Semantic structure & entry point
├── index.css            # Modern design system & animations
├── index.ts             # Interactive logic & snow generator
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project metadata & scripts
```
