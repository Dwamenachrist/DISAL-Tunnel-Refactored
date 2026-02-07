tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // Brand Aliases
                "primary": "#6467f2",
                "primary-hover": "#5457d6",

                // Semantic Backgrounds
                "background-main": "#0D0D10", // deepest background
                "surface-1": "#16161D",        // cards, headers
                "surface-2": "#1E1E26",        // hover states, inputs
                "surface-dark": "#16161D",     // Legacy alias (keeping for safety, mapping to surface-1)

                // Semantic Borders
                "border-subtle": "#2D2D35",
                "border-strong": "#40404B",
                "border-dark": "#2D2D35",      // Legacy alias

                // Semantic Text
                "text-primary": "#FFFFFF",      // High contrast for headings
                "text-secondary": "#A1A1AA",    // Body text (Zinc-400 equivalent)
                "text-muted": "#71717A",        // Low priority (Zinc-500 equivalent)
                "text-on-primary": "#FFFFFF",   // Text on primary buttons
                "text-dim": "#9293c9",          // Your legacy text color
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
