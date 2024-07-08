import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig(() => {
  return {
    build: {
      outDir: "build",
    },
    plugins: [react(), svgr()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./tests/setup",
    },
  };
});
