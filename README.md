jsライブラリ

native esmでもnpmでも利用可能なものを配布するテスト

## lib/index.mjs 及び lib/**/*.mjs
ブラウザnativeで読み込まれることを想定したesm
外部の依存はCDNを利用したフルURIで書かれてている。

```html
<script type="module">
  import { Monster, PocketMonster } from './lib/index.mjs;
  // or 個別ファイルのimport
  import { Monster } from './lib/Monster.mjs;

  // またはこのpackageがnpmにpublishされていたなら
  import { Monster, PocketMonster } from 'https://unpkg.com/@hikaruna/pocket-monster;
  // or 個別ファイルのimport
  import { Monster } from 'https://unpkg.com/@hikaruna/pocket-monster/lib/Monster.mjs;
</script>
```

demo: [./demo/dist/esm-demo](./demo/dist/esm-demo)

## lib/index.js
npmの仕組みを通してnodeから呼ばれることを想定したcommonjs。
厳密に言うとwebpackのようなmodule bundleシステムを介して呼び出されることを想定している

package.jsonのmainフィールドの拡張子を省略することで、commonjsとesmoduleを出し分けている。

webpackでは、resolve.extentionsの解決順序を.js→.mjsにするか、.mjsを省かないといけない。

demo: [./demo/dist/webpack-npm-demo](./demo/dist/webpack-npm-demo)
