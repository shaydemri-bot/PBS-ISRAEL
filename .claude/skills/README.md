# PBS Israel - Claude Code Skills

Custom skills for maintaining design system consistency and code quality.

## 🛡️ Design Guardian (`ui-audit`)

**Purpose**: Automated UI consistency checks for the Architectural Editorial design system.

**Usage**:
```bash
node .claude/skills/ui-audit.js
```

**Checks**:
1. ❌ **Hardcoded White Backgrounds** - Detects `bg-white` in header/logo components (breaks dark mode)
2. ⚠️ **Oversized Containers** - Finds `max-w-full`, `max-w-screen-xl`, etc. (breaks 100% zoom design)
3. ℹ️ **Missing Transitions** - Identifies buttons/links without `transition` classes

**Exit Codes**:
- `0` - All checks passed
- `1` - Issues found

**Integration**:
- Run before commits to maintain design consistency
- Add to CI/CD pipeline for automated checks
- Use as pre-push git hook

---

## 📋 Design Standards Enforced

### Maximum Container Width
```tsx
✅ max-w-7xl      // Correct - keeps layout tight at 100% zoom
❌ max-w-screen-xl // Too wide
❌ max-w-full     // Breaks layout
```

### Logo Backgrounds
```tsx
✅ bg-transparent    // Correct - adapts to theme
✅ bg-white/0       // Correct - transparent white
❌ bg-white         // Breaks dark mode
```

### Interactive Elements
```tsx
✅ transition-all duration-300    // Smooth, polished interactions
❌ No transition classes          // Abrupt, unpolished
```

---

## 🎨 Design Auditor (`design-auditor`)

**Purpose**: Enforces strict design standards for header components with automatic fixing capability.

**Usage**:
```bash
# Audit only (report issues)
node .claude/skills/design-auditor.js

# Auto-fix mode (apply corrections)
node .claude/skills/design-auditor.js --fix
```

**Checks & Fixes**:
1. ❌ **Image Blending** - Ensures all header images have `mixBlendMode: 'multiply'` for transparent backgrounds
2. ⚠️ **Container Sizes** - Enforces max-w-7xl limit in header components

**Auto-Fix Capabilities**:
- Adds `mixBlendMode: 'multiply'` to Image components in style props
- Replaces oversized containers (max-w-full, max-w-screen-xl) with max-w-7xl
- Preserves existing code formatting and structure

**Exit Codes**:
- `0` - All checks passed or fixes applied successfully
- `1` - Issues found (audit mode only)

**Integration**:
- Run with `--fix` after design changes to enforce standards
- Use in audit mode before commits to catch violations
- Safer than manual editing for bulk corrections

---

## 🚀 Future Skills (Planned)

- **image-optimizer** - Validates image sizes and formats
- **performance-guard** - Checks bundle sizes and animation performance
- **a11y-checker** - Ensures WCAG AA compliance
- **hebrew-validator** - Verifies Hebrew RTL implementation

---

**Last Updated**: February 14, 2026
**Maintained by**: The Permanent Agent Team (Architect, Chief Engineer, Lead Dev, Optimizer)
