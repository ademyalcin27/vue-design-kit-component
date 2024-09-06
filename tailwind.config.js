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
        "c-error": "hsl(var(--color-error) / <alpha-value>)",
        "c-error-foreground":
          "hsl(var(--color-error-foreground) / <alpha-value>)",
        "c-success": "hsl(var(--color-success) / <alpha-value>)",
        "c-success-foreground":
          "hsl(var(--color-success-foreground) / <alpha-value>)",
        "c-info": "hsl(var(--color-info) / <alpha-value>)",
        "c-info-foreground":
          "hsl(var(--color-info-foreground) / <alpha-value>)",
        "c-warning": "hsl(var(--color-warning) / <alpha-value>)",
        "c-warning-foreground":
          "hsl(var(--color-warning-foreground) / <alpha-value>)",
        "c-message": "hsl(var(--color-message) / <alpha-value>)",
        "c-message-foreground":
          "hsl(var(--color-message-foreground) / <alpha-value>)",
      },
      boxShadow: {
        lg: "var(--box-shadow-lg)",
      },
    },
  },
  plugins: [],
};
