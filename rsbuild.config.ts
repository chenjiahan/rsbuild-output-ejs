import path from "path";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSails } from "./pluginSails";

export default defineConfig({
  plugins: [pluginReact(), pluginSails()],
  source: {
    entry: {
      app: "./src/index.tsx",
    },
  },
});
