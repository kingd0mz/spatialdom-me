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
        'surface-hover': 'var(--color-surface-hover)',
        border: 'var(--color-border)',
        'border-strong': 'var(--color-border-strong)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-body': 'var(--color-text-body)',
        'text-muted': 'var(--color-text-muted)',
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
        shell: '1100px'
      }
    }
  },
  plugins: []
} satisfies Config;
