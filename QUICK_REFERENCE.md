# 2025 Design Trends - Quick Reference Guide

**Use this for rapid implementation during development**

---

## 🎨 Top 5 Must-Implement Trends

### 1. Bento Grid Layout
```tsx
<div className="grid grid-cols-4 gap-6 p-6">
  <div className="col-span-2 row-span-2">Large Item</div>
  <div className="col-span-2">Wide Item</div>
  <div className="row-span-2">Tall Item</div>
  <div>Normal Item</div>
</div>
```

### 2. Glassmorphism
```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
}
```

### 3. Kinetic Typography
```tsx
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Animated Heading
</motion.h1>
```

### 4. Neon Gradients
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### 5. Micro-interactions
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click Me
</motion.button>
```

---

## 🎨 Color Palettes

### Neon Energy
```css
--neon-pink: #FF006B;
--neon-yellow: #FFE500;
--electric-blue: #00F0FF;
--neon-purple: #A700FF;
--cyber-green: #00FF88;
```

### Neo-Pastels
```css
--neo-mint: #B4F8C8;
--neo-lavender: #D4B5FF;
--neo-peach: #FFB5A7;
--neo-sky: #A0E7E5;
--neo-lime: #DCFF85;
```

### Dark Mode Base
```css
--bg-dark: #121212;
--surface-dark: #1E1E1E;
--text-dark: #E0E0E0;
```

---

## 📝 Typography

### Variable Font Setup
```css
font-variation-settings: 'wght' 400, 'wdth' 100;
transition: font-variation-settings 0.3s ease;

:hover {
  font-variation-settings: 'wght' 700, 'wdth' 125;
}
```

### Scale
```css
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-4xl: 2.25rem;
--text-6xl: 3.75rem;
--text-8xl: 6rem;
```

---

## 🎬 Animations

### Scroll-Triggered
```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
/>
```

### Parallax
```tsx
const { scrollYProgress } = useScroll();
const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
<motion.div style={{ y }} />
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## ♿ Accessibility

### Contrast Ratios
- Normal text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum

### Testing
```bash
# Chrome DevTools > Lighthouse
# Focus on Accessibility score
```

---

## ⚡ Performance

### GPU-Accelerated Properties
```css
/* ✅ Animate these */
transform: translateX(0);
opacity: 1;

/* ❌ Don't animate these */
/* width, height, top, left, margin */
```

### Optimization
```css
will-change: transform, opacity; /* Use sparingly */
```

---

## 🛠️ Quick Implementations

### Bento Card
```tsx
<motion.div
  className="rounded-xl p-6 bg-white/10 backdrop-blur-lg border border-white/20"
  whileHover={{ y: -4 }}
>
  <h3 className="text-2xl font-bold mb-2">Title</h3>
  <p className="text-muted-foreground">Description</p>
</motion.div>
```

### Neon Button
```tsx
<button className="px-6 py-3 rounded-full bg-gradient-to-r from-neon-pink to-neon-yellow text-white font-bold shadow-[0_0_20px_rgba(255,0,107,0.5)]">
  Get Started
</button>
```

### Kinetic Heading
```tsx
<motion.h1
  className="text-7xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
>
  Bold Statement
</motion.h1>
```

---

## 📋 Checklist

- [ ] Bento grid layout implemented
- [ ] Glassmorphism effects added
- [ ] Dark mode with #121212 background
- [ ] Variable fonts configured
- [ ] Micro-interactions on interactive elements
- [ ] Scroll animations for key sections
- [ ] WCAG AA contrast compliance
- [ ] prefers-reduced-motion respected
- [ ] Mobile responsive (test on devices)
- [ ] Performance optimized (Lighthouse score > 90)

---

**Quick tip**: Start with layout and color, then add animations last for progressive enhancement!
