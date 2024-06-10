// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import commonjs from "vite-plugin-commonjs";
import terser from "@rollup/plugin-terser";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "MyLib",
      fileName: "my-lib",
    },
    sourcemap: true,
    rollupOptions: {
      external: ["vue"],
      output: [
        {
          format: "esm",
          dir: "dist",
          entryFileNames: "my-library.esm.js",
          globals: {
            vue: "Vue",
          },
        },
        {
          format: "cjs",
          dir: "dist",
          entryFileNames: "my-library.cjs.js",
          globals: {
            vue: "Vue",
          },
        },
      ],
      plugins: [commonjs(), terser()],
    },
  },
  plugins: [dts()],
});
