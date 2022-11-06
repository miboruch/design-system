import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import copy from "rollup-plugin-copy";
import svgr from "@svgr/rollup";
import alias from "@rollup/plugin-alias";
import includePaths from "rollup-plugin-includepaths";

const pkg = require("./package.json");

export default [
  {
    input: pkg.source,
    output: [
      {
        file: pkg.main,
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "es",
        exports: "named",
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      babel({ exclude: "node_modules/*" }),
      del({ targets: ["dist/*"] }),
      typescript(),
      svgr(),
      includePaths({ paths: ["./"] }),
      postcss({
        extract: false,
        modules: true,
        extensions: [".css", ".scss"],
        use: ["sass"],
      }),
      copy({
        targets: [{ src: "src/assets/styles/**/*", dest: "dist/assets/styles" }],
      }),
      alias({
        entries: [{ find: "assets/icons", replacement: "../../../assets/icons" }],
      }),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
  {
    input: pkg.source,
    output: [{ file: pkg.types, format: "es" }],
    plugins: [
      external(),
      dts({
        compilerOptions: {
          baseUrl: "./src",
        },
      }),
    ],
  },
];
