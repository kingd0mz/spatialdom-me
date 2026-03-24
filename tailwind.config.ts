import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        elevated: 'var(--color-surface-elevated)',
        'surface-soft': 'var(--color-surface-soft)',
        'surface-overlay': 'var(--color-surface-overlay)',
        'surface-strong': 'var(--color-surface-strong)',
        'surface-hover': 'var(--color-surface-hover)',
        'surface-nav': 'var(--color-surface-nav)',
        'surface-section-soft': 'var(--color-surface-section-soft)',
        'surface-section-elevated': 'var(--color-surface-section-elevated)',
        border: 'var(--color-border)',
        'border-strong': 'var(--color-border-strong)',
        'border-medium': 'var(--color-border-medium)',
        'border-hover': 'var(--color-border-hover)',
        'border-subtle': 'var(--color-border)',
        'text-primary': 'var(--color-text-primary)',
        'text-strong': 'var(--color-text-strong)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-body': 'var(--color-text-body)',
        'text-muted': 'var(--color-text-muted)',
        'text-faint': 'var(--color-text-faint)',
        'text-subtle': 'var(--color-text-subtle)',
        accent: 'var(--color-accent)',
        'accent-soft': 'var(--color-accent-soft)'
      },
      boxShadow: {
        panel: 'var(--shadow-panel)'
      },
      transitionTimingFunction: {
        refined: 'cubic-bezier(0.22, 1, 0.36, 1)'
      },
      maxWidth: {
        shell: '1100px',
        content: '1100px'
      }
    }
  },
  plugins: []
} satisfies Config;
