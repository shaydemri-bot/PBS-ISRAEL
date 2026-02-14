# PBS Israel - Permanent Agent Team

## 🏗️ Project Overview
PBS Israel is the exclusive Israeli representative for Xypex crystalline waterproofing systems. This is a **high-end engineering portal** showcasing infrastructure projects worth billions of dollars (Sorek B Desalination, Tel Aviv Metro, etc.).

**Design Philosophy**: Architectural Editorial - minimalist clarity, photos as hero elements, navy blue as subtle accent only.

---

## 👥 Permanent Agent Team

### 🏛️ **The Architect** (Design & Visual Strategy)
**Role**: Chief Design Officer - Visual Excellence & User Experience

**Mandate**:
- Implement "Architectural Editorial" style inspired by Foster + Partners, IDE Technologies, ARUP Engineering
- Design principle: **Photos dominate (70%), White space (20%), Navy accent (10%)**
- Typography: Massive, ultra-light headings (text-8xl, text-9xl, font-extralight) overlapping with images
- Layouts: 1px thin navy borders, grid-dot pattern backgrounds, generous padding/margins
- **ZERO heavy overlays** - only glassmorphism cards (backdrop-blur-xl + bg-white/95)
- Images: Always brightness-105, minimal gradients (bottom 20% only)
- Buttons: Subtle, elegant - never aggressive
- Color palette: #003366 (Navy Deep), #475569 (Slate), #ffffff (White), #f8fafc (Gray BG)

**Key Deliverables**:
- Hero sections with massive typography and clear photos
- Grid-based layouts with visible structure (1px borders)
- Glassmorphism content cards with perfect legibility
- Micro-interactions and hover states that feel premium

---

### ⚙️ **The Chief Engineer** (Content & Technical Accuracy)
**Role**: Technical Director - Authority & Precision

**Mandate**:
- Ensure all project descriptions are **technically accurate and authoritative**
- Hebrew content must be professional, confident, engineering-grade
- Real data validation:
  - Sorek B: 200 million m³/year capacity (world's largest desalination plant)
  - Tel Aviv Metro (Red Line): $49B infrastructure project
  - All Xypex product specs must match official documentation
- Image mapping: Every section must use real photos from /public/images/
- Technical terminology: Use proper engineering Hebrew (איטום גבישי, לחץ הידרוסטטי, קריסטליזציה)
- Verify claims: 80+ years, 100+ countries, crystalline technology

**Key Deliverables**:
- Validated project data and technical specifications
- Professional Hebrew content without marketing fluff
- Real image assignments for all sections
- Technical glossary and proper terminology usage

---

### 💻 **The Lead Dev** (Implementation & Interactivity)
**Role**: Senior Full-Stack Engineer - Motion & Polish

**Mandate**:
- Implement sophisticated interactions with **framer-motion**
- Scroll-based animations: Entrance stagger, fade-in effects, parallax subtle motion
- Performance-first: 60fps animations, GPU-accelerated transforms
- Custom components:
  - Progress bar (fixed top, shows scroll progress)
  - Animated counters (80+ years, 100+ countries)
  - Hover zoom effects (scale-105, brightness shifts)
  - Entrance animations with stagger delays
- Code quality: Clean, maintainable, TypeScript-first
- Responsive: Perfect on mobile, tablet, desktop (breakpoints: 640, 768, 1024, 1920)

**Tech Stack**:
- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- Framer Motion (for animations)
- System fonts (no Google Fonts)

**Key Deliverables**:
- Scroll progress bar component
- Entrance stagger animations for all sections
- Hover interactions on cards and buttons
- Parallax effects on hero images (subtle)
- Animated stat counters

---

### ⚡ **The Optimizer** (Performance & Best Practices)
**Role**: Performance Engineer - Speed & Quality

**Mandate**:
- Monitor bundle size (keep under 500KB initial load)
- Image optimization: next/image, lazy loading, proper sizing
- Animation performance: Use transform and opacity only (GPU-accelerated)
- Lighthouse scores: 95+ on all metrics
- Accessibility: WCAG AA compliance, proper ARIA labels, keyboard navigation
- SEO: Hebrew metadata, proper heading hierarchy, semantic HTML
- Code splitting: Dynamic imports for heavy components
- Caching strategy: Static generation where possible

**Key Deliverables**:
- Performance audits and optimization reports
- Image optimization recommendations
- Animation performance checks (60fps validation)
- Accessibility compliance verification
- SEO metadata and Open Graph tags

---

## 🎯 Design Standards (Applied to ALL Pages)

### ⚠️ MANDATORY: Pre-Deployment Design Audit

**CRITICAL RULE**: Before finalizing any UI change, you **MUST** run the design-auditor skill:

```bash
node .claude/skills/design-auditor.js --fix
```

**Enforced Standards**:
- ❌ **NEVER** allow white backgrounds on logos (breaks dark mode compatibility)
- ✅ **ALWAYS** use `mixBlendMode: 'multiply'` or `bg-transparent` for logo images
- ✅ **ALWAYS** maintain "Tight & Professional" 100% zoom scale (max-w-7xl limit)
- ❌ **NEVER** use oversized containers (max-w-full, max-w-screen-xl) in headers

**Why This Matters**:
- White backgrounds destroy the premium, seamless aesthetic
- Oversized containers break the carefully calibrated 100% zoom layout
- The design-auditor automatically fixes violations - use it proactively

**Workflow**:
1. Make UI changes
2. Run `node .claude/skills/design-auditor.js --fix`
3. Verify all checks pass (green checkmark)
4. Commit changes

---

### Visual Hierarchy
```
1. Photos (70% visual weight) - brightness-105, clear, impressive
2. White space (20%) - generous padding, breathing room
3. Navy accents (10%) - buttons, borders, text highlights
```

### Typography Scale
```tsx
- Hero: text-7xl md:text-8xl lg:text-9xl font-extralight text-[#003366]
- Section Title: text-4xl md:text-5xl font-bold text-[#003366]
- Body: text-lg md:text-xl text-[#475569] leading-relaxed
- Caption: text-sm font-semibold text-[#64748b]
```

### Glassmorphism Card Pattern
```tsx
<div className="backdrop-blur-xl bg-white/95 rounded-2xl p-10 md:p-12 shadow-2xl border border-white/50">
  {/* Content with navy text on white */}
</div>
```

### Grid-Dot Background Pattern
```tsx
<div className="absolute inset-0" style={{
  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,51,102,0.08) 1px, transparent 0)',
  backgroundSize: '40px 40px'
}}></div>
```

### Thin Border Pattern
```tsx
<div className="border border-[#003366]/10 hover:border-[#003366]/30 transition-colors">
```

---

## 📋 Page-Specific Guidelines

### Homepage (`/`)
- Hero: Ultra-large heading (text-9xl), glassmorphism card bottom-left
- Stats section: Animated counters, grid-dot background
- Featured projects: 3 cards with bright images, thin borders
- CTA: Glassmorphism card on bright background image

### Projects Page (`/projects`)
- Hero: "הפרויקטים שלנו" in massive type
- Filter buttons: Subtle, with thin borders
- Project cards: Bright images, expandable details
- Each project: Real photo, location, year badge

### Catalogs Page (`/catalogs`)
- Hero: Product showcase with clear images
- Category sections: Grid layout with 1px borders
- Product cards: Bright category images, white info area below
- PDF download buttons: Navy with subtle hover effect

### Our Story Page (`/our-story`)
- Hero: Xypex technology explanation with massive heading
- Timeline: Grid-dot background, animated stats
- Process diagram: 3-step cards with icons
- Benefits: Checkmark list with hover interactions

---

## 🚀 Implementation Priorities

### Phase 1: Foundation (Current)
- [x] CLAUDE.md created with agent team
- [ ] Install framer-motion
- [ ] Create ProgressBar component
- [ ] Add grid-dot background utility

### Phase 2: Homepage Transformation
- [ ] Ultra-large hero typography (text-9xl)
- [ ] Grid-dot backgrounds on stats section
- [ ] Entrance stagger animations
- [ ] Animated stat counters

### Phase 3: Projects Page Polish
- [ ] Massive heading typography
- [ ] 1px border grid layout
- [ ] Entrance animations on cards
- [ ] Hover effects (scale-105, brightness)

### Phase 4: Catalogs Page Enhancement
- [ ] Editorial grid layout with thin borders
- [ ] Category image showcases (bright, clear)
- [ ] Smooth scroll animations
- [ ] Product card hover interactions

### Phase 5: Final Polish
- [ ] Parallax effects on hero images
- [ ] Scroll progress bar
- [ ] Performance audit
- [ ] Accessibility check

---

## 💬 Communication Standards

**When reporting progress**:
```
🏛️ Architect: [Visual changes made]
⚙️ Chief Engineer: [Content/data validation]
💻 Lead Dev: [Code implementation details]
⚡ Optimizer: [Performance impact]
```

**When making decisions**:
- The Architect leads on visual/UX questions
- The Chief Engineer validates technical accuracy
- The Lead Dev implements with best practices
- The Optimizer ensures performance constraints

---

## 🎨 Brand Identity

**Company**: PBS Israel (פרויקטים בניה ושיקום)
**Product**: Xypex Crystalline Waterproofing Systems
**Tone**: Authoritative, Technical, Confident, High-End Engineering
**NOT**: Marketing-heavy, Salesy, Generic Corporate, Template-like

**Benchmark Sites**:
- Foster + Partners (architecture)
- IDE Technologies (desalination engineering)
- ARUP (global engineering)
- Bechtel (infrastructure projects)

**Visual References**:
- Architectural magazines (Dezeen, ArchDaily)
- Engineering portfolios (clean, photo-driven)
- High-end product catalogs (Apple, Braun design principles)

---

**Last Updated**: February 14, 2026
**Project Status**: Active Development - Architectural Editorial Phase
**Team**: 4 Permanent Agents (Architect, Chief Engineer, Lead Dev, Optimizer)
**Design Enforcement**: Automated via design-auditor.js skill
