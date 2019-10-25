import alias from 'rollup-plugin-alias';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: "./lib/index.mjs",
  output: {
    file: "./lib/index.js",
    format: "cjs"
  },
  plugins: [
    resolve()
    ,
    commonjs({
      include: /node_modules/
    })
    ,
    alias({
      resolve: ['.mjs'],
      entries: [
        { find: /^https:\/\/unpkg.com\/lit-html$/, replacement: require.resolve('lit-html') }
      ]
    })
  ]
}
