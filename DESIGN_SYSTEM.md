# 5 Fictional Companies - Design System

## 1. Aurora Glass (Glassmorphism)
**Product**: Premium smart glass technology

**Design Trend**: Glassmorphism (Frosted glass, blur effects, translucent layers)

**Font Combination**:
- Heading: Playfair Display (elegant serif)
- Body: Lora (readable serif)
- Weight: 400-700

**Color Palette**:

**Light Mode**:
- Primary: #b7525e (rose)
- Secondary: #c19cf6 (lavender)
- Accent: #18087c (deep purple)
- Background: Linear gradient (#67539f to #c1bcd0)
- Text: #1a1a1a
- Glass: rgba(255, 255, 255, 0.1)

**Dark Mode**:
- Primary: #c19cf6 (lavender - brighter)
- Secondary: #b7525e (rose)
- Accent: #a78bfa (light purple)
- Background: Linear gradient (#18087c to #2d1b69)
- Text: #f0f0f0
- Glass: rgba(255, 255, 255, 0.05)

**Navbar Style**: Frosted glass with blur, sticky, background blur increases on scroll

---

## 2. Volt (Neon Energy)
**Product**: Futuristic energy drink brand

**Design Trend**: Neon Energy (Bold contrast, glowing effects, cyberpunk aesthetic)

**Font Combination**:
- Heading: Space Grotesk (geometric, futuristic)
- Body: Inter (modern, readable)
- Accent: JetBrains Mono (code-like, tech feel)

**Color Palette**:

**Light Mode** (Day Cyberpunk):
- Primary: #FF007A (magenta)
- Secondary: #00FFB3 (neon green)
- Accent: #0abdc6 (cyan)
- Background: #f5f5f5
- Text: #0a0a0a
- Glow: rgba(255, 0, 122, 0.5)

**Dark Mode** (Night Cyberpunk):
- Primary: #FF007A (magenta)
- Secondary: #00FFB3 (neon green)
- Accent: #ea00d9 (hot pink)
- Background: #0a0e27 (deep navy)
- Text: #ffffff
- Glow: rgba(0, 255, 179, 0.6)

**Navbar Style**: Dark background with neon border, glows on scroll, compact on scroll

---

## 3. Typeflow Studio (Kinetic Typography)
**Product**: Creative typography & design agency

**Design Trend**: Kinetic Typography (Animated text, variable fonts, motion design)

**Font Combination**:
- Heading: Inter Variable (weights 100-900)
- Body: Recursive Variable (casual to linear)
- Accent: Fraunces Variable (display)

**Color Palette**:

**Light Mode**:
- Primary: #667eea (soft blue)
- Secondary: #764ba2 (purple)
- Accent: #f093fb (pink)
- Background: #ffffff
- Text: #2d3748
- Gradient: linear-gradient(135deg, #667eea, #764ba2, #f093fb)

**Dark Mode**:
- Primary: #a78bfa (light purple)
- Secondary: #ec4899 (pink)
- Accent: #fbbf24 (amber)
- Background: #0f172a (slate)
- Text: #f1f5f9
- Gradient: linear-gradient(135deg, #a78bfa, #ec4899, #fbbf24)

**Navbar Style**: Text animates weight on scroll, letters track/expand on hover, minimal background

---

## 4. Essence (Minimalist Maximalism)
**Product**: High-end luxury watches

**Design Trend**: Minimalist Maximalism (Clean layout, huge typography, bold accents)

**Font Combination**:
- Heading: Josefin Sans (luxury, sophisticated) 700-900
- Body: Lato (clean, professional) 300-400
- Accent: Abril Fatface (editorial impact)

**Color Palette**:

**Light Mode**:
- Primary: #2d2d2d (charcoal)
- Secondary: #c4b5a0 (taupe)
- Accent: #ff6b6b (coral)
- Background: #faf9f7 (warm cream)
- Text: #1a1a1a
- Minimal: 80% whitespace

**Dark Mode**:
- Primary: #e0e0e0 (light gray)
- Secondary: #8b7e74 (warm gray)
- Accent: #ff8787 (light coral)
- Background: #1a1a1a (deep black)
- Text: #f5f5f5
- Minimal: 80% dark space

**Navbar Style**: Minimal, huge logo, text scales down on scroll, accent underline

---

## 5. Mosaic (Bento Grid)
**Product**: SaaS analytics dashboard platform

**Design Trend**: Bento Grid (Modular cards, varied sizes, organized chaos)

**Font Combination**:
- Heading: Poppins (modern, geometric) 600-700
- Body: Roboto (tech, readable) 400-500
- Mono: Roboto Mono (data, metrics)

**Color Palette**:

**Light Mode**:
- Primary: #4f46e5 (indigo)
- Secondary: #06b6d4 (cyan)
- Accent: #f59e0b (amber)
- Cards: #10b981 (green), #ef4444 (red), #8b5cf6 (purple)
- Background: #f9fafb
- Text: #111827
- Borders: #e5e7eb

**Dark Mode**:
- Primary: #818cf8 (light indigo)
- Secondary: #22d3ee (light cyan)
- Accent: #fbbf24 (light amber)
- Cards: #34d399 (light green), #f87171 (light red), #a78bfa (light purple)
- Background: #111827
- Text: #f9fafb
- Borders: #374151

**Navbar Style**: Modular grid navbar, nav items in bento cells, cells highlight/elevate on hover

---

## Navigation Strategy

Each page navbar will:
1. Maintain same structure (logo left, links center, theme toggle right)
2. Adapt styling completely to match page theme
3. Animate on scroll (different behavior per theme)
4. Smooth transitions between pages (300-500ms)
5. Mobile: Consistent hamburger, themed drawer

## Page Transitions

- Fade + slide (300ms)
- Page-specific exit animations
- Navbar morphs between styles during transition
- Smooth color interpolation
