import { defineConfig } from "tsup";

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  clean: true,
  dts: true,
  entryPoints: {
    index: "src/index.ts",
    modules: "src/modules/index.ts",
    types: "src/types/index.ts",
    ...Object.fromEntries(
      [
        "checkout",
        "discount",
        "file",
        "licenseKey",
        "licenseKeyInstance",
        "order",
      ].map((module) => [module, `src/modules/${module}/index.ts`])
    ),
  },
  format: ["cjs", "esm"],
  minify: isProduction,
  sourcemap: true,
  splitting: false,
});
