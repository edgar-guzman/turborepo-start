// tailwind config is required for editor support

import { tailwindCSSConfig } from "@edgarguzman/tailwind";
import type { Config } from "tailwindcss";

const tailwindConfig: Pick<Config, "content" | "presets"> = {
  content: ["./src/**/*.{ts,tsx,md}"],
  presets: [tailwindCSSConfig],
};

export default tailwindConfig;
