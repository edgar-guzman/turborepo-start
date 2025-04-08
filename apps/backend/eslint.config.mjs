import { eslintNextConfig } from "@edgarguzman/eslint/next";

/** @type {import("eslint").Linter.Config} */
export default [
    ...eslintNextConfig,
    {
        rules: {
            // Eslint
            "prefer-const": "off",
        },
    },
];
