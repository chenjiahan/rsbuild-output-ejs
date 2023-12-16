import path from "path";
import type { RsbuildPlugin } from "@rsbuild/core";

export const pluginSails = (): RsbuildPlugin => ({
  name: "plugin-sails",

  setup(api) {
    api.modifyRsbuildConfig((config, { mergeRsbuildConfig }) => {
      return mergeRsbuildConfig(config, {
        output: {
          distPath: {
            js: "",
            css: "",
          },
        },
        tools: {
          htmlPlugin(config, { entryName }) {
            config.template = `!!raw-loader!views/${entryName}.ejs`;
            config.filename = path.join(
              __dirname,
              `/dist/views/${entryName}.ejs`
            );
          },
        },
      });
    });
  },
});
