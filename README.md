# Terra Haven Website

A modern, responsive website for Terra Haven built with React, Vite, TypeScript, and Tailwind CSS v4.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (managed via `.mise.toml`)
- pnpm (or npm)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Format code
pnpm format
```

## 📁 Project Structure

```
Terra-Haven-Website/
├── index.html              # Entry point HTML template
├── src/
│   ├── App.tsx            # Main React application component
│   ├── main.tsx           # React DOM render entry point
│   └── index.css          # Global styles with Tailwind imports
├── public/                # Static assets (optional)
├── dist/                  # Production build output (generated)
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS configuration (if needed)
└── .mise.toml            # Development environment setup
```

## 🛠️ Development

The project uses:
- **React 19** - UI framework
- **Vite 8** - Build tool and dev server
- **TypeScript 5.7** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework with `@tailwindcss/vite` plugin
- **React DOM 19** - DOM rendering

### Available Scripts

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Start development server at `http://localhost:8443` |
| `pnpm build` | Create optimized production build in `dist/` |
| `pnpm preview` | Preview production build locally |
| `pnpm format` | Format code with oxfmt |

## 📦 Build Output

Production build generates:
- `dist/index.html` - Minified HTML
- `dist/assets/index-*.css` - Optimized CSS (~18KB, ~4KB gzipped)
- `dist/assets/index-*.js` - Bundled JavaScript (~211KB, ~65KB gzipped)

## 🌐 Deployment

### Environment Variables
- `PORT` - Server port (default: 8443)

### Build and Deploy

```bash
# 1. Install dependencies
pnpm install

# 2. Build for production
pnpm build

# 3. Deploy the dist/ folder to your hosting
```

### Hosting Recommendations
- **Vercel** - `pnpm build` → Deploy `dist/` folder
- **Netlify** - Configure build command: `pnpm build`
- **GitHub Pages** - Build and push `dist/` to `gh-pages` branch
- **Docker** - Use Node.js image, run `pnpm build`, serve with nginx

### Environment Setup (via .mise.toml)

```bash
# Install mise (if not already installed)
# https://mise.jdx.dev/

# Install specified tool versions
mise install
```

## 🎨 Styling

Tailwind CSS v4 is configured via `@tailwindcss/vite` plugin in `vite.config.ts`:
- Import Tailwind in `src/index.css` with `@import 'tailwindcss';`
- Use Tailwind utility classes directly in JSX
- Add global styles or theme customization in `src/index.css`

## 📝 Git Workflow

```bash
# Check status
git status

# Stage changes
git add .

# Commit changes
git commit -m "description"

# Push to remote
git push origin main
```

## ✅ Project Status

- ✓ React 19 configured
- ✓ Vite dev server running
- ✓ Tailwind CSS v4 integrated
- ✓ TypeScript enabled
- ✓ Production build tested and working
- ✓ Directory structure optimized
- ✓ Ready for development and deployment

## 📄 License

Private project - Terra Haven