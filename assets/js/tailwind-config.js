/* ============================================================
   DISAL HOSTING PLATFORM — Tailwind CSS Configuration
   Brand: Orange #E8792B + Navy #1B3A5C
   Reads semantic tokens from tokens.css CSS variables
   ============================================================ */

tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                /* --- Brand --- */
                "primary":       "#E8792B",
                "primary-hover": "#D0681E",
                "primary-light": "var(--color-primary-light)",

                "secondary":       "#1B3A5C",
                "secondary-hover": "#162F4B",
                "secondary-light": "var(--color-secondary-light)",

                /* --- Orange Scale (for granular use) --- */
                "orange": {
                    50:  "#FFF7ED",
                    100: "#FFEDD5",
                    200: "#FED7AA",
                    300: "#FDBA74",
                    400: "#FB923C",
                    500: "#E8792B",
                    600: "#D0681E",
                    700: "#B45618",
                    800: "#8C4215",
                    900: "#6B3412",
                    950: "#3D1D0A",
                },

                /* --- Navy Scale --- */
                "navy": {
                    50:  "#EFF4F9",
                    100: "#D5E2EF",
                    200: "#A8C3DE",
                    300: "#7BA3CC",
                    400: "#4E83BA",
                    500: "#2E6299",
                    600: "#1B3A5C",
                    700: "#162F4B",
                    800: "#11243A",
                    900: "#0C1929",
                    950: "#070E18",
                },

                /* --- Semantic Backgrounds (CSS Variable-driven) --- */
                "background-main": "var(--bg-main)",
                "background-dark": "var(--bg-main)",   /* legacy alias */
                "surface-1":      "var(--bg-surface-1)",
                "surface-2":      "var(--bg-surface-2)",
                "surface-dark":   "var(--bg-surface-1)", /* legacy alias */
                "sidebar":        "var(--bg-sidebar)",

                /* --- Semantic Borders --- */
                "border-subtle": "var(--border-subtle)",
                "border-strong": "var(--border-strong)",
                "border-dark":   "var(--border-subtle)", /* legacy alias */

                /* --- Semantic Text --- */
                "text-primary":   "var(--text-primary)",
                "text-secondary": "var(--text-secondary)",
                "text-muted":     "var(--text-muted)",
                "text-on-primary": "#FFFFFF",
                "text-dim":        "var(--text-muted)",  /* legacy alias */
                "text-main":       "var(--text-primary)", /* legacy alias */

                /* --- Status --- */
                "success":    "#22C55E",
                "error":      "#EF4444",
                "warning":    "#F59E0B",
                "info":       "#3B82F6",
            },
            fontFamily: {
                "display": ["Inter", "system-ui", "sans-serif"],
                "mono":    ["JetBrains Mono", "Fira Code", "monospace"],
            },
            borderRadius: {
                "DEFAULT": "0.5rem",   /* 8px  — Vercel-style clean */
                "sm":      "0.25rem",  /* 4px  */
                "md":      "0.5rem",   /* 8px  */
                "lg":      "0.75rem",  /* 12px */
                "xl":      "1rem",     /* 16px */
                "2xl":     "1.5rem",   /* 24px */
                "full":    "9999px",
            },
            boxShadow: {
                "xs":     "0 1px 2px rgba(0, 0, 0, 0.05)",
                "soft":   "0 1px 3px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04)",
                "md":     "0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05)",
                "strong": "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04)",
                "xl":     "0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)",
                "glow":   "0 0 20px rgba(232, 121, 43, 0.15)",
            },
            ringColor: {
                DEFAULT: "#E8792B",
            },
        },
    },
}
