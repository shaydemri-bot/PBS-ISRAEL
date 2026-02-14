#!/usr/bin/env node

/**
 * PBS Israel - Design Guardian UI Audit
 *
 * Scans the codebase for design consistency issues:
 * 1. Hardcoded white backgrounds in header logos
 * 2. CSS classes that exceed max-w-7xl (breaks 100% zoom design)
 * 3. Missing transition properties on buttons
 *
 * Usage: node .claude/skills/ui-audit.js
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = join(__dirname, '..', '..');

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
  bold: '\x1b[1m'
};

// Issues tracker
const issues = {
  whiteBackgrounds: [],
  oversizedContainers: [],
  missingTransitions: []
};

/**
 * Recursively get all files matching extensions
 */
function getFiles(dir, extensions = ['.tsx', '.jsx', '.ts', '.js']) {
  const files = [];

  function traverse(currentDir) {
    const items = readdirSync(currentDir);

    for (const item of items) {
      const fullPath = join(currentDir, item);
      const stat = statSync(fullPath);

      if (stat.isDirectory()) {
        // Skip node_modules, .next, etc.
        if (!item.startsWith('.') && item !== 'node_modules' && item !== '.next' && item !== 'out') {
          traverse(fullPath);
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }

  traverse(dir);
  return files;
}

/**
 * Check for hardcoded white backgrounds in logos/headers
 */
function checkWhiteBackgrounds(filePath, content) {
  const relPath = relative(ROOT_DIR, filePath);
  const lines = content.split('\n');

  // Focus on Header and Logo components
  if (!relPath.includes('Header') && !relPath.includes('Logo') && !relPath.includes('header') && !relPath.includes('logo')) {
    return;
  }

  // Patterns to detect hardcoded white backgrounds
  const patterns = [
    /bg-white(?![/\-])/g,  // bg-white but not bg-white/95
    /background:\s*white/gi,
    /backgroundColor:\s*['"]white['"]/gi,
    /background-color:\s*#fff/gi,
    /background-color:\s*white/gi
  ];

  lines.forEach((line, idx) => {
    patterns.forEach(pattern => {
      if (pattern.test(line)) {
        issues.whiteBackgrounds.push({
          file: relPath,
          line: idx + 1,
          content: line.trim()
        });
      }
    });
  });
}

/**
 * Check for container classes exceeding max-w-7xl
 */
function checkOversizedContainers(filePath, content) {
  const relPath = relative(ROOT_DIR, filePath);
  const lines = content.split('\n');

  // Patterns that exceed max-w-7xl
  const oversizedPatterns = [
    /max-w-screen-2xl/g,
    /max-w-screen-xl/g,
    /max-w-full/g,
    /max-w-none/g
  ];

  lines.forEach((line, idx) => {
    oversizedPatterns.forEach(pattern => {
      if (pattern.test(line)) {
        issues.oversizedContainers.push({
          file: relPath,
          line: idx + 1,
          content: line.trim()
        });
      }
    });
  });
}

/**
 * Check for buttons missing transition properties
 */
function checkMissingTransitions(filePath, content) {
  const relPath = relative(ROOT_DIR, filePath);
  const lines = content.split('\n');

  // Find button elements/components
  const buttonRegex = /<button\b[^>]*className="([^"]*)"/g;
  const linkButtonRegex = /<Link\b[^>]*className="([^"]*)"/g;
  const aButtonRegex = /<a\b[^>]*className="([^"]*)"/g;

  let match;
  const fullContent = content;

  // Check <button> elements
  while ((match = buttonRegex.exec(fullContent)) !== null) {
    const className = match[1];
    if (!className.includes('transition')) {
      const lineNumber = fullContent.substring(0, match.index).split('\n').length;
      issues.missingTransitions.push({
        file: relPath,
        line: lineNumber,
        content: lines[lineNumber - 1]?.trim() || match[0]
      });
    }
  }

  // Check <Link> with button-like classes
  while ((match = linkButtonRegex.exec(fullContent)) !== null) {
    const className = match[1];
    if ((className.includes('bg-') || className.includes('border')) && !className.includes('transition')) {
      const lineNumber = fullContent.substring(0, match.index).split('\n').length;
      issues.missingTransitions.push({
        file: relPath,
        line: lineNumber,
        content: lines[lineNumber - 1]?.trim() || match[0]
      });
    }
  }

  // Check <a> with button-like classes
  while ((match = aButtonRegex.exec(fullContent)) !== null) {
    const className = match[1];
    if ((className.includes('bg-') || className.includes('border')) && !className.includes('transition')) {
      const lineNumber = fullContent.substring(0, match.index).split('\n').length;
      issues.missingTransitions.push({
        file: relPath,
        line: lineNumber,
        content: lines[lineNumber - 1]?.trim() || match[0]
      });
    }
  }
}

/**
 * Main audit function
 */
function runAudit() {
  console.log(`\n${colors.bold}${colors.cyan}🛡️  PBS Israel - Design Guardian UI Audit${colors.reset}\n`);
  console.log(`${colors.gray}Scanning codebase for design consistency issues...${colors.reset}\n`);

  // Get all relevant files
  const files = getFiles(ROOT_DIR);
  console.log(`${colors.gray}Found ${files.length} files to audit${colors.reset}\n`);

  // Run checks
  files.forEach(file => {
    const content = readFileSync(file, 'utf-8');
    checkWhiteBackgrounds(file, content);
    checkOversizedContainers(file, content);
    checkMissingTransitions(file, content);
  });

  // Report results
  let totalIssues = 0;

  // 1. White Backgrounds
  if (issues.whiteBackgrounds.length > 0) {
    console.log(`${colors.red}${colors.bold}❌ Hardcoded White Backgrounds (${issues.whiteBackgrounds.length})${colors.reset}`);
    console.log(`${colors.gray}Issue: Header logos with hardcoded white backgrounds break dark mode${colors.reset}\n`);

    issues.whiteBackgrounds.forEach(issue => {
      console.log(`  ${colors.yellow}${issue.file}:${issue.line}${colors.reset}`);
      console.log(`  ${colors.gray}${issue.content}${colors.reset}\n`);
    });
    totalIssues += issues.whiteBackgrounds.length;
  }

  // 2. Oversized Containers
  if (issues.oversizedContainers.length > 0) {
    console.log(`${colors.yellow}${colors.bold}⚠️  Oversized Containers (${issues.oversizedContainers.length})${colors.reset}`);
    console.log(`${colors.gray}Issue: Containers exceeding max-w-7xl break the tight 100% zoom design${colors.reset}\n`);

    issues.oversizedContainers.forEach(issue => {
      console.log(`  ${colors.yellow}${issue.file}:${issue.line}${colors.reset}`);
      console.log(`  ${colors.gray}${issue.content}${colors.reset}\n`);
    });
    totalIssues += issues.oversizedContainers.length;
  }

  // 3. Missing Transitions
  if (issues.missingTransitions.length > 0) {
    console.log(`${colors.blue}${colors.bold}ℹ️  Missing Transitions (${issues.missingTransitions.length})${colors.reset}`);
    console.log(`${colors.gray}Issue: Buttons without transitions feel abrupt and unpolished${colors.reset}\n`);

    issues.missingTransitions.forEach(issue => {
      console.log(`  ${colors.yellow}${issue.file}:${issue.line}${colors.reset}`);
      console.log(`  ${colors.gray}${issue.content.substring(0, 100)}...${colors.reset}\n`);
    });
    totalIssues += issues.missingTransitions.length;
  }

  // Summary
  console.log(`${colors.bold}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${colors.reset}\n`);

  if (totalIssues === 0) {
    console.log(`${colors.green}${colors.bold}✅ All checks passed! Design system is consistent.${colors.reset}\n`);
  } else {
    console.log(`${colors.red}${colors.bold}Found ${totalIssues} design consistency issues${colors.reset}\n`);

    // Recommendations
    console.log(`${colors.cyan}${colors.bold}Recommendations:${colors.reset}`);
    if (issues.whiteBackgrounds.length > 0) {
      console.log(`  • Use ${colors.green}bg-white/0${colors.reset} or ${colors.green}transparent${colors.reset} for logo backgrounds`);
    }
    if (issues.oversizedContainers.length > 0) {
      console.log(`  • Replace with ${colors.green}max-w-7xl${colors.reset} or smaller for tight layouts`);
    }
    if (issues.missingTransitions.length > 0) {
      console.log(`  • Add ${colors.green}transition-all duration-300${colors.reset} to interactive elements`);
    }
    console.log();
  }

  process.exit(totalIssues > 0 ? 1 : 0);
}

// Run the audit
runAudit();
