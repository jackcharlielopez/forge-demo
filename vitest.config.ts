import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "happy-dom",
    globals: true,
    setupFiles: ["@testing-library/jest-dom"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
    },
  },
});
