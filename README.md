# 🎮 CLOZHI SMP — Website

A premium, cinematic Minecraft server website built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 📁 Project Structure

```
clozhi-smp/
├── public/
│   └── screenshots/        ← Add your server screenshots here
├── src/
│   ├── app/
│   │   ├── globals.css     ← Global styles, fonts, CSS variables
│   │   ├── layout.tsx      ← Root layout (SEO metadata goes here)
│   │   └── page.tsx        ← Home page (puts all sections together)
│   └── components/
│       ├── ui/             ← Reusable UI pieces
│       │   ├── CustomCursor.tsx    ← Animated glowing cursor
│       │   ├── GlowButton.tsx      ← Neon glow button
│       │   ├── LoadingScreen.tsx   ← Intro loading animation
│       │   ├── Navbar.tsx          ← Top navigation bar
│       │   └── ScrollReveal.tsx    ← Scroll-triggered fade-in wrapper
│       └── sections/       ← Page sections (one file per section)
│           ├── HeroSection.tsx         ← Full-screen hero
│           ├── FeaturesSection.tsx     ← Feature cards grid
│           ├── ScreenshotSection.tsx   ← Screenshot gallery
│           ├── ServerStatusSection.tsx ← Live server status
│           ├── CommunitySection.tsx    ← Discord + socials
│           └── Footer.tsx              ← Footer
├── next.config.js          ← Configured for GitHub Pages export
├── tailwind.config.js      ← Tailwind theme customization
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started (Local Development)

### 1. Install Node.js
Download from: https://nodejs.org (LTS version recommended)

### 2. Install dependencies
Open your terminal in the project folder and run:
```bash
npm install
```

### 3. Start the dev server
```bash
npm run dev
```

Open http://localhost:3000 in your browser. The site auto-refreshes when you edit files!

---

## ✏️ How to Customize

### Change Server IP
Search for `play.clozhismp.net` in the code and replace with your real server IP.
Files to edit:
- `src/components/ui/Navbar.tsx`
- `src/components/sections/HeroSection.tsx`
- `src/components/sections/ServerStatusSection.tsx`

### Change Colors / Theme
Edit `src/app/globals.css` — look for the `:root` section:
```css
:root {
  --color-purple: #a855f7;   /* Main purple */
  --color-cyan: #22d3ee;     /* Accent cyan */
  --color-bg: #050008;       /* Background */
}
```

### Add Discord Link
Search for `https://discord.gg/your-invite` and replace with your Discord invite URL.

### Add Screenshots
1. Put your `.jpg` or `.png` files in `/public/screenshots/`
2. Open `src/components/sections/ScreenshotSection.tsx`
3. Update the `src` values in the `SCREENSHOTS` array:
```js
{ src: '/screenshots/spawn.jpg', alt: 'Spawn Area', ... }
```

### Edit Feature Cards
Open `src/components/sections/FeaturesSection.tsx` and edit the `FEATURES` array.

### Edit SEO Title & Description
Open `src/app/layout.tsx` and update the `metadata` object.

---

## 📦 Building for Production

```bash
npm run build
```

This generates a static `out/` folder ready for deployment.

---

## 🌐 Deploying to GitHub Pages

### Step 1: Create a GitHub repository
Go to github.com → New Repository → name it `clozhi-smp`

### Step 2: Update next.config.js
Change the `basePath` to match your repo name:
```js
basePath: isProd ? '/clozhi-smp' : '',
```
If you're using a custom domain (e.g. clozhismp.net), remove the `basePath` entirely.

### Step 3: Push your code
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/clozhi-smp.git
git push -u origin main
```

### Step 4: Set up GitHub Actions (automatic deploy)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - run: touch out/.nojekyll
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### Step 5: Enable GitHub Pages
Go to your repo → Settings → Pages → Source: `gh-pages` branch

Your site will be live at: `https://YOUR_USERNAME.github.io/clozhi-smp/`

---

## 🔧 Other Deployment Options

### Vercel (Easiest — free!)
1. Go to vercel.com
2. Import your GitHub repo
3. Click Deploy — done! No config needed.
4. Remove the `basePath` from `next.config.js` for Vercel.

### Netlify
1. Go to netlify.com
2. Drag and drop your `out/` folder after running `npm run build`

---

## 🎨 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | React framework with static export |
| TypeScript | Type-safe JavaScript |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Smooth animations |
| mcsrvstat.us API | Free Minecraft server status |

---

## 💡 Tips for Beginners

- **Edit one file at a time** and save — the browser auto-refreshes
- **Search** (`Ctrl+F` or `Cmd+F`) in your editor to find text quickly
- Every file has **comments** explaining what each part does
- The `ui/` components are reusable — use `GlowButton` and `ScrollReveal` anywhere
- If something breaks, check the terminal for error messages

---

Made with ❤️ for CLOZHI SMP
