import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    zyme: "src/index.ts",
  },
  format: "esm",
  sourcemap: true,
  clean: true,
  esbuildOptions(options) {
    options.platform = "node";
  },
});
