jsライブラリ

native_esm(cdnで読まれることを想定)でも利用可能で、とcommonjs(webpackなどを介してnpmから読まれることを想定)でも利用可能な、ものを配布するテスト。

1. ts(外部依存はcdn)でライブラリを書く
1. tscでnative_esm(外部依存はcdn)を吐く→ native_esm完成、lib/**/*.mjsとした
1. rollupでlib/index.mjsからcommonjs→ commonjs完成、lib/index.jsとした
    1. その際に、外部依存でcdnになっている部分をrollup-alias-pluginでnode_modules依存に置き換えている
1. package.jsonのmainフィールドに拡張子を省いて```lib/index```と書くことで、esmを求めるユーザーとcommonjs(通常のnode_modules解決)を求めるユーザーに対応している


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
