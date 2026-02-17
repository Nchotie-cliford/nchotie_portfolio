import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0A0E1A",
          secondary: "#111827",
          tertiary: "#1E293B",
        },
        foreground: {
          DEFAULT: "#F8FAFC",
          muted: "#94A3B8",
          subtle: "#64748B",
        },
        primary: {
          DEFAULT: "#3B82F6",
          light: "#60A5FA",
          dark: "#2563EB",
        },
        accent: {
          gold: "#F59E0B",
          success: "#10B981",
        },
        border: {
          DEFAULT: "#1E293B",
          light: "#334155",
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "glow": "glow 2s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "gradient-x": "gradientX 5s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #3B82F6, #60A5FA)",
        "gradient-gold": "linear-gradient(135deg, #F59E0B, #FBBF24)",
        "gradient-success": "linear-gradient(135deg, #10B981, #34D399)",
        "gradient-hero": "linear-gradient(135deg, #3B82F6, #8B5CF6, #EC4899)",
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
        "gradient-mesh": "linear-gradient(135deg, #0A0E1A 0%, #1E293B 50%, #0A0E1A 100%)",
      },
      fontSize: {
        "display-1": ["6rem", { lineHeight: "1", fontWeight: "700" }],
        "display-2": ["4.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "heading-1": ["3rem", { lineHeight: "1.2", fontWeight: "600" }],
        "heading-2": ["2.25rem", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["1.25rem", { lineHeight: "1.6", fontWeight: "400" }],
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
