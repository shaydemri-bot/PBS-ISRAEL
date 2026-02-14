#!/usr/bin/env node

/**
 * PBS Israel - Design Auditor with Auto-Fix
 *
 * Enforces strict design standards:
 * 1. All images in headers must have mix-blend-mode: multiply or transparent backgrounds
 * 2. No containers can exceed max-w-7xl
 * 3. Auto-fix mode applies corrections directly to files
 *
 * Usage:
 *   node .claude/skills/design-auditor.js           # Audit only
 *   node .claude/skills/design-auditor.js --fix     # Audit and auto-fix
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = join(__dirname, '..', '..');

// Parse CLI arguments
const args = process.argv.slice(2);
const FIX_MODE = args.includes('--fix');

// ANSI colors
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
  gray: '\x1b[90m',
  bold: '\x1b[1m'
};

// Issues tracker
const issues = {
  imageBlending: [],
  oversizedContainers: []
};

// Fixes applied tracker
const fixes = {
  imageBlending: [],
  oversizedContainers: []
};

/**
 * Get all TSX/JSX files in components directory
 */
function getComponentFiles() {
  const files = [];
  const componentsDir = join(ROOT_DIR, 'components');

  function traverse(dir) {
    try {
      const items = readdirSync(dir);
      for (const item of items) {
        const fullPath = join(dir, item);
        const stat = statSync(fullPath);

        if (stat.isDirectory()) {
          traverse(fullPath);
        } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
          files.push(fullPath);
        }
      }
    } catch (err) {
      // Skip directories that don't exist
    }
  }

  traverse(componentsDir);
  return files;
}

/**
 * Check if Image component has proper blending
 * Looks for mix-blend-mode in style prop or bg-transparent in surrounding divs
 */
function checkImageBlending(filePath, content) {
  const relPath = relative(ROOT_DIR, filePath);

  // Only check Header-related files
  if (!relPath.toLowerCase().includes('header')) {
    return;
  }

  const lines = content.split('\n');

  // Pattern to find Image components
  const imageRegex = /<Image\b[^>]*>/g;
  let match;

  while ((match = imageRegex.exec(content)) !== null) {
    const imageTag = match[0];
    const lineNumber = content.substring(0, match.index).split('\n').length;

    // Check if it has mix-blend-mode in style
    const hasMixBlendMode = /style\s*=\s*\{\{[^}]*mixBlendMode\s*:\s*['"]multiply['"]/.test(imageTag);

    // Check surrounding context (parent div) for bg-transparent
    const contextStart = Math.max(0, match.index - 500);
    const contextEnd = Math.min(content.length, match.index + 500);
    const context = content.substring(contextStart, contextEnd);

    const hasTransparentBg = /bg-transparent/.test(context);

    if (!hasMixBlendMode && !hasTransparentBg) {
      issues.imageBlending.push({
        file: relPath,
        line: lineNumber,
        content: lines[lineNumber - 1]?.trim() || imageTag,
        context: context,
        matchIndex: match.index
      });
    }
  }
}

/**
 * Check for oversized containers (exceeding max-w-7xl)
 */
function checkOversizedContainers(filePath, content) {
  const relPath = relative(ROOT_DIR, filePath);

  // Only check Header-related files
  if (!relPath.toLowerCase().includes('header')) {
    return;
  }

  const lines = content.split('\n');

  // Patterns that exceed max-w-7xl
  const oversizedPatterns = [
    { pattern: /max-w-screen-2xl/g, name: 'max-w-screen-2xl' },
    { pattern: /max-w-screen-xl/g, name: 'max-w-screen-xl' },
    { pattern: /max-w-full/g, name: 'max-w-full' },
    { pattern: /max-w-none/g, name: 'max-w-none' }
  ];

  oversizedPatterns.forEach(({ pattern, name }) => {
    let match;
    const regex = new RegExp(pattern);
    while ((match = regex.exec(content)) !== null) {
      const lineNumber = content.substring(0, match.index).split('\n').length;
      issues.oversizedContainers.push({
        file: relPath,
        line: lineNumber,
        content: lines[lineNumber - 1]?.trim(),
        pattern: name,
        matchIndex: match.index
      });
    }
  });
}

/**
 * Auto-fix image blending issues
 * Adds mixBlendMode: 'multiply' to Image style props
 */
function fixImageBlending(issue) {
  const filePath = join(ROOT_DIR, issue.file);
  let content = readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const lineIndex = issue.line - 1;
  const line = lines[lineIndex];

  // Find the Image tag in this line or nearby lines
  let imageStartLine = lineIndex;
  let imageEndLine = lineIndex;

  // Search backwards and forwards to find the complete Image tag
  while (imageStartLine > 0 && !lines[imageStartLine].includes('<Image')) {
    imageStartLine--;
  }
  while (imageEndLine < lines.length - 1 && !lines[imageEndLine].includes('/>')) {
    imageEndLine++;
  }

  // Extract the Image component
  const imageLines = lines.slice(imageStartLine, imageEndLine + 1);
  const imageComponent = imageLines.join('\n');

  // Check if it already has a style prop
  const hasStyleProp = /style\s*=\s*\{\{/.test(imageComponent);

  if (hasStyleProp) {
    // Add mixBlendMode to existing style object
    let modified = false;
    for (let i = imageStartLine; i <= imageEndLine; i++) {
      if (lines[i].includes('style={{')) {
        // Add mixBlendMode after style={{
        lines[i] = lines[i].replace(/style\s*=\s*\{\{/, `style={{\n                  mixBlendMode: 'multiply',`);
        modified = true;
        break;
      }
    }
    if (modified) {
      content = lines.join('\n');
      writeFileSync(filePath, content, 'utf-8');
      fixes.imageBlending.push({
        file: issue.file,
        line: issue.line,
        action: 'Added mixBlendMode to existing style prop'
      });
    }
  } else {
    // Add new style prop with mixBlendMode
    for (let i = imageStartLine; i <= imageEndLine; i++) {
      if (lines[i].includes('className=')) {
        // Add style prop before className
        lines[i] = lines[i].replace(/(\s+)className=/, `$1style={{ mixBlendMode: 'multiply' }}\n$1className=`);
        content = lines.join('\n');
        writeFileSync(filePath, content, 'utf-8');
        fixes.imageBlending.push({
          file: issue.file,
          line: issue.line,
          action: 'Added new style prop with mixBlendMode'
        });
        break;
      } else if (lines[i].includes('alt=')) {
        // Add style prop before alt
        lines[i] = lines[i].replace(/(\s+)alt=/, `$1style={{ mixBlendMode: 'multiply' }}\n$1alt=`);
        content = lines.join('\n');
        writeFileSync(filePath, content, 'utf-8');
        fixes.imageBlending.push({
          file: issue.file,
          line: issue.line,
          action: 'Added new style prop with mixBlendMode'
        });
        break;
      }
    }
  }
}

/**
 * Auto-fix oversized containers
 * Replaces with max-w-7xl
 */
function fixOversizedContainers(issue) {
  const filePath = join(ROOT_DIR, issue.file);
  let content = readFileSync(filePath, 'utf-8');

  // Replace the oversized pattern with max-w-7xl
  const replaced = content.replace(new RegExp(issue.pattern, 'g'), 'max-w-7xl');

  if (replaced !== content) {
    writeFileSync(filePath, replaced, 'utf-8');
    fixes.oversizedContainers.push({
      file: issue.file,
      line: issue.line,
      action: `Replaced ${issue.pattern} with max-w-7xl`
    });
  }
}

/**
 * Main audit function
 */
function runAudit() {
  console.log(`\n${colors.bold}${colors.magenta}🎨 PBS Israel - Design Auditor${colors.reset}`);
  if (FIX_MODE) {
    console.log(`${colors.yellow}${colors.bold}⚡ AUTO-FIX MODE ENABLED${colors.reset}\n`);
  } else {
    console.log(`${colors.gray}Audit mode (use --fix to apply corrections)${colors.reset}\n`);
  }

  // Get all component files
  const files = getComponentFiles();
  console.log(`${colors.gray}Scanning ${files.length} component files...${colors.reset}\n`);

  // Run checks
  files.forEach(file => {
    const content = readFileSync(file, 'utf-8');
    checkImageBlending(file, content);
    checkOversizedContainers(file, content);
  });

  // Report issues
  let totalIssues = 0;

  // 1. Image Blending Issues
  if (issues.imageBlending.length > 0) {
    console.log(`${colors.red}${colors.bold}❌ Image Blending Issues (${issues.imageBlending.length})${colors.reset}`);
    console.log(`${colors.gray}Images in headers must have mix-blend-mode: multiply${colors.reset}\n`);

    issues.imageBlending.forEach(issue => {
      console.log(`  ${colors.yellow}${issue.file}:${issue.line}${colors.reset}`);
      console.log(`  ${colors.gray}${issue.content.substring(0, 80)}...${colors.reset}`);

      if (FIX_MODE) {
        fixImageBlending(issue);
        console.log(`  ${colors.green}✓ Fixed: Added mixBlendMode: 'multiply'${colors.reset}`);
      }
      console.log();
    });
    totalIssues += issues.imageBlending.length;
  }

  // 2. Oversized Containers
  if (issues.oversizedContainers.length > 0) {
    console.log(`${colors.yellow}${colors.bold}⚠️  Oversized Containers (${issues.oversizedContainers.length})${colors.reset}`);
    console.log(`${colors.gray}Header containers must not exceed max-w-7xl${colors.reset}\n`);

    issues.oversizedContainers.forEach(issue => {
      console.log(`  ${colors.yellow}${issue.file}:${issue.line}${colors.reset}`);
      console.log(`  ${colors.gray}Found: ${issue.pattern}${colors.reset}`);

      if (FIX_MODE) {
        fixOversizedContainers(issue);
        console.log(`  ${colors.green}✓ Fixed: Replaced with max-w-7xl${colors.reset}`);
      }
      console.log();
    });
    totalIssues += issues.oversizedContainers.length;
  }

  // Summary
  console.log(`${colors.bold}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}\n`);

  if (totalIssues === 0) {
    console.log(`${colors.green}${colors.bold}✅ All checks passed! Design standards are enforced.${colors.reset}\n`);
  } else {
    if (FIX_MODE) {
      const totalFixes = fixes.imageBlending.length + fixes.oversizedContainers.length;
      console.log(`${colors.green}${colors.bold}✓ Applied ${totalFixes} automatic fixes${colors.reset}\n`);

      if (fixes.imageBlending.length > 0) {
        console.log(`${colors.cyan}Image Blending Fixes:${colors.reset}`);
        fixes.imageBlending.forEach(fix => {
          console.log(`  • ${fix.file}:${fix.line} - ${fix.action}`);
        });
        console.log();
      }

      if (fixes.oversizedContainers.length > 0) {
        console.log(`${colors.cyan}Container Size Fixes:${colors.reset}`);
        fixes.oversizedContainers.forEach(fix => {
          console.log(`  • ${fix.file}:${fix.line} - ${fix.action}`);
        });
        console.log();
      }
    } else {
      console.log(`${colors.red}${colors.bold}Found ${totalIssues} design standard violations${colors.reset}\n`);
      console.log(`${colors.cyan}${colors.bold}Run with --fix to automatically correct these issues:${colors.reset}`);
      console.log(`  ${colors.gray}node .claude/skills/design-auditor.js --fix${colors.reset}\n`);
    }
  }

  process.exit(totalIssues > 0 && !FIX_MODE ? 1 : 0);
}

// Run the auditor
runAudit();
