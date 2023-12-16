import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    htmlPlugin: {
      template: "!!raw-loader!src/index.ejs",
      filename: "",
    },
  },
});
