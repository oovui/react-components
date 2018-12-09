const babel = require("rollup-plugin-babel");
const resolve = require("rollup-plugin-node-resolve");
const commonJs = require("rollup-plugin-commonjs");

module.exports = {
  input: "./src/index.js",
  output: [
    {
      file: "./lib/index.cjs.js",
      format: "cjs"
    },
    {
      file: "./lib/index.es.js",
      format: "es"
    }    
  ],
  external: [
    "react",
    "react-dom",
    "styled-components"
  ],
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    commonJs({
      include: "node_modules/**"
    }),
    resolve(),
  ]
}
