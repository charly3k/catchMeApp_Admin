import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
          'lightWhite': "#f9f9f9",
     
      },
       padding: {
      30: "30px",
    },
    
  },
  },
  plugins: [],
};
export default config;
