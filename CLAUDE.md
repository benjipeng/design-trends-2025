# Design Trends 2025 - Project Documentation

## Project Overview

This is a **static Next.js website** showcasing design trends for 2025. The site is frontend-only and will be deployed to GitHub Pages using GitHub Actions.

**IMPORTANT**: This project uses cutting-edge versions of Next.js 15, Tailwind CSS v4, and React 19. Pay special attention to compatibility requirements and configuration differences from older versions.

## Technology Stack

### Core Technologies
- **Next.js 15** - React framework with App Router and Server Components
- **TypeScript** - Type-safe JavaScript
- **React 19** - Latest React version
- **Tailwind CSS v4** - Utility-first CSS framework (zero-config approach)
- **shadcn/ui** - Re-usable component library
- **Lucide Icons** - Icon library
- **Framer Motion** - Animation library

### Critical Version Compatibility Notes

**Tailwind CSS v4**:
- Uses CSS-first configuration with `@theme` directives
- NO `tailwind.config.js` file needed (auto-scans project)
- Configuration done in CSS using `@import` and `@theme`
- Requires Next.js 15.2+ for full support

**Framer Motion with React 19**:
- Standard framer-motion is NOT compatible with React 19
- MUST use one of these options:
  - Alpha version: `framer-motion@12.0.0-alpha.2`
  - New Motion package: `motion` with imports from `motion/react`
- IMPORTANT: Framer Motion components require `'use client'` directive

**shadcn/ui**:
- Use latest version compatible with Tailwind v4
- With npm and React 19, may need `--legacy-peer-deps` flag
- Initialize with: `npx shadcn@latest init`

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (static export)
npm run build

# Preview production build
npm run start
```

## Next.js Configuration Requirements

### CRITICAL: GitHub Pages Static Export Configuration

**next.config.ts** MUST include:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",                    // Enable static export
  basePath: "/design-trends-2025",     // GitHub repo name
  images: {
    unoptimized: true                  // Required for static export
  }
};

export default nextConfig;
```

**IMPORTANT GitHub Pages Requirements**:
- Create `.nojekyll` file in `/public` directory to prevent Jekyll processing
- GitHub Pages ignores `_next` directories by default without `.nojekyll`
- basePath MUST match your GitHub repository name exactly

### Dynamic basePath for GitHub Actions

In production builds via GitHub Actions, basePath can be set dynamically:
```javascript
basePath: process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}`
  : ''
```

## Project Structure

```
design-trends-2025/
├── app/                    # Next.js App Router directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles with Tailwind imports
├── components/            # React components
│   └── ui/               # shadcn/ui components
├── public/               # Static assets
│   └── .nojekyll        # Required for GitHub Pages
├── lib/                  # Utility functions
├── .github/
│   └── workflows/        # GitHub Actions workflows
│       └── deploy.yml    # Deployment workflow
└── next.config.ts        # Next.js configuration
```

## Code Style Guidelines

### Component Standards
- Use **functional components** with hooks only
- Use **TypeScript** for all files
- Use **'use client'** directive for client components (animations, interactivity)
- Default to Server Components unless client interactivity needed

### Styling
- Use **Tailwind CSS** utility classes for styling
- Use **shadcn/ui** components as base building blocks
- Define custom theme tokens in CSS using `@theme` directive (Tailwind v4)
- Animations should use **Framer Motion** for dynamic effects

### Import Organization
```typescript
// 1. React and Next.js imports
import { useState } from 'react'
import Image from 'next/image'

// 2. Third-party libraries
import { motion } from 'motion/react'  // or framer-motion
import { IconName } from 'lucide-react'

// 3. Local components
import { Button } from '@/components/ui/button'

// 4. Utilities and types
import { cn } from '@/lib/utils'
import type { ComponentProps } from '@/types'
```

## Installation Steps

### 1. Initialize Next.js Project
```bash
npx create-next-app@latest . --ts --tailwind --eslint --app --no-src-dir
```

### 2. Install shadcn/ui
```bash
npx shadcn@latest init
```
- Choose style: Default or New York
- Select base color
- Configure CSS variables

### 3. Install Animation Libraries
```bash
# Use Motion package for React 19 compatibility
npm install motion

# OR use Framer Motion alpha
npm install framer-motion@12.0.0-alpha.2
```

### 4. Install Icons
```bash
npm install lucide-react
```

## GitHub Pages Deployment

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:
- Build Next.js app with `npm run build`
- Output goes to `out/` directory
- Deploy to `gh-pages` branch
- Enable GitHub Pages from Settings → Pages

### Deployment Checklist
- [ ] `output: "export"` in next.config.ts
- [ ] `basePath` matches repository name
- [ ] `images: { unoptimized: true }`
- [ ] `.nojekyll` file in `/public`
- [ ] GitHub Pages enabled in repository settings
- [ ] Deploy from `gh-pages` branch

## Common Issues & Solutions

### Issue: CSS/JS files 404 on GitHub Pages
**Solution**: Ensure `.nojekyll` file exists in `/public` directory

### Issue: Images not loading
**Solution**: Use `next/image` with `unoptimized: true` OR use standard `<img>` tags with absolute paths

### Issue: Framer Motion import errors with React 19
**Solution**: Use `import { motion } from 'motion/react'` instead of `'framer-motion'`

### Issue: Tailwind styles not applying
**Solution**: Check CSS imports use Tailwind v4 syntax in `globals.css`:
```css
@import "tailwindcss";
```

### Issue: Client components throwing hydration errors
**Solution**: Add `'use client'` directive at top of file and ensure no server-only code

## Testing Before Deployment

```bash
# Build static export
npm run build

# Verify output directory
ls -la out/

# Test locally with a static server
npx serve out
```

## Branch Strategy

**IMPORTANT**: All development work should be done on feature branches following the pattern:
- `claude/[feature-name]-[session-id]`

Current working branch: `claude/setup-nextjs-project-011CUwMrPaubHLMiirAghGcb`

## Design Trends to Showcase

The website will feature various 2025 design trends including:
- Modern typography
- Bold color schemes
- Micro-interactions
- Glassmorphism
- 3D elements
- Kinetic typography
- Immersive scrolling experiences
- Minimalist maximalism

Each trend should have its own section with live examples and smooth transitions.
