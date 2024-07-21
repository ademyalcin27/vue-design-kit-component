/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        "c-background": "hsl(var(--color-background) / <alpha-value>)",
        "c-foreground": "hsl(var(--color-foreground) / <alpha-value>)",
        "c-title": "hsl(var(--color-title) / <alpha-value>)",
        "c-title-foreground":
          "hsl(var(--color-title-foreground) / <alpha-value>)",
        "c-primary": "hsl(var(--color-primary) / <alpha-value>)",
        "c-primary-foreground":
          "hsl(var(--color-primary-foreground) / <alpha-value>)",
        "c-muted": "hsl(var(--color-muted) / <alpha-value>)",
        "c-muted-foreground":
          "hsl(var(--color-muted-foreground) / <alpha-value>)",
        "c-destructive": "hsl(var(--color-destructive) / <alpha-value>)",
        "c-destructive-foreground":
          "hsl(var(--color-destructive-foreground) / <alpha-value>)",
        "c-border": "hsl(var(--color-border) / <alpha-value>)",
        "c-input": "hsl(var(--color-input) / <alpha-value>)",
        "c-ring": "hsl(var(--color-ring) / <alpha-value>)",
        "c-radius": "hsl(var(--color-radius) / <alpha-value>)",
      },
      boxShadow: {
        "lg-dark":
          "0 4px 6px -1px rgba(0, 0, 0, 0.6), 0 2px 4px -1px rgba(0, 0, 0, 0.4)", // dark theme shadow
        "lg-light":
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // light theme shadow
      },
    },
  },
  plugins: [],
};
