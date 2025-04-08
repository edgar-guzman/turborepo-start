// we want each package to be responsible for its own content / presets.

import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import("tailwindcss").Config} */
export const tailwindCSSConfig: Omit<Config, "content"> = {
  theme: {
    container: {
      center: true,
      padding: "2rem",
      "2xl": "1400px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
    },
  },
};
