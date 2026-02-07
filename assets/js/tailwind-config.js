tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // Brand Aliases (Primary Stays Consistent)
                "primary": "#6366f1",
                "primary-hover": "#4f46e5",

                // Semantic Backgrounds (CSS Variables)
                "background-main": "var(--bg-main)",
                "surface-1": "var(--bg-surface-1)",
                "surface-2": "var(--bg-surface-2)",
                "surface-dark": "var(--bg-surface-1)", // Alias

                // Semantic Borders (CSS Variables)
                "border-subtle": "var(--border-subtle)",
                "border-strong": "var(--border-strong)",
                "border-dark": "var(--border-subtle)",  // Alias

                // Semantic Text (CSS Variables)
                "text-primary": "var(--text-primary)",
                "text-secondary": "var(--text-secondary)",
                "text-muted": "var(--text-muted)",
                "text-on-primary": "#ffffff", // Always white on primary
                "text-dim": "var(--text-muted)", // Alias
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"],
                "mono": ["JetBrains Mono", "monospace"],
            },
            borderRadius: {
                "DEFAULT": "0.75rem", // 12px
                "lg": "0.75rem",
                "xl": "1rem",
                "2xl": "1.5rem",
                "full": "9999px"
            },
            boxShadow: {
                "soft": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                "strong": "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)",
                "glow": "0 0 15px rgba(100, 103, 242, 0.3)",
            },
            // Enhancements for input interaction
            ringColor: {
                DEFAULT: "#6467f2",
            }
        },
    },
}
