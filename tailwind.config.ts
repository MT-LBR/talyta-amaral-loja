import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFA", surface: "#FFFFFF", primary: "#111111", secondary: "#333333", accent: "#E5D9C5", muted: "#888888", border: "#EAEAEA", error: "#9E1C1C", success: "#1C5D3B"
      },
      fontFamily: { sans: ['var(--font-inter)'], serif: ['var(--font-playfair)'] },
    },
  },
  plugins: [],
};
export default config;
