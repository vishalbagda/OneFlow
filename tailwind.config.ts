import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ink: "#152A4A", paper: "#F7F4EC", seal: "#8E2E2E", amber: "#B98A32", slate: "#5C6673", verified: "#3F6B4F", alert: "#B23B3B", hairline: "#DCD5C4" }, fontFamily: { serif: ["Georgia", "Times New Roman", "serif"], sans: ["Arial", "Helvetica", "sans-serif"], mono: ["Consolas", "monospace"] } } },
  plugins: []
};
export default config;
